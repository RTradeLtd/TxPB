// package: pb
// file: node.proto

import * as node_pb from "./node_pb";
import * as util_pb from "./util_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NodeAPIGetPeers = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof util_pb.Empty;
  readonly responseType: typeof node_pb.GetPeersResponse;
};

type NodeAPIConnect = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.ConnectRequest;
  readonly responseType: typeof util_pb.Empty;
};

type NodeAPIDisconnect = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.DisconnectRequest;
  readonly responseType: typeof node_pb.DisconnectResponse;
};

type NodeAPIIsConnected = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.IsConnectedRequest;
  readonly responseType: typeof node_pb.IsConnectedResponse;
};

type NodeAPIEnableExtras = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.EnableExtrasRequest;
  readonly responseType: typeof util_pb.Empty;
};

type NodeAPIDisableExtras = {
  readonly methodName: string;
  readonly service: typeof NodeAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_pb.DisableExtrasRequest;
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

export class NodeAPI {
  static readonly serviceName: string;
  static readonly GetPeers: NodeAPIGetPeers;
  static readonly Connect: NodeAPIConnect;
  static readonly Disconnect: NodeAPIDisconnect;
  static readonly IsConnected: NodeAPIIsConnected;
  static readonly EnableExtras: NodeAPIEnableExtras;
  static readonly DisableExtras: NodeAPIDisableExtras;
  static readonly P2P: NodeAPIP2P;
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
  getPeers(
    requestMessage: util_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: node_pb.GetPeersResponse|null) => void
  ): UnaryResponse;
  getPeers(
    requestMessage: util_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: node_pb.GetPeersResponse|null) => void
  ): UnaryResponse;
  connect(
    requestMessage: node_pb.ConnectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  connect(
    requestMessage: node_pb.ConnectRequest,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  disconnect(
    requestMessage: node_pb.DisconnectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: node_pb.DisconnectResponse|null) => void
  ): UnaryResponse;
  disconnect(
    requestMessage: node_pb.DisconnectRequest,
    callback: (error: ServiceError|null, responseMessage: node_pb.DisconnectResponse|null) => void
  ): UnaryResponse;
  isConnected(
    requestMessage: node_pb.IsConnectedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: node_pb.IsConnectedResponse|null) => void
  ): UnaryResponse;
  isConnected(
    requestMessage: node_pb.IsConnectedRequest,
    callback: (error: ServiceError|null, responseMessage: node_pb.IsConnectedResponse|null) => void
  ): UnaryResponse;
  enableExtras(
    requestMessage: node_pb.EnableExtrasRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  enableExtras(
    requestMessage: node_pb.EnableExtrasRequest,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  disableExtras(
    requestMessage: node_pb.DisableExtrasRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  disableExtras(
    requestMessage: node_pb.DisableExtrasRequest,
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
}

