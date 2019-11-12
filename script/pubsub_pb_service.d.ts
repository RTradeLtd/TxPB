// package: pb
// file: pubsub.proto

import * as pubsub_pb from "./pubsub_pb";
import * as util_pb from "./util_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PubSubAPIPubSubGetTopics = {
  readonly methodName: string;
  readonly service: typeof PubSubAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof util_pb.Empty;
  readonly responseType: typeof pubsub_pb.PubSubTopicsResponse;
};

type PubSubAPIPubSubListPeers = {
  readonly methodName: string;
  readonly service: typeof PubSubAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pubsub_pb.PubSubListPeersRequest;
  readonly responseType: typeof pubsub_pb.PubSubListPeersResponse;
};

type PubSubAPIPubSubSubscribe = {
  readonly methodName: string;
  readonly service: typeof PubSubAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof pubsub_pb.PubSubSubscribeRequest;
  readonly responseType: typeof pubsub_pb.PubSubMessageResponse;
};

type PubSubAPIPubSubPublish = {
  readonly methodName: string;
  readonly service: typeof PubSubAPI;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof pubsub_pb.PubSubPublishRequest;
  readonly responseType: typeof util_pb.Empty;
};

export class PubSubAPI {
  static readonly serviceName: string;
  static readonly PubSubGetTopics: PubSubAPIPubSubGetTopics;
  static readonly PubSubListPeers: PubSubAPIPubSubListPeers;
  static readonly PubSubSubscribe: PubSubAPIPubSubSubscribe;
  static readonly PubSubPublish: PubSubAPIPubSubPublish;
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
  pubSubGetTopics(
    requestMessage: util_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pubsub_pb.PubSubTopicsResponse|null) => void
  ): UnaryResponse;
  pubSubGetTopics(
    requestMessage: util_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: pubsub_pb.PubSubTopicsResponse|null) => void
  ): UnaryResponse;
  pubSubListPeers(
    requestMessage: pubsub_pb.PubSubListPeersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pubsub_pb.PubSubListPeersResponse|null) => void
  ): UnaryResponse;
  pubSubListPeers(
    requestMessage: pubsub_pb.PubSubListPeersRequest,
    callback: (error: ServiceError|null, responseMessage: pubsub_pb.PubSubListPeersResponse|null) => void
  ): UnaryResponse;
  pubSubSubscribe(requestMessage: pubsub_pb.PubSubSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<pubsub_pb.PubSubMessageResponse>;
  pubSubPublish(metadata?: grpc.Metadata): RequestStream<pubsub_pb.PubSubPublishRequest>;
}

