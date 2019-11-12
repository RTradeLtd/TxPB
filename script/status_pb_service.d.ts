// package: pb
// file: status.proto

import * as status_pb from "./status_pb";
import * as util_pb from "./util_pb";
import {grpc} from "@improbable-eng/grpc-web";

type StatusAPIVersion = {
  readonly methodName: string;
  readonly service: typeof StatusAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof util_pb.Empty;
  readonly responseType: typeof status_pb.VersionResponse;
};

type StatusAPIStatus = {
  readonly methodName: string;
  readonly service: typeof StatusAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof util_pb.Empty;
  readonly responseType: typeof status_pb.StatusResponse;
};

export class StatusAPI {
  static readonly serviceName: string;
  static readonly Version: StatusAPIVersion;
  static readonly Status: StatusAPIStatus;
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

export class StatusAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  version(
    requestMessage: util_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: status_pb.VersionResponse|null) => void
  ): UnaryResponse;
  version(
    requestMessage: util_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: status_pb.VersionResponse|null) => void
  ): UnaryResponse;
  status(
    requestMessage: util_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: status_pb.StatusResponse|null) => void
  ): UnaryResponse;
  status(
    requestMessage: util_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: status_pb.StatusResponse|null) => void
  ): UnaryResponse;
}

