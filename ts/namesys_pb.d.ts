// package: pb
// file: namesys.proto

import * as jspb from "google-protobuf";
import * as util_pb from "./util_pb";

export class NameSysResolveRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDepth(): number;
  setDepth(value: number): void;

  getDhtrecordcount(): number;
  setDhtrecordcount(value: number): void;

  getDhttimeout(): number;
  setDhttimeout(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameSysResolveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NameSysResolveRequest): NameSysResolveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameSysResolveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameSysResolveRequest;
  static deserializeBinaryFromReader(message: NameSysResolveRequest, reader: jspb.BinaryReader): NameSysResolveRequest;
}

export namespace NameSysResolveRequest {
  export type AsObject = {
    name: string,
    depth: number,
    dhtrecordcount: number,
    dhttimeout: number,
  }
}

export class NameSysResolveResult extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameSysResolveResult.AsObject;
  static toObject(includeInstance: boolean, msg: NameSysResolveResult): NameSysResolveResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameSysResolveResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameSysResolveResult;
  static deserializeBinaryFromReader(message: NameSysResolveResult, reader: jspb.BinaryReader): NameSysResolveResult;
}

export namespace NameSysResolveResult {
  export type AsObject = {
    path: string,
    error: string,
  }
}

export class NameSysPublishRequest extends jspb.Message {
  getPrivatekey(): Uint8Array | string;
  getPrivatekey_asU8(): Uint8Array;
  getPrivatekey_asB64(): string;
  setPrivatekey(value: Uint8Array | string): void;

  getValue(): string;
  setValue(value: string): void;

  getEol(): number;
  setEol(value: number): void;

  getTtl(): number;
  setTtl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameSysPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NameSysPublishRequest): NameSysPublishRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameSysPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameSysPublishRequest;
  static deserializeBinaryFromReader(message: NameSysPublishRequest, reader: jspb.BinaryReader): NameSysPublishRequest;
}

export namespace NameSysPublishRequest {
  export type AsObject = {
    privatekey: Uint8Array | string,
    value: string,
    eol: number,
    ttl: number,
  }
}

