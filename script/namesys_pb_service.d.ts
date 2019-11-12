// package: pb
// file: namesys.proto

import * as namesys_pb from "./namesys_pb";
import * as util_pb from "./util_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NameSysAPINameSysResolve = {
  readonly methodName: string;
  readonly service: typeof NameSysAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof namesys_pb.NameSysResolveRequest;
  readonly responseType: typeof namesys_pb.NameSysResolveResult;
};

type NameSysAPINameSysResolveAsync = {
  readonly methodName: string;
  readonly service: typeof NameSysAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof namesys_pb.NameSysResolveRequest;
  readonly responseType: typeof namesys_pb.NameSysResolveResult;
};

type NameSysAPINameSysPublish = {
  readonly methodName: string;
  readonly service: typeof NameSysAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof namesys_pb.NameSysPublishRequest;
  readonly responseType: typeof util_pb.Empty;
};

export class NameSysAPI {
  static readonly serviceName: string;
  static readonly NameSysResolve: NameSysAPINameSysResolve;
  static readonly NameSysResolveAsync: NameSysAPINameSysResolveAsync;
  static readonly NameSysPublish: NameSysAPINameSysPublish;
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

export class NameSysAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  nameSysResolve(
    requestMessage: namesys_pb.NameSysResolveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: namesys_pb.NameSysResolveResult|null) => void
  ): UnaryResponse;
  nameSysResolve(
    requestMessage: namesys_pb.NameSysResolveRequest,
    callback: (error: ServiceError|null, responseMessage: namesys_pb.NameSysResolveResult|null) => void
  ): UnaryResponse;
  nameSysResolveAsync(requestMessage: namesys_pb.NameSysResolveRequest, metadata?: grpc.Metadata): ResponseStream<namesys_pb.NameSysResolveResult>;
  nameSysPublish(
    requestMessage: namesys_pb.NameSysPublishRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
  nameSysPublish(
    requestMessage: namesys_pb.NameSysPublishRequest,
    callback: (error: ServiceError|null, responseMessage: util_pb.Empty|null) => void
  ): UnaryResponse;
}

