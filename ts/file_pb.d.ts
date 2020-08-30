// package: pb
// file: file.proto

import * as jspb from "google-protobuf";
import * as util_pb from "./util_pb";

export class UploadRequest extends jspb.Message {
  hasBlob(): boolean;
  clearBlob(): void;
  getBlob(): Blob | undefined;
  setBlob(value?: Blob): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): UploadOptions | undefined;
  setOptions(value?: UploadOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadRequest): UploadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadRequest;
  static deserializeBinaryFromReader(message: UploadRequest, reader: jspb.BinaryReader): UploadRequest;
}

export namespace UploadRequest {
  export type AsObject = {
    blob?: Blob.AsObject,
    options?: UploadOptions.AsObject,
  }
}

export class UploadOptions extends jspb.Message {
  getMultihash(): string;
  setMultihash(value: string): void;

  getLayout(): string;
  setLayout(value: string): void;

  getChunker(): string;
  setChunker(value: string): void;

  getRefid(): string;
  setRefid(value: string): void;

  getProgressive(): boolean;
  setProgressive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadOptions.AsObject;
  static toObject(includeInstance: boolean, msg: UploadOptions): UploadOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadOptions;
  static deserializeBinaryFromReader(message: UploadOptions, reader: jspb.BinaryReader): UploadOptions;
}

export namespace UploadOptions {
  export type AsObject = {
    multihash: string,
    layout: string,
    chunker: string,
    refid: string,
    progressive: boolean,
  }
}

export class DownloadRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getChunksize(): number;
  setChunksize(value: number): void;

  getRangestart(): number;
  setRangestart(value: number): void;

  getRangeend(): number;
  setRangeend(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadRequest): DownloadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadRequest;
  static deserializeBinaryFromReader(message: DownloadRequest, reader: jspb.BinaryReader): DownloadRequest;
}

export namespace DownloadRequest {
  export type AsObject = {
    hash: string,
    chunksize: number,
    rangestart: number,
    rangeend: number,
  }
}

export class DownloadResponse extends jspb.Message {
  hasBlob(): boolean;
  clearBlob(): void;
  getBlob(): Blob | undefined;
  setBlob(value?: Blob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadResponse): DownloadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadResponse;
  static deserializeBinaryFromReader(message: DownloadResponse, reader: jspb.BinaryReader): DownloadResponse;
}

export namespace DownloadResponse {
  export type AsObject = {
    blob?: Blob.AsObject,
  }
}

export class Blob extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getRangestart(): number;
  setRangestart(value: number): void;

  getRangeend(): number;
  setRangeend(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blob.AsObject;
  static toObject(includeInstance: boolean, msg: Blob): Blob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Blob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blob;
  static deserializeBinaryFromReader(message: Blob, reader: jspb.BinaryReader): Blob;
}

export namespace Blob {
  export type AsObject = {
    content: Uint8Array | string,
    rangestart: number,
    rangeend: number,
  }
}

export class RemoveRequest extends jspb.Message {
  getRefidsMap(): jspb.Map<string, string>;
  clearRefidsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRequest;
  static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
  export type AsObject = {
    refidsMap: Array<[string, string]>,
  }
}

export class RemoveResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResponse;
  static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
  export type AsObject = {
    count: number,
  }
}

