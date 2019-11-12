// package: pb
// file: file.proto

import * as file_pb from "./file_pb";
import * as util_pb from "./util_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FileAPIUploadFile = {
  readonly methodName: string;
  readonly service: typeof FileAPI;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof file_pb.UploadRequest;
  readonly responseType: typeof util_pb.PutResponse;
};

type FileAPIDownloadFile = {
  readonly methodName: string;
  readonly service: typeof FileAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof file_pb.DownloadRequest;
  readonly responseType: typeof file_pb.DownloadResponse;
};

export class FileAPI {
  static readonly serviceName: string;
  static readonly UploadFile: FileAPIUploadFile;
  static readonly DownloadFile: FileAPIDownloadFile;
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

export class FileAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  uploadFile(metadata?: grpc.Metadata): RequestStream<file_pb.UploadRequest>;
  downloadFile(requestMessage: file_pb.DownloadRequest, metadata?: grpc.Metadata): ResponseStream<file_pb.DownloadResponse>;
}

