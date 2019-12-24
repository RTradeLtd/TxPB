// package: pb
// file: pubsub.proto

import * as pubsub_pb from "./pubsub_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PubSubAPIPubSub = {
  readonly methodName: string;
  readonly service: typeof PubSubAPI;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof pubsub_pb.PubSubRequest;
  readonly responseType: typeof pubsub_pb.PubSubResponse;
};

export class PubSubAPI {
  static readonly serviceName: string;
  static readonly PubSub: PubSubAPIPubSub;
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

export class PubSubAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  pubSub(metadata?: grpc.Metadata): BidirectionalStream<pubsub_pb.PubSubRequest, pubsub_pb.PubSubResponse>;
}

