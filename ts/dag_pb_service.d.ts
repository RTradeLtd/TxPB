// package: pb
// file: dag.proto

import * as dag_pb from "./dag_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DagAPIDag = {
  readonly methodName: string;
  readonly service: typeof DagAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof dag_pb.DagRequest;
  readonly responseType: typeof dag_pb.DagResponse;
};

type DagAPIDagStream = {
  readonly methodName: string;
  readonly service: typeof DagAPI;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof dag_pb.DagRequest;
  readonly responseType: typeof dag_pb.DagResponse;
};

export class DagAPI {
  static readonly serviceName: string;
  static readonly Dag: DagAPIDag;
  static readonly DagStream: DagAPIDagStream;
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

export class DagAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  dag(
    requestMessage: dag_pb.DagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: dag_pb.DagResponse|null) => void
  ): UnaryResponse;
  dag(
    requestMessage: dag_pb.DagRequest,
    callback: (error: ServiceError|null, responseMessage: dag_pb.DagResponse|null) => void
  ): UnaryResponse;
  dagStream(metadata?: grpc.Metadata): BidirectionalStream<dag_pb.DagRequest, dag_pb.DagResponse>;
}

