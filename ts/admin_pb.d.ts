// package: pb
// file: admin.proto

import * as jspb from "google-protobuf";

export class ManageGCRequest extends jspb.Message {
  getType(): GCREQTYPEMap[keyof GCREQTYPEMap];
  setType(value: GCREQTYPEMap[keyof GCREQTYPEMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManageGCRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManageGCRequest): ManageGCRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManageGCRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManageGCRequest;
  static deserializeBinaryFromReader(message: ManageGCRequest, reader: jspb.BinaryReader): ManageGCRequest;
}

export namespace ManageGCRequest {
  export type AsObject = {
    type: GCREQTYPEMap[keyof GCREQTYPEMap],
  }
}

export class ManageGCResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManageGCResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ManageGCResponse): ManageGCResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManageGCResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManageGCResponse;
  static deserializeBinaryFromReader(message: ManageGCResponse, reader: jspb.BinaryReader): ManageGCResponse;
}

export namespace ManageGCResponse {
  export type AsObject = {
    status: string,
  }
}

export class RefCountRequest extends jspb.Message {
  clearCidsList(): void;
  getCidsList(): Array<string>;
  setCidsList(value: Array<string>): void;
  addCids(value: string, index?: number): string;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefCountRequest): RefCountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefCountRequest;
  static deserializeBinaryFromReader(message: RefCountRequest, reader: jspb.BinaryReader): RefCountRequest;
}

export namespace RefCountRequest {
  export type AsObject = {
    cidsList: Array<string>,
    limit: number,
  }
}

export class RefCountResponse extends jspb.Message {
  getCidsMap(): jspb.Map<string, number>;
  clearCidsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefCountResponse): RefCountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefCountResponse;
  static deserializeBinaryFromReader(message: RefCountResponse, reader: jspb.BinaryReader): RefCountResponse;
}

export namespace RefCountResponse {
  export type AsObject = {
    cidsMap: Array<[string, number]>,
  }
}

export interface GCREQTYPEMap {
  GC_START: 0;
  GC_STOP: 1;
  GC_STATUS: 2;
}

export const GCREQTYPE: GCREQTYPEMap;

export interface REFREQTYPEMap {
  REF_GET_COUNT: 0;
  REF_DELETE: 1;
}

export const REFREQTYPE: REFREQTYPEMap;

export interface REFREQOPTSMap {
  REF_FORCE: 0;
}

export const REFREQOPTS: REFREQOPTSMap;

