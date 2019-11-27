// package: pb
// file: p2p.proto

import * as p2p_pb from "./p2p_pb";
import * as util_pb from "./util_pb";
import {grpc} from "@improbable-eng/grpc-web";

type P2PAPIClose = {
  readonly methodName: string;
  readonly service: typeof P2PAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof p2p_pb.CloseRequest;
  readonly responseType: typeof util_pb.Empty;
};

type P2PAPIForward = {
  readonly methodName: string;
  readonly service: typeof P2PAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof p2p_pb.ForwardRequest;
  readonly responseType: typeof util_pb.Empty;
};

type P2PAPIListen = {
  readonly methodName: string;
  readonly service: typeof P2PAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof p2p_pb.ListenRequest;
  readonly responseType: typeof util_pb.Empty;
};

type P2PAPILs = {
  readonly methodName: string;
  readonly service: typeof P2PAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof p2p_pb.LsRequest;
  readonly responseType: typeof p2p_pb.LsResponse;
};

export class P2PAPI {
  static readonly serviceName: string;
  static readonly Close: P2PAPIClose;
  static readonly Forward: P2PAPIForward;
  static readonly Listen: P2PAPIListen;
  static readonly Ls: P2PAPILs;
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

export class P2PAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  close(
    requestMessage: p2p_pb.CloseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  close(
    requestMessage: p2p_pb.CloseRequest,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  forward(
    requestMessage: p2p_pb.ForwardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  forward(
    requestMessage: p2p_pb.ForwardRequest,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  listen(
    requestMessage: p2p_pb.ListenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  listen(
    requestMessage: p2p_pb.ListenRequest,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  ls(
    requestMessage: p2p_pb.LsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: p2p_pb.LsResponse|null) => void
  ): UnaryResponse;
  ls(
    requestMessage: p2p_pb.LsRequest,
    callback: (error: ServiceError|null, responseMessage: p2p_pb.LsResponse|null) => void
  ): UnaryResponse;
}

