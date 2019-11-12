// package: pb
// file: keystore.proto

import * as keystore_pb from "./keystore_pb";
import {grpc} from "@improbable-eng/grpc-web";

type KeystoreAPIKeystoreHas = {
  readonly methodName: string;
  readonly service: typeof KeystoreAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof keystore_pb.KeystoreRequest;
  readonly responseType: typeof keystore_pb.KeystoreResponse;
};

type KeystoreAPIKeystoreGet = {
  readonly methodName: string;
  readonly service: typeof KeystoreAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof keystore_pb.KeystoreRequest;
  readonly responseType: typeof keystore_pb.KeystoreResponse;
};

type KeystoreAPIKeystorePut = {
  readonly methodName: string;
  readonly service: typeof KeystoreAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof keystore_pb.KeystoreRequest;
  readonly responseType: typeof keystore_pb.KeystoreResponse;
};

type KeystoreAPIKeystoreDelete = {
  readonly methodName: string;
  readonly service: typeof KeystoreAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof keystore_pb.KeystoreRequest;
  readonly responseType: typeof keystore_pb.KeystoreResponse;
};

type KeystoreAPIKeystoreList = {
  readonly methodName: string;
  readonly service: typeof KeystoreAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof keystore_pb.KeystoreRequest;
  readonly responseType: typeof keystore_pb.KeystoreResponse;
};

export class KeystoreAPI {
  static readonly serviceName: string;
  static readonly KeystoreHas: KeystoreAPIKeystoreHas;
  static readonly KeystoreGet: KeystoreAPIKeystoreGet;
  static readonly KeystorePut: KeystoreAPIKeystorePut;
  static readonly KeystoreDelete: KeystoreAPIKeystoreDelete;
  static readonly KeystoreList: KeystoreAPIKeystoreList;
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

export class KeystoreAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  keystoreHas(
    requestMessage: keystore_pb.KeystoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: keystore_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
  keystoreHas(
    requestMessage: keystore_pb.KeystoreRequest,
    callback: (error: ServiceError|null, responseMessage: keystore_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
  keystoreGet(
    requestMessage: keystore_pb.KeystoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: keystore_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
  keystoreGet(
    requestMessage: keystore_pb.KeystoreRequest,
    callback: (error: ServiceError|null, responseMessage: keystore_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
  keystorePut(
    requestMessage: keystore_pb.KeystoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: keystore_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
  keystorePut(
    requestMessage: keystore_pb.KeystoreRequest,
    callback: (error: ServiceError|null, responseMessage: keystore_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
  keystoreDelete(
    requestMessage: keystore_pb.KeystoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: keystore_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
  keystoreDelete(
    requestMessage: keystore_pb.KeystoreRequest,
    callback: (error: ServiceError|null, responseMessage: keystore_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
  keystoreList(
    requestMessage: keystore_pb.KeystoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: keystore_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
  keystoreList(
    requestMessage: keystore_pb.KeystoreRequest,
    callback: (error: ServiceError|null, responseMessage: keystore_pb.KeystoreResponse|null) => void
  ): UnaryResponse;
}

