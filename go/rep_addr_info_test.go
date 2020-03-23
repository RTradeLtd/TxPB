package pb

import (
	"math/rand"
	"sync"
	"testing"

	"github.com/ipfs/go-cid"
	libcryto "github.com/libp2p/go-libp2p-core/crypto"
	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/multiformats/go-multiaddr"
)

func TestAddMultiAddr(t *testing.T) {
	a := &AddrInfo{}
	m, err := multiaddr.NewMultiaddr("/ip4/1.2.3.4/tcp/5")
	fatalOnError(t, err)
	if a.AddMultiAddr(m) == nil {
		t.Fatal("expected error adding address without id")
	}
	a.IdBytes = []byte("not real id")
	if a.AddMultiAddr(m) == nil {
		t.Fatal("expected error adding address with fake id")
	}
	id, err := peer.IDFromPublicKey(getMockHostKey(-1).pub)
	fatalOnError(t, err)
	a.SetID(id)
	fatalOnError(t, a.AddMultiAddr(m))
	ms, err := peer.AddrInfoToP2pAddrs(&peer.AddrInfo{
		ID: id,
	})
	fatalOnError(t, err)
	err = a.AddMultiAddr(ms[0])
	if err == nil {
		t.Fatal("expected error adding an address without a transport")
	}
	id2, err := peer.IDFromPublicKey(getMockHostKey(-2).pub)
	fatalOnError(t, err)
	ms, err = peer.AddrInfoToP2pAddrs(&peer.AddrInfo{
		ID:    id2,
		Addrs: []multiaddr.Multiaddr{m},
	})
	fatalOnError(t, err)
	err = a.AddMultiAddr(ms[0])
	if err == nil {
		t.Fatal("expected error adding an address of a different peer")
	}
}

func fatalOnError(t *testing.T, err error, msg ...interface{}) {
	t.Helper()
	if err != nil {
		t.Fatal(err, msg)
	}
}

type keyPair struct {
	priv libcryto.PrivKey
	pub  libcryto.PubKey
}

var mockHostMap map[mockHostInfo]keyPair
var mockHostLock sync.Mutex

func getMockHostKey(m mockHostInfo) keyPair {
	mockHostLock.Lock()
	defer mockHostLock.Unlock()

	if mockHostMap == nil {
		mockHostMap = make(map[mockHostInfo]keyPair)
	}

	k, ok := mockHostMap[m]
	if !ok {
		priv, pub, err := libcryto.GenerateECDSAKeyPair(rand.New(rand.NewSource(int64(m)))) //generate keys deterministically for testing.
		if err != nil {
			panic(err)
		}
		k.priv = priv
		k.pub = pub
		mockHostMap[m] = k
	}
	return k
}

type mockHostInfo int

func (m mockHostInfo) ID() peer.ID {
	kp := getMockHostKey(m)
	id, err := peer.IDFromPublicKey(kp.pub)
	if err != nil {
		panic(err)
	}
	return id
}
func (m mockHostInfo) Addrs() []multiaddr.Multiaddr {
	addr, err := multiaddr.NewMultiaddr("/ip4/127.0.0.1/tcp/12345")
	if err != nil {
		panic(err)
	}
	return []multiaddr.Multiaddr{addr}
}

func generateTestHostInfos(count int) []HostInfo {
	hs := []HostInfo{}
	for i := 0; i < count; i++ {
		hs = append(hs, mockHostInfo(i))
	}
	return hs
}

func generateTestServerSources(count int) []*ServerSource {
	hs := generateTestHostInfos(count)
	ss := []*ServerSource{}
	for _, h := range hs {
		s, err := NewServerSourceFromHost(h, 0)
		if err != nil {
			panic(err)
		}
		ss = append(ss, s)
	}
	return ss
}

func generateTestReplicationFile(t *testing.T, servers int, replicationFactor int32) *Replication {
	r := NewReplication()

	id, err := cid.Decode("bafybeihykld7uyxzogax6vgyvag42y7464eywpf55gxi5qpoisibh3c5wa")
	if err != nil {
		t.Fatal(err)
	}
	if err = r.AddCIDs(id); err != nil {
		t.Fatal(err)
	}

	r.Servers = generateTestServerSources(servers)

	r.ReplicationFactor = replicationFactor

	if err = r.Valid(true); err != nil {
		t.Fatal(err)
	}
	return r
}
