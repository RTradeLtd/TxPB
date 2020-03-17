package main

import (
	"context"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"os"

	pb "github.com/RTradeLtd/TxPB/v3/go"
	"google.golang.org/grpc"
)

var (
	xAPI = "xapi.temporal.cloud:9090"
)

func main() {
	conn, err := grpc.Dial(xAPI, grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	nc := pb.NewNodeAPIClient(conn)
	fc := pb.NewFileAPIClient(conn)
	resp, err := nc.Dag(context.Background(), &pb.DagRequest{
		RequestType: pb.DAGREQTYPE_DAG_PUT,
		Data:        []byte("hello world this is test data"),
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("dag put hash: %s\n", resp.GetHashes()[0])
	hash := uploadFile(fc)
	fmt.Printf("upload file hash: %s\n", hash)
	resp, err = nc.Dag(context.Background(), &pb.DagRequest{
		RequestType: pb.DAGREQTYPE_DAG_GET_LINKS,
		Hash:        hash,
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("number of links: %v\n", len(resp.GetLinks()))
}

func uploadFile(nc pb.FileAPIClient) string {
	defer os.Remove("justsometestdata")
	if err := ioutil.WriteFile("justsometestdata", []byte("hello world"), os.FileMode(0640)); err != nil {
		log.Fatal(err)
	}
	stream, err := nc.UploadFile(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	file, err := os.Open("justsometestdata")
	if err != nil {
		log.Fatal(err)
	}
	// declare file options
	if err := stream.Send(&pb.UploadRequest{Options: &pb.UploadOptions{MultiHash: "sha2-256", Chunker: "size-1"}}); err != nil {
		log.Fatal(err)
	}
	// upload file - chunked at 5mb each
	buf := make([]byte, 4194294)
	for {
		n, err := file.Read(buf)
		if err != nil && err == io.EOF {
			// only break if we haven't read any bytes, otherwise exit
			if n == 0 {
				break
			}
		} else if err != nil && err != io.EOF {
			log.Fatal(err)
		}
		if err := stream.Send(&pb.UploadRequest{Blob: &pb.Blob{Content: buf[:n]}}); err != nil {
			log.Fatal(err)
		}
	}
	resp, err := stream.CloseAndRecv()
	if err != nil {
		log.Fatal(err)
	}
	return resp.GetHash()
}
