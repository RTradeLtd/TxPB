package pb

import (
	"context"

	blocks "github.com/ipfs/go-block-format"
	"github.com/ipfs/go-cid"
	ipld "github.com/ipfs/go-ipld-format"
	"github.com/ipfs/go-merkledag"
	"github.com/pkg/errors"
)

//DAGService implements ipld.DAGService using NodeAPIClient
type DAGService struct {
	client NodeAPIClient
}

var _ ipld.DAGService = (*DAGService)(nil)

//NewDAGService returns a DAGService that implements ipld.DAGService using NodeAPIClient
func NewDAGService(client NodeAPIClient) *DAGService {
	return &DAGService{
		client: client,
	}
}

// Get retrieves nodes by CID. Depending on the NodeGetter
// implementation, this may involve fetching the Node from a remote
// machine; consider setting a deadline in the context.
func (d *DAGService) Get(ctx context.Context, c cid.Cid) (ipld.Node, error) {
	resp, err := d.client.Dag(ctx, &DagRequest{
		RequestType: DAGREQTYPE_DAG_GET,
		Hash:        c.String(),
	})
	if err != nil {
		return nil, err
	}
	block := blocks.NewBlock(resp.RawData)
	if block.Cid() != c {
		return nil, errors.New("unexpected data received from node server")
	}
	return ipld.Decode(block)
}

// GetMany returns a channel of NodeOptions given a set of CIDs.
func (d *DAGService) GetMany(ctx context.Context, cs []cid.Cid) <-chan *ipld.NodeOption {
	out := make(chan *ipld.NodeOption, len(cs))
	go func() {
		for _, c := range cs {
			n, err := d.Get(ctx, c)
			out <- &ipld.NodeOption{
				Node: n,
				Err:  err,
			}
		}
		close(out)
	}()
	return out
}

// Add adds a node to this DAG.
func (d *DAGService) Add(ctx context.Context, n ipld.Node) error {
	return d.AddMany(ctx, []ipld.Node{n})
}

// AddMany adds many nodes to this DAG.
func (d *DAGService) AddMany(ctx context.Context, ns []ipld.Node) error {
	for _, n := range ns {
		switch typed := n.(type) {
		default:
			return errors.Errorf("Can not add type: %T using dag client", n)
		case *merkledag.ProtoNode:
			data, err := typed.Marshal()
			if err != nil {
				return err
			}
			if _, err = d.client.Dag(ctx, &DagRequest{
				RequestType:         DAGREQTYPE_DAG_PUT,
				Data:                data,
				ObjectEncoding:      "protobuf",
				SerializationFormat: "protobuf",
			}); err != nil {
				return err
			}
		}
	}
	return nil
}

// Remove removes a node from this DAG.
//
// Remove does not error if the requested node does not exist.
func (d *DAGService) Remove(ctx context.Context, c cid.Cid) error {
	return d.RemoveMany(ctx, []cid.Cid{c})
}

// RemoveMany removes many nodes from this DAG.
//
// RemoveMany does not error if any nodes do not exist.
func (d *DAGService) RemoveMany(ctx context.Context, cs []cid.Cid) error {
	return nil //TODO: remove from d.client
}
