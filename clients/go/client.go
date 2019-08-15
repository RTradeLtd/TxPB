package client

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"io"

	"time"

	"sync"

	pb "github.com/RTradeLtd/TxPB/go"
	"github.com/c2h5oh/datasize"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

// Client is a golang thin-client to
// interact with a TemporalX server
type Client struct {
	conn *grpc.ClientConn
	pb.FileAPIClient
	pb.DagAPIClient
	pb.NodeAPIClient
	pb.StatusAPIClient
	pb.PubSubAPIClient
}

type Opts struct {
	URL string
	TLS struct {
		CertFile string
		KeyFile string
	}
}

// NewClient dials a connection to the grpc server and registered api endpoints
func NewClient(opts Opts, dialOpts ...grpc.DialOption) (*Client, error) {
	if opts.TLS.CertFile != "" {
		tlsOpts, err := credentials.NewClientTLSFromFile(opts.TLS.CertFile, "")
		if err != nil {
			return nil, err
		}
		dialOpts = append(dialOpts, grpc.WithTransportCredentials(tlsOpts))
	} else {
		dialOpts = append(dialOpts, grpc.WithInsecure())
	}
	conn, err := grpc.Dial(opts.URL, dialOpts...)
	if err != nil {
		return nil, err
	}
	client := &Client{conn: conn}
	client.FileAPIClient = pb.NewFileAPIClient(client.conn)
	client.DagAPIClient = pb.NewDagAPIClient(client.conn)
	client.NodeAPIClient = pb.NewNodeAPIClient(client.conn)
	client.StatusAPIClient = pb.NewStatusAPIClient(client.conn)
	client.PubSubAPIClient = pb.NewPubSubAPIClient(client.conn)
	return client, nil
}

// Connected is a convenience function for checking if the given peer is connected to our node
func (c *Client) Connected(ctx context.Context, peer string) (bool, error) {
	resp, err := c.IsConnected(ctx, &pb.IsConnectedRequest{PeerIDs: []string{peer}})
	if err != nil {
		return false, err
	}
	return resp.GetConnected()[peer], nil
}

// ConnectToPeer is a convenience function to connect to a single peer
func (c *Client) ConnectToPeer(ctx context.Context, multiaddr string) error {
	_, err := c.Connect(ctx, &pb.ConnectRequest{MultiAddrs: []string{multiaddr}})
	return err
}

// DisconnectFromPeer is a convenience function to disconnect from a single peer
func (c *Client) DisconnectFromPeer(ctx context.Context, id string) error {
	resp, err := c.Disconnect(ctx, &pb.DisconnectRequest{PeerIDs: []string{id}})
	if err != nil {
		return err
	}
	if !resp.GetStatus()[id].GetDisconnected() {
		return errors.New(resp.GetStatus()[id].GetReason())
	}
	return nil
}

// GetPeerCount is a convenience function for returning the number of peers we are connected to
func (c *Client) GetPeerCount(ctx context.Context) (int, error) {
	resp, err := c.GetPeers(ctx, &pb.Empty{})
	if err != nil {
		return 0, err
	}
	return len(resp.GetPeerIDs()), nil
}

// UploadFile is a convenience function for uploading a single file
func (c *Client) UploadFile(
	ctx context.Context,
	file io.Reader,
	opts *pb.UploadOptions,
	printProgress bool,
	grpcOpts ...grpc.CallOption,
) (*pb.PutResponse, error) {
	stream, err := c.FileAPIClient.UploadFile(ctx, grpcOpts...)
	if err != nil {
		return nil, err
	}

	// declare file options
	if err := stream.Send(&pb.UploadRequest{Options: opts}); err != nil {
		return nil, err
	}
	// upload file - chunked at 5mb each
	buf := make([]byte, 4194294)
	var pt *progressTracker
	if printProgress {
		pt = &progressTracker{mux: &sync.RWMutex{}}
		go func() {
			timer := time.NewTicker(time.Second * 2)
			defer timer.Stop()
			for {
				select {
				case <-ctx.Done():
					return
				case <-stream.Context().Done():
					return
				case <-timer.C:
					pt.Print()
				}
			}
		}()
	}
	for {
		n, err := file.Read(buf)
		if err == io.EOF {
			break
		} else if err != nil {
			return nil, err
		}
		if err := stream.Send(&pb.UploadRequest{Blob: &pb.Blob{Content: buf[:n]}}); err != nil {
			return nil, err
		}
		if printProgress {
			pt.Update(n)
		}
	}

	// done
	return stream.CloseAndRecv()
}

// DownloadFile is a convenience function for downloading a single file
func (c *Client) DownloadFile(
	ctx context.Context,
	download *pb.DownloadRequest,
	printProgress bool,
	grpcOpts ...grpc.CallOption,
) (*bytes.Buffer, error) {
	stream, err := c.FileAPIClient.DownloadFile(ctx, download, grpcOpts...)
	if err != nil {
		return nil, err
	}
	buf := new(bytes.Buffer)
	var pt *progressTracker
	if printProgress {
		pt = &progressTracker{mux: &sync.RWMutex{}}
		go func() {
			timer := time.NewTicker(time.Second * 2)
			defer timer.Stop()
			for {
				select {
				case <-ctx.Done():
					return
				case <-stream.Context().Done():
					return
				case <-timer.C:
					pt.Print()
				}
			}
		}()
	}
	for {
		b, err := stream.Recv()
		if err == io.EOF {
			break
		} else if err != nil {
			return nil, err
		}
		if _, err := buf.Write(b.GetBlob().GetContent()); err != nil {
			return nil, err
		}
		if printProgress {
			pt.Set(buf.Len())
		}
	}
	if err := stream.CloseSend(); err != nil {
		return nil, err
	}
	return buf, nil
}

// Close is used to terminate our grpc client connection
func (c *Client) Close() error {
	return c.conn.Close()
}

type progressTracker struct {
	bytesSent int
	mux       *sync.RWMutex
}

func (p *progressTracker) Update(sent int) {
	p.mux.Lock()
	p.bytesSent = p.bytesSent + sent
	p.mux.Unlock()
}

func (p *progressTracker) Set(sent int) {
	p.mux.Lock()
	p.bytesSent = sent
	p.mux.Unlock()
}

func (p *progressTracker) Print() {
	fmt.Println("megabytes sent", uint64(p.bytesSent)/datasize.MB.Bytes())
}
