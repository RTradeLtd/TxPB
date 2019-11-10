// package: pb
// file: admin.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";

export class BlockstoreRequest extends jspb.Message {
  clearCidsList(): void;
  getCidsList(): Array<string>;
  setCidsList(value: Array<string>): void;
  addCids(value: string, index?: number): string;

  getReqtype(): BSREQTYPEMap[keyof BSREQTYPEMap];
  setReqtype(value: BSREQTYPEMap[keyof BSREQTYPEMap]): void;

  getReqopts(): BSREQOPTSMap[keyof BSREQOPTSMap];
  setReqopts(value: BSREQOPTSMap[keyof BSREQOPTSMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockstoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockstoreRequest): BlockstoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockstoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockstoreRequest;
  static deserializeBinaryFromReader(message: BlockstoreRequest, reader: jspb.BinaryReader): BlockstoreRequest;
}

export namespace BlockstoreRequest {
  export type AsObject = {
    cidsList: Array<string>,
    reqtype: BSREQTYPEMap[keyof BSREQTYPEMap],
    reqopts: BSREQOPTSMap[keyof BSREQOPTSMap],
  }
}

export class BlockstoreResponse extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): void;
  addBlocks(value?: Block, index?: number): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockstoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockstoreResponse): BlockstoreResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockstoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockstoreResponse;
  static deserializeBinaryFromReader(message: BlockstoreResponse, reader: jspb.BinaryReader): BlockstoreResponse;
}

export namespace BlockstoreResponse {
  export type AsObject = {
    blocksList: Array<Block.AsObject>,
  }
}

export class Block extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    cid: string,
    data: Uint8Array | string,
  }
}

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

export interface BSREQTYPEMap {
  BS_DELETE: 0;
  BS_PUT: 1;
  BS_PUT_MANY: 2;
  BS_GET: 3;
  BS_GET_MANY: 4;
}

export const BSREQTYPE: BSREQTYPEMap;

export interface BSREQOPTSMap {
  DEFAULT: 0;
  BS_FORCE: 1;
}

export const BSREQOPTS: BSREQOPTSMap;

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

