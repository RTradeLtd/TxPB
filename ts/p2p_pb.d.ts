// package: pb
// file: p2p.proto

import * as jspb from "google-protobuf";
import * as util_pb from "./util_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";

export class CloseRequest extends jspb.Message {
  getAll(): boolean;
  setAll(value: boolean): void;

  getProtocolname(): string;
  setProtocolname(value: string): void;

  getListenaddress(): string;
  setListenaddress(value: string): void;

  getTargetaddress(): string;
  setTargetaddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseRequest): CloseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseRequest;
  static deserializeBinaryFromReader(message: CloseRequest, reader: jspb.BinaryReader): CloseRequest;
}

export namespace CloseRequest {
  export type AsObject = {
    all: boolean,
    protocolname: string,
    listenaddress: string,
    targetaddress: string,
  }
}

export class ForwardRequest extends jspb.Message {
  getProtocolname(): string;
  setProtocolname(value: string): void;

  getListenaddress(): string;
  setListenaddress(value: string): void;

  getTargetaddress(): string;
  setTargetaddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForwardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForwardRequest): ForwardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForwardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForwardRequest;
  static deserializeBinaryFromReader(message: ForwardRequest, reader: jspb.BinaryReader): ForwardRequest;
}

export namespace ForwardRequest {
  export type AsObject = {
    protocolname: string,
    listenaddress: string,
    targetaddress: string,
  }
}

export class ListenRequest extends jspb.Message {
  getProtocolname(): string;
  setProtocolname(value: string): void;

  getRemoteaddress(): string;
  setRemoteaddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenRequest): ListenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenRequest;
  static deserializeBinaryFromReader(message: ListenRequest, reader: jspb.BinaryReader): ListenRequest;
}

export namespace ListenRequest {
  export type AsObject = {
    protocolname: string,
    remoteaddress: string,
  }
}

export class LsRequest extends jspb.Message {
  getVerbose(): boolean;
  setVerbose(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LsRequest): LsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsRequest;
  static deserializeBinaryFromReader(message: LsRequest, reader: jspb.BinaryReader): LsRequest;
}

export namespace LsRequest {
  export type AsObject = {
    verbose: boolean,
  }
}

export class LsResponse extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LsResponse): LsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsResponse;
  static deserializeBinaryFromReader(message: LsResponse, reader: jspb.BinaryReader): LsResponse;
}

export namespace LsResponse {
  export type AsObject = {
    namesList: Array<string>,
  }
}

