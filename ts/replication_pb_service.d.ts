// package: pb
// file: replication.proto

import * as replication_pb from "./replication_pb";
import {grpc} from "@improbable-eng/grpc-web";

type replicatorAdd = {
  readonly methodName: string;
  readonly service: typeof replicator;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof replication_pb.Subscription;
  readonly responseType: typeof replication_pb.ReplicationStatus;
};

type replicatorStatus = {
  readonly methodName: string;
  readonly service: typeof replicator;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof replication_pb.Subscription;
  readonly responseType: typeof replication_pb.ReplicationStatus;
};

type replicatorGetSubscriptionUpdate = {
  readonly methodName: string;
  readonly service: typeof replicator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof replication_pb.Subscription;
  readonly responseType: typeof replication_pb.SubscriptionUpdate;
};

type replicatorSubmitReplication = {
  readonly methodName: string;
  readonly service: typeof replicator;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof replication_pb.SignedSubscription;
  readonly responseType: typeof replication_pb.ReplicationStatus;
};

export class replicator {
  static readonly serviceName: string;
  static readonly Add: replicatorAdd;
  static readonly Status: replicatorStatus;
  static readonly GetSubscriptionUpdate: replicatorGetSubscriptionUpdate;
  static readonly SubmitReplication: replicatorSubmitReplication;
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

export class replicatorClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  add(requestMessage: replication_pb.Subscription, metadata?: grpc.Metadata): ResponseStream<replication_pb.ReplicationStatus>;
  status(requestMessage: replication_pb.Subscription, metadata?: grpc.Metadata): ResponseStream<replication_pb.ReplicationStatus>;
  getSubscriptionUpdate(
    requestMessage: replication_pb.Subscription,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: replication_pb.SubscriptionUpdate|null) => void
  ): UnaryResponse;
  getSubscriptionUpdate(
    requestMessage: replication_pb.Subscription,
    callback: (error: ServiceError|null, responseMessage: replication_pb.SubscriptionUpdate|null) => void
  ): UnaryResponse;
  submitReplication(requestMessage: replication_pb.SignedSubscription, metadata?: grpc.Metadata): ResponseStream<replication_pb.ReplicationStatus>;
}

