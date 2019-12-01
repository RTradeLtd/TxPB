// package: pb
// file: dag.proto

import * as jspb from "google-protobuf";

export class DagPutResponse extends jspb.Message {
  clearHashesList(): void;
  getHashesList(): Array<string>;
  setHashesList(value: Array<string>): void;
  addHashes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DagPutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DagPutResponse): DagPutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DagPutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DagPutResponse;
  static deserializeBinaryFromReader(message: DagPutResponse, reader: jspb.BinaryReader): DagPutResponse;
}

export namespace DagPutResponse {
  export type AsObject = {
    hashesList: Array<string>,
  }
}

export class DagPutRequest extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DagPutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DagPutRequest): DagPutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DagPutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DagPutRequest;
  static deserializeBinaryFromReader(message: DagPutRequest, reader: jspb.BinaryReader): DagPutRequest;
}

export namespace DagPutRequest {
  export type AsObject = {
    data: Uint8Array | string,
    objectencoding: string,
    serializationformat: string,
    hashfunc: string,
    cidversion: number,
  }
}

export class DagGetRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DagGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DagGetRequest): DagGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DagGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DagGetRequest;
  static deserializeBinaryFromReader(message: DagGetRequest, reader: jspb.BinaryReader): DagGetRequest;
}

export namespace DagGetRequest {
  export type AsObject = {
    hash: string,
  }
}

export class DagGetResponse extends jspb.Message {
  getRawdata(): Uint8Array | string;
  getRawdata_asU8(): Uint8Array;
  getRawdata_asB64(): string;
  setRawdata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DagGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DagGetResponse): DagGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DagGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DagGetResponse;
  static deserializeBinaryFromReader(message: DagGetResponse, reader: jspb.BinaryReader): DagGetResponse;
}

export namespace DagGetResponse {
  export type AsObject = {
    rawdata: Uint8Array | string,
  }
}

export class NewIPLDNodeRequest extends jspb.Message {
  getLinksMap(): jspb.Map<string, string>;
  clearLinksMap(): void;
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getHashfunc(): string;
  setHashfunc(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewIPLDNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewIPLDNodeRequest): NewIPLDNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewIPLDNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewIPLDNodeRequest;
  static deserializeBinaryFromReader(message: NewIPLDNodeRequest, reader: jspb.BinaryReader): NewIPLDNodeRequest;
}

export namespace NewIPLDNodeRequest {
  export type AsObject = {
    linksMap: Array<[string, string]>,
    data: Uint8Array | string,
    hashfunc: string,
  }
}

export class AddLinksRequest extends jspb.Message {
  getLinksMap(): jspb.Map<string, string>;
  clearLinksMap(): void;
  getHash(): string;
  setHash(value: string): void;

  getHashfunc(): string;
  setHashfunc(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddLinksRequest): AddLinksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddLinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLinksRequest;
  static deserializeBinaryFromReader(message: AddLinksRequest, reader: jspb.BinaryReader): AddLinksRequest;
}

export namespace AddLinksRequest {
  export type AsObject = {
    linksMap: Array<[string, string]>,
    hash: string,
    hashfunc: string,
  }
}

export class GetLinksRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLinksRequest): GetLinksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLinksRequest;
  static deserializeBinaryFromReader(message: GetLinksRequest, reader: jspb.BinaryReader): GetLinksRequest;
}

export namespace GetLinksRequest {
  export type AsObject = {
    hash: string,
  }
}

export class GetLinksResponse extends jspb.Message {
  clearLinksList(): void;
  getLinksList(): Array<IPLDLink>;
  setLinksList(value: Array<IPLDLink>): void;
  addLinks(value?: IPLDLink, index?: number): IPLDLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLinksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLinksResponse): GetLinksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLinksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLinksResponse;
  static deserializeBinaryFromReader(message: GetLinksResponse, reader: jspb.BinaryReader): GetLinksResponse;
}

export namespace GetLinksResponse {
  export type AsObject = {
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

