package pb

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"io"

	libcrypto "github.com/libp2p/go-libp2p-core/crypto"
	"github.com/libp2p/go-libp2p-core/peer"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

//NewSignedSubscription creates a fully signed SignedSubscription with the given private key
func NewSignedSubscription(topic string, version int64, r *Replication, key libcrypto.PrivKey) (*SignedSubscription, error) {
	ss := &SignedSubscription{}
	ss.SetTopic(topic)
	ss.SetVersion(version)
	if err := ss.SetReplication(r); err != nil {
		return nil, fmt.Errorf("error verifying replication: %s", err)
	}
	if err := ss.Sign(key); err != nil {
		return nil, fmt.Errorf("error signing replication: %s", err)
	}
	return ss, nil
}

//GetTopic returns the topic of the SignedSubscription
func (ss *SignedSubscription) GetTopic() string {
	return ss.GetSubPart().GetTopic()
}

//SetTopic sets the topic of the SignedSubscription
func (ss *SignedSubscription) SetTopic(topic string) {
	ss.GetOrCreateSubPart().Topic = topic
	ss.RemoveSignature()
}

//GetAuthorID returns the author of the Subscription
func (s *Subscription) GetAuthorID() (peer.ID, error) {
	return peer.IDFromBytes(s.AuthorIdBytes)
}

//GetAuthorID returns the author of the SignedSubscription, signature verification is not performed.
func (ss *SignedSubscription) GetAuthorID() (peer.ID, error) {
	return ss.GetSubPart().GetAuthorID()
}

//SetAuthorID sets the author of the Subscription
func (s *Subscription) SetAuthorID(id peer.ID) error {
	data, err := id.Marshal()
	if err != nil {
		return err
	}
	s.AuthorIdBytes = data
	return nil
}

//SetAuthorID sets the author of the SignedSubscription. If success, any old signature is removed.
func (ss *SignedSubscription) SetAuthorID(id peer.ID) error {
	err := ss.GetOrCreateSubPart().SetAuthorID(id)
	if err != nil {
		return err
	}
	ss.RemoveSignature()
	return nil
}

//GetVersion returns the version of the SignedSubscription, signature verification is not performed.
func (ss *SignedSubscription) GetVersion() int64 {
	return ss.GetUpdatePart().Version
}

//SetVersion sets the version of the SignedSubscription, and any old signature is removed.
func (ss *SignedSubscription) SetVersion(v int64) {
	ss.GetOrCreateUpdatePart().Version = v
	ss.RemoveSignature()
}

//GetReplication return the replication file from this SubscriptionUpdate
func (u *SubscriptionUpdate) GetReplication() (*Replication, error) {
	if u == nil {
		return nil, status.Error(codes.Internal, "SubscriptionUpdate is nil for GetReplication")
	}
	if len(u.ReplicationBytes) == 0 {
		return nil, status.Error(codes.Internal, "ReplicationBytes is nil for GetReplication")
	}
	var r Replication
	if err := r.Unmarshal(u.ReplicationBytes); err != nil {
		return nil, err
	}
	return &r, nil
}

//GetReplication return the replication file from this subscription, signature verification is not performed.
func (ss *SignedSubscription) GetReplication() (*Replication, error) {
	return ss.GetUpdatePart().GetReplication()
}

//SetReplication sets the replication file for this SubscriptionUpdate. Validation is strictly performed and any old signature is removed
func (u *SubscriptionUpdate) SetReplication(r *Replication) error {
	if err := r.Valid(true); err != nil {
		return err
	}
	rdata, err := r.Marshal()
	if err != nil {
		return err
	}
	u.ReplicationBytes = rdata
	u.RemoveSignature()
	return nil
}

//SetReplication sets the replication file for this SignedSubscription. Validation is strictly performed and any old signature is removed
func (ss *SignedSubscription) SetReplication(r *Replication) error {
	return ss.GetOrCreateUpdatePart().SetReplication(r)
}

//RemoveSignature removes the signature from this SubscriptionUpdate
func (u *SubscriptionUpdate) RemoveSignature() {
	if len(u.GetSignature()) > 0 {
		u.Signature = nil
	}
}

//RemoveSignature removes the signature from this SignedSubscription
func (ss *SignedSubscription) RemoveSignature() {
	ss.GetUpdatePart().RemoveSignature()
}

//Sign signs with the given private key
func (ss *SignedSubscription) Sign(key libcrypto.PrivKey) error {
	if key == nil {
		return errors.New("can not sign a subscription with a nil key")
	}
	if len(ss.GetUpdatePart().GetReplicationBytes()) == 0 {
		return errors.New("can not sign a subscription for an empty replication")
	}
	oldAuthor, err := ss.GetAuthorID()
	if err != nil && len(ss.GetSubPart().GetAuthorIdBytes()) != 0 {
		return fmt.Errorf("invalid old AuthorID: %s", err)
	}
	signingAuthor, err := peer.IDFromPrivateKey(key)
	if err != nil {
		return err
	}
	if len(oldAuthor) != 0 && oldAuthor != signingAuthor {
		return errors.New("can not sign a subscription for a different author")
	}
	if err = ss.SetAuthorID(signingAuthor); err != nil {
		return err
	}
	data := ss.verificationData(nil)
	signature, err := key.Sign(data)
	if err != nil {
		return err
	}
	ss.UpdatePart.Signature = signature
	return nil
}

//verificationData returns the binary representation of SignedSubscription for verification.
//An optional bytes buffer with unfilled capacity can be supplied for memory reuse.
func (ss *SignedSubscription) verificationData(buf []byte) []byte {
	p := func(err error) {
		if err != nil {
			panic(err)
		}
	}

	if buf == nil {
		buf = make([]byte, 0, ss.Size()+30)
	}

	w := bytes.NewBuffer(buf)
	_, err := writeLenBytes(w, []byte(ss.GetSubPart().Topic))
	p(err) // buffer should never return error
	_, err = writeLenBytes(w, ss.GetSubPart().AuthorIdBytes)
	p(err)
	_, err = writeVersion(w, ss.GetUpdatePart().Version)
	p(err)
	_, err = writeLenBytes(w, ss.GetUpdatePart().ReplicationBytes)
	p(err)
	return w.Bytes()
}

//Verify verifies the SignedSubscription against the provided public key.
func (ss *SignedSubscription) Verify(pubkey libcrypto.PubKey, strict bool) error {
	if haveUnrecognized(ss) {
		return errors.New("SignedSubscription contains unrecognized data")
	}
	data := ss.verificationData(nil)
	ok, err := pubkey.Verify(data, ss.GetUpdatePart().Signature)
	if err != nil {
		return err
	}
	if !ok {
		return errors.New("SignedSubscription Verify failed")
	}
	r, err := ss.GetReplication()
	if err != nil {
		return err
	}
	return r.Valid(strict)
}

//GetOrCreateSubPart creates an empty Subscription for a SignedSubscription if it does not exits.
//Panics if SignedSubscription is nil.
func (ss *SignedSubscription) GetOrCreateSubPart() *Subscription {
	sub := ss.GetSubPart()
	if sub == nil {
		sub = &Subscription{}
		ss.SubPart = sub
	}
	return sub
}

//GetOrCreateUpdatePart creates an empty SubscriptionUpdate for a SignedSubscription if it does not exits.
//Panics if SignedSubscription is nil.
func (ss *SignedSubscription) GetOrCreateUpdatePart() *SubscriptionUpdate {
	u := ss.GetUpdatePart()
	if u == nil {
		u = &SubscriptionUpdate{}
		ss.UpdatePart = u
	}
	return u
}

func writeLenBytes(w io.Writer, p []byte) (int, error) {
	numBuf := make([]byte, binary.MaxVarintLen64)
	n := binary.PutUvarint(numBuf, uint64(len(p)))
	_, err := w.Write(numBuf[:n])
	if err != nil {
		return 0, err
	}
	return w.Write(p)
}

func writeVersion(w io.Writer, v int64) (int, error) {
	numBuf := make([]byte, binary.MaxVarintLen64)
	n := binary.PutUvarint(numBuf, uint64(v))
	return w.Write(numBuf[:n])
}
