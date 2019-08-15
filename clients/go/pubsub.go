package client

import (
	"context"
	"fmt"
	"io"

	pb "github.com/RTradeLtd/TxPB/go"
)

var (
	// PrintMsgExecFunc is used to print pubsub messages as they are received
	PrintMsgExecFunc = func(msg *pb.PubSubMessageResponse) {
		fmt.Println(string(msg.GetData()))
	}
)

// PubSubSubscribe is a helper method to subscribe to a given topic
// It takes in a msgExecFunc argument that allows you to craft your own functions
// that do different executions whenever a message is received.
// If msgExecFunc is empty then we use a default function that prints received messages
func (c *Client) PubSubSubscribe(ctx context.Context, topic string, discover bool, msgExecFunc func(msg *pb.PubSubMessageResponse)) error {
	if msgExecFunc == nil {
		msgExecFunc = PrintMsgExecFunc
	}
	stream, err := c.Subscribe(ctx, &pb.SubscribeRequest{
		Topic:    topic,
		Discover: discover,
	})
	if err != nil {
		return err
	}
	errChan := make(chan error, 1)
	go func() {
		for {
			msg, err := stream.Recv()
			if err != nil {
				errChan <- err
				return
			}
			msgExecFunc(msg)
		}
	}()
	for {
		select {
		case err := <-errChan:
			if err == io.EOF {
				return nil
			}
		case <-stream.Context().Done():
			return nil
		case <-ctx.Done():
			return stream.CloseSend()
		}
	}
}

// PubSubPublish is a helper function used to publish pubusb messages
func (c *Client) PubSubPublish(ctx context.Context, topic string, data []byte, advertise bool) error {
	stream, err := c.Publish(ctx)
	if err != nil {
		return err
	}
	if err := stream.Send(&pb.PublishRequest{
		Topic:     topic,
		Data:      data,
		Advertise: advertise,
	}); err != nil {
		return err
	}
	_, err = stream.CloseAndRecv()
	return err
}

// PubSubListPeers is a helper function used to list pubsub peers
func (c *Client) PubSubListPeers(ctx context.Context, topics ...string) (*pb.ListPeersResponse, error) {
	return c.ListPeers(ctx, &pb.ListPeersRequest{
		Topics: topics,
	})
}

// PubSubGetTopics is a helper function used to fetch subscribed pubsub topics
func (c *Client) PubSubGetTopics(ctx context.Context) (*pb.TopicsResponse, error) {
	return c.GetTopics(ctx, &pb.Empty{})
}
