package pb

import (
	"context"
	"errors"
	"fmt"
	"net"
	"time"

	libp2ptls "github.com/RTradeLtd/go-libp2p-tls"
	libcryto "github.com/libp2p/go-libp2p-core/crypto"
	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/multiformats/go-multiaddr"
	manet "github.com/multiformats/go-multiaddr-net"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

//Close is a function that closes a resource
type Close func() error

//NewReplicatorClientConstructor is a convenient way to make a NewReplicatorClient.
//
//The underlying implementation of the returned ReplicatorClient may change in miner releases.
//To take better control of the ReplicatorClient, such as changing connection options,
//please construct it manually by copying the source code of this function, or implement the
//ReplicatorClient interface.
func NewReplicatorClientConstructor(myPrivateKey libcryto.PrivKey, server *AddrInfo, addPeer func(id peer.ID, ma multiaddr.Multiaddr), logger *zap.Logger) (ReplicatorClient, Close, error) {
	p, err := NewSimpleConnectionProvider(myPrivateKey, addPeer, logger)
	if err != nil {
		return nil, nil, err
	}
	conn, err := p.ConnectionToServer(server)
	if err != nil {
		return nil, nil, err
	}
	return NewReplicatorClient(conn), conn.Close, nil
}

// GRPCConnectionProvider provides the ConnectionToServer function,
// which returns a *grpc.ClientConn from a AddrInfo, using the IP address
// given in MultiAddress, port from GrpcPort, and certificate checked with
// peer.ID.
//
// GRPCConnectionProvider is used by replication server and clients to connect
// to other replication servers
//
// TODO:
// - investigate grpc.WithContextDialer to use with go-libp2p-swarm
type GRPCConnectionProvider interface {
	//ConnectionToServer returns grpc client connection from AddrInfo
	ConnectionToServer(a *AddrInfo) (conn *grpc.ClientConn, err error)
}

//SimpleGRPCConnectionProvider is a simple GRPCConnectionProvider
type SimpleGRPCConnectionProvider struct {
	peerID    peer.ID
	tlsConfig *libp2ptls.Identity
	opts      []grpc.DialOption
	addPeer   func(id peer.ID, ma multiaddr.Multiaddr)
	timeout   time.Duration
	l         *zap.Logger
}

var _ GRPCConnectionProvider = &SimpleGRPCConnectionProvider{}

//AddPeer is a callback when a new peer should be added
type AddPeer func(id peer.ID, ma multiaddr.Multiaddr)

//NewSimpleConnectionProvider creates a SimpleConnectionProvider
func NewSimpleConnectionProvider(pk libcryto.PrivKey, addPeer AddPeer, logger *zap.Logger) (*SimpleGRPCConnectionProvider, error) {
	tc, err := libp2ptls.NewIdentity(pk)
	if err != nil {
		return nil, err
	}
	id, err := peer.IDFromPublicKey(pk.GetPublic())
	if err != nil {
		return nil, err
	}
	if logger == nil {
		logger = zap.NewNop()
	}
	return &SimpleGRPCConnectionProvider{
		peerID:    id,
		tlsConfig: tc,
		opts: []grpc.DialOption{
			grpc.WithBlock(),
			grpc.WithDisableRetry(),
		},
		addPeer: addPeer,
		timeout: time.Second, //default initial connection timeout
		l:       logger,
	}, nil
}

//ErrConnectToSelf is returned by a connection provider if it attempts to connect to itself
var ErrConnectToSelf = errors.New("connection to self not allowed")

// SetInitConnectionTimeout sets the initial connection timeout when connecting to a server.
// A low time out allows skipping bad servers and addresses quickly.
// A long timeout prevents errors during high load situations.
// The default timeout is 1 second.
func (s *SimpleGRPCConnectionProvider) SetInitConnectionTimeout(d time.Duration) {
	s.timeout = d
}

//ConnectionToServer returns grpc client connection from AddrInfo
func (s *SimpleGRPCConnectionProvider) ConnectionToServer(a *AddrInfo) (*grpc.ClientConn, error) {
	id, err := a.GetID()
	if err != nil {
		return nil, err
	}
	if id == s.peerID {
		return nil, ErrConnectToSelf
	}
	mas, err := a.GetMultiAddrs()
	if err != nil {
		return nil, err
	}
	for _, ma := range mas {
		network, address, err := manet.DialArgs(ma)
		if err != nil {
			s.l.Error("decode DialArgs from MultiAddr", zap.Error(err))
			continue
		}
		if a.GetGrpcPort() != 0 {
			tcp, err := net.ResolveTCPAddr(network, address)
			if err != nil {
				s.l.Error("ResolveTCPAddr", zap.Error(err), zap.String("address", address))
				continue
			}
			tcp.Port = int(a.GetGrpcPort())
			address = tcp.String()
		} else {
			//TODO: use libp2p port for grpc
			return nil, errors.New("libp2p grpc transport not yet implemented, a dedicated grpc port is required.")
		}
		tlsConfig := s.tlsConfig.ReusableConfigForPeer(id)
		opts := append(s.opts, grpc.WithTransportCredentials(credentials.NewTLS(tlsConfig)))

		// if we have multiple addresses, try them one by one with timeout.
		dialCtx, cancel := context.WithTimeout(context.Background(), s.timeout)
		defer cancel()

		cc, err := grpc.DialContext(dialCtx, address, opts...)
		if err != nil {
			s.l.Debug("dialing", zap.String("address", address), zap.Error(err))
			continue
		}
		if s.addPeer != nil {
			s.addPeer(id, ma)
		}
		return cc, nil
	}
	return nil, fmt.Errorf("can not connect to server after trying all addresses")
}
