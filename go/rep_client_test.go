package pb

import (
	"context"
	"crypto/tls"
	"net"
	"testing"
	"time"

	libp2ptls "github.com/RTradeLtd/go-libp2p-tls"
	manet "github.com/multiformats/go-multiaddr-net"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func TestSimpleConnectionProvider(t *testing.T) {
	//create test server
	listener, err := net.Listen("tcp", "localhost:0")
	fatalOnError(t, err)
	defer listener.Close()
	serverID, err := libp2ptls.NewIdentity(getMockHostKey(0).priv)
	fatalOnError(t, err)
	serverTLSConfig := serverID.ReusableConfigForAny()
	serverTLSConfig.NextProtos = []string{"h2"}
	listener = tls.NewListener(listener, serverTLSConfig)
	server := grpc.NewServer()
	srv := &UnimplementedReplicatorServer{}
	RegisterReplicatorServer(server, srv)

	serverErr := make(chan error)
	go func() {
		serverErr <- server.Serve(listener)
	}()
	defer func() {
		server.Stop()
		fatalOnError(t, <-serverErr)
	}()

	r := generateTestReplicationFile(t, 3, 2)
	hostAddr, err := manet.FromNetAddr(listener.Addr())
	fatalOnError(t, err)
	err = r.Servers[0].AddrInfo.AddMultiAddr(hostAddr) //so we have a fake and a real address
	fatalOnError(t, err)

	//set my port
	tcp, err := net.ResolveTCPAddr(listener.Addr().Network(), listener.Addr().String())
	fatalOnError(t, err)
	r.Servers[0].AddrInfo.GrpcPort = int32(tcp.Port)

	//create test client
	kp := getMockHostKey(-1)
	rc, close, err := NewReplicatorClientConstructor(kp.priv, r.Servers[0].AddrInfo, nil, nil)
	fatalOnError(t, err)
	defer close()

	//try connection
	_, err = rc.GetSubscriptionUpdate(context.Background(), &Subscription{})
	if status.Code(err) != codes.Unimplemented {
		t.Fatal("unimplemented error expected for err:", err)
	}
}

func TestSimpleGRPCConnectionProvider_SetInitConnectionTimeout(t *testing.T) {
	s, err := NewSimpleConnectionProvider(getMockHostKey(0).priv, nil, nil)
	fatalOnError(t, err)
	if s.timeout != time.Second {
		t.Fatal("default timeout should be 1 second, got ", s.timeout)
	}
	newTimeout := 2 * time.Second
	s.SetInitConnectionTimeout(newTimeout)
	if s.timeout != newTimeout {
		t.Fatalf(" timeout should be updated to %v, got %v", newTimeout, s.timeout)
	}
}
