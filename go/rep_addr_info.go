package pb

import (
	"errors"
	"fmt"

	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/multiformats/go-multiaddr"
)

// HostInfo is an interface that we can build an AddrInfo from.
// It is a subset of libp2p/go-libp2p-core/host/#Host.
type HostInfo interface {
	ID() peer.ID
	Addrs() []multiaddr.Multiaddr
}

//NewAddrInfoFromHost creates an AddrInfo from a HostInfo
func NewAddrInfoFromHost(h HostInfo, gport int32) (*AddrInfo, error) {
	a := &AddrInfo{
		GrpcPort: gport,
	}
	a.SetID(h.ID())
	for _, m := range h.Addrs() {
		if err := a.AddMultiAddr(m); err != nil {
			return nil, err
		}
	}
	if len(a.AddrsBytes) == 0 { //TODO: remove this check when we support connection to a peer with ID only for replication feature
		return nil, errors.New("host have no address")
	}
	return a, nil
}

// GetID returns the libp2p PeerID of AddrInfo,
// unless an error is encountered during decoding.
func (a *AddrInfo) GetID() (peer.ID, error) {
	return peer.IDFromBytes(a.IdBytes)
}

// SetID sets the id_bytes field from libp2p PeerID
func (a *AddrInfo) SetID(id peer.ID) {
	bs, err := id.MarshalBinary()
	if err != nil {
		panic(err) // assert id.MarshalBinary never errors
	}
	a.IdBytes = bs
}

// GetMultiAddrs returns the location addresses of AddrInfo as a []Multiaddr.
// If Multiaddr contains an ID part, it must match ID in AddrInfo.
// If any errors are encountered during decoding, the first error is returned,
// and the returned Multiaddr will only contain good addresses.
func (a *AddrInfo) GetMultiAddrs() ([]multiaddr.Multiaddr, error) {
	ms := make([]multiaddr.Multiaddr, 0, len(a.AddrsBytes))
	var firstError error
	for _, bs := range a.AddrsBytes {
		m, err := a.transportOnlyBytes(bs)
		if err != nil {
			if firstError == nil {
				firstError = err
			}
			continue
		}
		ms = append(ms, m)
	}
	return ms, firstError
}

// AddMultiAddr add a Multiaddr to the end of addrs_bytes
func (a *AddrInfo) AddMultiAddr(m multiaddr.Multiaddr) error {
	m, err := a.transportOnly(m)
	if err != nil {
		return err
	}
	a.AddrsBytes = append(a.AddrsBytes, m.Bytes())
	return nil
}

func (a *AddrInfo) transportOnlyBytes(bs []byte) (multiaddr.Multiaddr, error) {
	m, err := multiaddr.NewMultiaddrBytes(bs)
	if err != nil {
		return nil, err
	}
	return a.transportOnly(m)
}

func (a *AddrInfo) transportOnly(m multiaddr.Multiaddr) (multiaddr.Multiaddr, error) {
	aid, err := a.GetID()
	if err != nil {
		return nil, err // must set a valid ID first
	}
	transport, id := peer.SplitAddr(m)
	if transport == nil {
		return nil, errors.New("address in AddrInfo without transport")
	}
	if id != "" && id != aid {
		return nil, fmt.Errorf("can not set address with a different ID %x != %x", []byte(id), a.IdBytes)
	}
	return transport, nil
}
