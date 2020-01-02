// package: pb
// file: admin.proto

import * as admin_pb from "./admin_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AdminAPIManageGC = {
  readonly methodName: string;
  readonly service: typeof AdminAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof admin_pb.ManageGCRequest;
  readonly responseType: typeof admin_pb.ManageGCResponse;
};

type AdminAPIRefCount = {
  readonly methodName: string;
  readonly service: typeof AdminAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof admin_pb.RefCountRequest;
  readonly responseType: typeof admin_pb.RefCountResponse;
};

export class AdminAPI {
  static readonly serviceName: string;
  static readonly ManageGC: AdminAPIManageGC;
  static readonly RefCount: AdminAPIRefCount;
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

export class AdminAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  manageGC(
    requestMessage: admin_pb.ManageGCRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: admin_pb.ManageGCResponse|null) => void
  ): UnaryResponse;
  manageGC(
    requestMessage: admin_pb.ManageGCRequest,
    callback: (error: ServiceError|null, responseMessage: admin_pb.ManageGCResponse|null) => void
  ): UnaryResponse;
  refCount(
    requestMessage: admin_pb.RefCountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: admin_pb.RefCountResponse|null) => void
  ): UnaryResponse;
  refCount(
    requestMessage: admin_pb.RefCountRequest,
    callback: (error: ServiceError|null, responseMessage: admin_pb.RefCountResponse|null) => void
  ): UnaryResponse;
}

