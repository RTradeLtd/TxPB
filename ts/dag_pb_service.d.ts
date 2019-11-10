// package: pb
// file: dag.proto

import * as dag_pb from "./dag_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DagAPIDagPut = {
  readonly methodName: string;
  readonly service: typeof DagAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof dag_pb.DagPutRequest;
  readonly responseType: typeof dag_pb.DagPutResponse;
};

type DagAPIDagGet = {
  readonly methodName: string;
  readonly service: typeof DagAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof dag_pb.DagGetRequest;
  readonly responseType: typeof dag_pb.DagGetResponse;
};

type DagAPINewIPLDNode = {
  readonly methodName: string;
  readonly service: typeof DagAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof dag_pb.NewIPLDNodeRequest;
  readonly responseType: typeof dag_pb.DagPutResponse;
};

type DagAPIAddLinksToNode = {
  readonly methodName: string;
  readonly service: typeof DagAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof dag_pb.AddLinksRequest;
  readonly responseType: typeof dag_pb.DagPutResponse;
};

type DagAPIGetLinks = {
  readonly methodName: string;
  readonly service: typeof DagAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof dag_pb.GetLinksRequest;
  readonly responseType: typeof dag_pb.GetLinksResponse;
};

export class DagAPI {
  static readonly serviceName: string;
  static readonly DagPut: DagAPIDagPut;
  static readonly DagGet: DagAPIDagGet;
  static readonly NewIPLDNode: DagAPINewIPLDNode;
  static readonly AddLinksToNode: DagAPIAddLinksToNode;
  static readonly GetLinks: DagAPIGetLinks;
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
  dagPut(
    requestMessage: dag_pb.DagPutRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: dag_pb.DagPutResponse|null) => void
  ): UnaryResponse;
  dagPut(
    requestMessage: dag_pb.DagPutRequest,
    callback: (error: ServiceError|null, responseMessage: dag_pb.DagPutResponse|null) => void
  ): UnaryResponse;
  dagGet(
    requestMessage: dag_pb.DagGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: dag_pb.DagGetResponse|null) => void
  ): UnaryResponse;
  dagGet(
    requestMessage: dag_pb.DagGetRequest,
    callback: (error: ServiceError|null, responseMessage: dag_pb.DagGetResponse|null) => void
  ): UnaryResponse;
  newIPLDNode(
    requestMessage: dag_pb.NewIPLDNodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: dag_pb.DagPutResponse|null) => void
  ): UnaryResponse;
  newIPLDNode(
    requestMessage: dag_pb.NewIPLDNodeRequest,
    callback: (error: ServiceError|null, responseMessage: dag_pb.DagPutResponse|null) => void
  ): UnaryResponse;
  addLinksToNode(
    requestMessage: dag_pb.AddLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: dag_pb.DagPutResponse|null) => void
  ): UnaryResponse;
  addLinksToNode(
    requestMessage: dag_pb.AddLinksRequest,
    callback: (error: ServiceError|null, responseMessage: dag_pb.DagPutResponse|null) => void
  ): UnaryResponse;
  getLinks(
    requestMessage: dag_pb.GetLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: dag_pb.GetLinksResponse|null) => void
  ): UnaryResponse;
  getLinks(
    requestMessage: dag_pb.GetLinksRequest,
    callback: (error: ServiceError|null, responseMessage: dag_pb.GetLinksResponse|null) => void
  ): UnaryResponse;
}

