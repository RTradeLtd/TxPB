// package: pb
// file: node.proto

import * as node_pb from "./node_pb";
import * as util_pb from "./util_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NodeAPIConnMgmt = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.ConnMgmtRequest;
  readonly responseType: typeof node_pb.ConnMgmtResponse;
};

type NodeAPIExtras = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.ExtrasRequest;
  readonly responseType: typeof util_pb.Empty;
};

type NodeAPIP2P = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.P2PRequest;
  readonly responseType: typeof node_pb.P2PResponse;
};

type NodeAPIBlockstore = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.BlockstoreRequest;
  readonly responseType: typeof node_pb.BlockstoreResponse;
};

type NodeAPIDag = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.DagRequest;
  readonly responseType: typeof node_pb.DagResponse;
};

type NodeAPIKeystore = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.KeystoreRequest;
  readonly responseType: typeof node_pb.KeystoreResponse;
};

export class NodeAPI {
  static readonly serviceName: string;
  static readonly ConnMgmt: NodeAPIConnMgmt;
  static readonly Extras: NodeAPIExtras;
  static readonly P2P: NodeAPIP2P;
  static readonly Blockstore: NodeAPIBlockstore;
  static readonly Dag: NodeAPIDag;
  static readonly Keystore: NodeAPIKeystore;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class NodeAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  connMgmt(
    requestMessage: node_pb.ConnMgmtRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: node_pb.ConnMgmtResponse|null) => void
  ): UnaryResponse;
  connMgmt(
    requestMessage: node_pb.ConnMgmtRequest,
    callback: (error: ServiceError|null, responseMessage: node_pb.ConnMgmtResponse|null) => void
  ): UnaryResponse;
  extras(
    requestMessage: node_pb.ExtrasRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  extras(
    requestMessage: node_pb.ExtrasRequest,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  p2P(
    requestMessage: node_pb.P2PRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: node_pb.P2PResponse|null) => void
  ): UnaryResponse;
  p2P(
    requestMessage: node_pb.P2PRequest,
    callback: (error: ServiceError|null, responseMessage: node_pb.P2PResponse|null) => void
  ): UnaryResponse;
  blockstore(
    requestMessage: node_pb.BlockstoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: node_pb.BlockstoreResponse|null) => void
  ): UnaryResponse;
  blockstore(
    requestMessage: node_pb.BlockstoreRequest,
    callback: (error: ServiceError|null, responseMessage: node_pb.BlockstoreResponse|null) => void
  ): UnaryResponse;
  dag(
    requestMessage: node_pb.DagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: node_pb.DagResponse|null) => void
  ): UnaryResponse;
  dag(
    requestMessage: node_pb.DagRequest,
    callback: (error: ServiceError|null, responseMessage: node_pb.DagResponse|null) => void
  ): UnaryResponse;
  keystore(
    requestMessage: node_pb.KeystoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: node_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
  keystore(
    requestMessage: node_pb.KeystoreRequest,
    callback: (error: ServiceError|null, responseMessage: node_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
}

