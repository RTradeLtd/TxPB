// package: pb
// file: dag.proto

import * as jspb from "google-protobuf";

export class DagRequest extends jspb.Message {
  getRequesttype(): DAGREQTYPEMap[keyof DAGREQTYPEMap];
  setRequesttype(value: DAGREQTYPEMap[keyof DAGREQTYPEMap]): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getObjectencoding(): string;
  setObjectencoding(value: string): void;

  getSerializationformat(): string;
  setSerializationformat(value: string): void;

  getHashfunc(): string;
  setHashfunc(value: string): void;

  getCidversion(): number;
  setCidversion(value: number): void;

  getHash(): string;
  setHash(value: string): void;

  getLinksMap(): jspb.Map<string, string>;
  clearLinksMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DagRequest): DagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DagRequest;
  static deserializeBinaryFromReader(message: DagRequest, reader: jspb.BinaryReader): DagRequest;
}

export namespace DagRequest {
  export type AsObject = {
    requesttype: DAGREQTYPEMap[keyof DAGREQTYPEMap],
    data: Uint8Array | string,
    objectencoding: string,
    serializationformat: string,
    hashfunc: string,
    cidversion: number,
    hash: string,
    linksMap: Array<[string, string]>,
  }
}

export class DagResponse extends jspb.Message {
  getRequesttype(): DAGREQTYPEMap[keyof DAGREQTYPEMap];
  setRequesttype(value: DAGREQTYPEMap[keyof DAGREQTYPEMap]): void;

  clearHashesList(): void;
  getHashesList(): Array<string>;
  setHashesList(value: Array<string>): void;
  addHashes(value: string, index?: number): string;

  getRawdata(): Uint8Array | string;
  getRawdata_asU8(): Uint8Array;
  getRawdata_asB64(): string;
  setRawdata(value: Uint8Array | string): void;

  clearLinksList(): void;
  getLinksList(): Array<IPLDLink>;
  setLinksList(value: Array<IPLDLink>): void;
  addLinks(value?: IPLDLink, index?: number): IPLDLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DagResponse): DagResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DagResponse;
  static deserializeBinaryFromReader(message: DagResponse, reader: jspb.BinaryReader): DagResponse;
}

export namespace DagResponse {
  export type AsObject = {
    requesttype: DAGREQTYPEMap[keyof DAGREQTYPEMap],
    hashesList: Array<string>,
    rawdata: Uint8Array | string,
    linksList: Array<IPLDLink.AsObject>,
  }
}

export class IPLDLink extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPLDLink.AsObject;
  static toObject(includeInstance: boolean, msg: IPLDLink): IPLDLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IPLDLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPLDLink;
  static deserializeBinaryFromReader(message: IPLDLink, reader: jspb.BinaryReader): IPLDLink;
}

export namespace IPLDLink {
  export type AsObject = {
    hash: Uint8Array | string,
    name: string,
    size: number,
  }
}

export class IPLDNode extends jspb.Message {
  clearLinksList(): void;
  getLinksList(): Array<IPLDLink>;
  setLinksList(value: Array<IPLDLink>): void;
  addLinks(value?: IPLDLink, index?: number): IPLDLink;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPLDNode.AsObject;
  static toObject(includeInstance: boolean, msg: IPLDNode): IPLDNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IPLDNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPLDNode;
  static deserializeBinaryFromReader(message: IPLDNode, reader: jspb.BinaryReader): IPLDNode;
}

export namespace IPLDNode {
  export type AsObject = {
    linksList: Array<IPLDLink.AsObject>,
    data: Uint8Array | string,
  }
}

export interface DAGREQTYPEMap {
  DAG_PUT: 0;
  DAG_GET: 1;
  DAG_NEW_LINK: 2;
  DAG_ADD_LINKS: 3;
  DAG_GET_LINKS: 4;
}

export const DAGREQTYPE: DAGREQTYPEMap;

