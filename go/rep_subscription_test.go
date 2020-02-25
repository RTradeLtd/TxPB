package pb

import (
	"reflect"
	"testing"

	libcryto "github.com/libp2p/go-libp2p-core/crypto"
)

func TestSignedSubscription_Verify(t *testing.T) {
	key1 := getMockHostKey(1)
	key2 := getMockHostKey(2)

	tests := []struct {
		name      string
		editer    func(ss *SignedSubscription)
		verifyKey libcryto.PubKey
		wantErr   bool
		strictErr bool
	}{
		{
			"pass",
			func(ss *SignedSubscription) {},
			key1.pub, false, false,
		}, {
			"fail on wrong key",
			func(ss *SignedSubscription) {},
			key2.pub, true, true,
		}, {
			"fail on unrecognized data in root of SignedSubscription",
			func(ss *SignedSubscription) {
				ss.XXX_unrecognized = []byte{0}
			},
			key1.pub, true, true,
		}, {
			"fail on changed data",
			func(ss *SignedSubscription) {
				ss.UpdatePart.Version = 99
			},
			key1.pub, true, true,
		}, {
			"fail on changed signature",
			func(ss *SignedSubscription) {
				ss.UpdatePart.Signature = []byte("bad signature")
			},
			key1.pub, true, true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			ss := &SignedSubscription{}
			ss.SetTopic("test-topic")
			ss.SetVersion(1)
			r := generateTestReplicationFile(t, 2, 2)
			fatalOnError(t, ss.SetReplication(r))
			fatalOnError(t, ss.Sign(key1.priv))
			tt.editer(ss)
			if err := ss.Verify(tt.verifyKey, false); (err != nil) != tt.wantErr {
				t.Errorf("SignedSubscription.Verify() not strict, error = %v, wantErr %v", err, tt.wantErr)
			}
			if err := ss.Verify(tt.verifyKey, true); (err != nil) != tt.wantErr {
				t.Errorf("SignedSubscription.Verify() strict, error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestSignedSubscription_GetReplication(t *testing.T) {
	tests := []struct {
		name    string
		ss      *SignedSubscription
		want    *Replication
		wantErr bool
	}{{
		"nil SignedSubscription",
		nil, nil, true,
	}, {
		"nil UpdatePart",
		&SignedSubscription{
			UpdatePart: nil,
		}, nil, true,
	}, {
		"nil replication",
		&SignedSubscription{
			UpdatePart: &SubscriptionUpdate{},
		}, nil, true,
	}, {
		"bad replication",
		&SignedSubscription{
			UpdatePart: &SubscriptionUpdate{
				ReplicationBytes: []byte("bad data"),
			},
		}, nil, true,
	}}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := tt.ss.GetReplication()
			if (err != nil) != tt.wantErr {
				t.Errorf("SignedSubscription.GetReplication() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("SignedSubscription.GetReplication() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestSignedSubscription_Sign(t *testing.T) {
	key := getMockHostKey(0)
	testSS := func() *SignedSubscription {
		ss := &SignedSubscription{}
		fatalOnError(t, ss.GetOrCreateSubPart().SetAuthorID(mockHostInfo(0).ID()))
		ss.GetOrCreateUpdatePart().ReplicationBytes = []byte{0}
		return ss
	}

	badAuthorId := testSS()
	badAuthorId.SubPart.AuthorIdBytes = []byte{0}

	author2 := testSS()
	fatalOnError(t, author2.SubPart.SetAuthorID(mockHostInfo(99).ID()))

	tests := []struct {
		name    string
		ss      *SignedSubscription
		wantErr bool
	}{{
		"nil case",
		nil,
		true,
	}, {
		"bad author id",
		badAuthorId,
		true,
	}, {
		"different author",
		author2,
		true,
	}}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := tt.ss.Sign(key.priv); (err != nil) != tt.wantErr {
				t.Errorf("SignedSubscription.Sign() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}
