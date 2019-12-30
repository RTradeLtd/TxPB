// package: pb
// file: node.proto

import * as jspb from "google-protobuf";
import * as util_pb from "./util_pb";

export class P2PRequest extends jspb.Message {
  getRequesttype(): P2PREQTYPEMap[keyof P2PREQTYPEMap];
  setRequesttype(value: P2PREQTYPEMap[keyof P2PREQTYPEMap]): void;

  getAll(): boolean;
  setAll(value: boolean): void;

  getVerbose(): boolean;
  setVerbose(value: boolean): void;

  getProtocolname(): string;
  setProtocolname(value: string): void;

  getListenaddress(): string;
  setListenaddress(value: string): void;

  getTargetaddress(): string;
  setTargetaddress(value: string): void;

  getRemoteaddress(): string;
  setRemoteaddress(value: string): void;

  getAllowcustomprotocols(): boolean;
  setAllowcustomprotocols(value: boolean): void;

  getReportpeerid(): boolean;
  setReportpeerid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P2PRequest.AsObject;
  static toObject(includeInstance: boolean, msg: P2PRequest): P2PRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: P2PRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P2PRequest;
  static deserializeBinaryFromReader(message: P2PRequest, reader: jspb.BinaryReader): P2PRequest;
}

export namespace P2PRequest {
  export type AsObject = {
    requesttype: P2PREQTYPEMap[keyof P2PREQTYPEMap],
    all: boolean,
    verbose: boolean,
    protocolname: string,
    listenaddress: string,
    targetaddress: string,
    remoteaddress: string,
    allowcustomprotocols: boolean,
    reportpeerid: boolean,
  }
}

export class P2PResponse extends jspb.Message {
  getRequesttype(): P2PREQTYPEMap[keyof P2PREQTYPEMap];
  setRequesttype(value: P2PREQTYPEMap[keyof P2PREQTYPEMap]): void;

  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  getConnsclosed(): number;
  setConnsclosed(value: number): void;

  clearStreaminfosList(): void;
  getStreaminfosList(): Array<P2PLsInfo>;
  setStreaminfosList(value: Array<P2PLsInfo>): void;
  addStreaminfos(value?: P2PLsInfo, index?: number): P2PLsInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P2PResponse.AsObject;
  static toObject(includeInstance: boolean, msg: P2PResponse): P2PResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: P2PResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P2PResponse;
  static deserializeBinaryFromReader(message: P2PResponse, reader: jspb.BinaryReader): P2PResponse;
}

export namespace P2PResponse {
  export type AsObject = {
    requesttype: P2PREQTYPEMap[keyof P2PREQTYPEMap],
    namesList: Array<string>,
    connsclosed: number,
    streaminfosList: Array<P2PLsInfo.AsObject>,
  }
}

export class P2PLsInfo extends jspb.Message {
  getProtocolname(): string;
  setProtocolname(value: string): void;

  getListenaddress(): string;
  setListenaddress(value: string): void;

  getTargetaddress(): string;
  setTargetaddress(value: string): void;

  getLocal(): boolean;
  setLocal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P2PLsInfo.AsObject;
  static toObject(includeInstance: boolean, msg: P2PLsInfo): P2PLsInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: P2PLsInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P2PLsInfo;
  static deserializeBinaryFromReader(message: P2PLsInfo, reader: jspb.BinaryReader): P2PLsInfo;
}

export namespace P2PLsInfo {
  export type AsObject = {
    protocolname: string,
    listenaddress: string,
    targetaddress: string,
    local: boolean,
  }
}

export class GetPeersResponse extends jspb.Message {
  clearPeeridsList(): void;
  getPeeridsList(): Array<string>;
  setPeeridsList(value: Array<string>): void;
  addPeerids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeersResponse): GetPeersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeersResponse;
  static deserializeBinaryFromReader(message: GetPeersResponse, reader: jspb.BinaryReader): GetPeersResponse;
}

export namespace GetPeersResponse {
  export type AsObject = {
    peeridsList: Array<string>,
  }
}

export class ConnMgmtRequest extends jspb.Message {
  getRequesttype(): CONNMGMTREQTYPEMap[keyof CONNMGMTREQTYPEMap];
  setRequesttype(value: CONNMGMTREQTYPEMap[keyof CONNMGMTREQTYPEMap]): void;

  clearMultiaddrsList(): void;
  getMultiaddrsList(): Array<string>;
  setMultiaddrsList(value: Array<string>): void;
  addMultiaddrs(value: string, index?: number): string;

  clearPeeridsList(): void;
  getPeeridsList(): Array<string>;
  setPeeridsList(value: Array<string>): void;
  addPeerids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnMgmtRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnMgmtRequest): ConnMgmtRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnMgmtRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnMgmtRequest;
  static deserializeBinaryFromReader(message: ConnMgmtRequest, reader: jspb.BinaryReader): ConnMgmtRequest;
}

export namespace ConnMgmtRequest {
  export type AsObject = {
    requesttype: CONNMGMTREQTYPEMap[keyof CONNMGMTREQTYPEMap],
    multiaddrsList: Array<string>,
    peeridsList: Array<string>,
  }
}

export class ConnMgmtResponse extends jspb.Message {
  getRequesttype(): CONNMGMTREQTYPEMap[keyof CONNMGMTREQTYPEMap];
  setRequesttype(value: CONNMGMTREQTYPEMap[keyof CONNMGMTREQTYPEMap]): void;

  getConnectedMap(): jspb.Map<string, boolean>;
  clearConnectedMap(): void;
  getStatusMap(): jspb.Map<string, ConnMgmtStatus>;
  clearStatusMap(): void;
  clearPeeridsList(): void;
  getPeeridsList(): Array<string>;
  setPeeridsList(value: Array<string>): void;
  addPeerids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnMgmtResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnMgmtResponse): ConnMgmtResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnMgmtResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnMgmtResponse;
  static deserializeBinaryFromReader(message: ConnMgmtResponse, reader: jspb.BinaryReader): ConnMgmtResponse;
}

export namespace ConnMgmtResponse {
  export type AsObject = {
    requesttype: CONNMGMTREQTYPEMap[keyof CONNMGMTREQTYPEMap],
    connectedMap: Array<[string, boolean]>,
    statusMap: Array<[string, ConnMgmtStatus.AsObject]>,
    peeridsList: Array<string>,
  }
}

export class ConnMgmtStatus extends jspb.Message {
  getDisconnected(): boolean;
  setDisconnected(value: boolean): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnMgmtStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ConnMgmtStatus): ConnMgmtStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnMgmtStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnMgmtStatus;
  static deserializeBinaryFromReader(message: ConnMgmtStatus, reader: jspb.BinaryReader): ConnMgmtStatus;
}

export namespace ConnMgmtStatus {
  export type AsObject = {
    disconnected: boolean,
    reason: string,
  }
}

export class ExtrasRequest extends jspb.Message {
  getRequesttype(): EXTRASREQTYPEMap[keyof EXTRASREQTYPEMap];
  setRequesttype(value: EXTRASREQTYPEMap[keyof EXTRASREQTYPEMap]): void;

  getExtrasfeature(): EXTRASTYPEMap[keyof EXTRASTYPEMap];
  setExtrasfeature(value: EXTRASTYPEMap[keyof EXTRASTYPEMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtrasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExtrasRequest): ExtrasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtrasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtrasRequest;
  static deserializeBinaryFromReader(message: ExtrasRequest, reader: jspb.BinaryReader): ExtrasRequest;
}

export namespace ExtrasRequest {
  export type AsObject = {
    requesttype: EXTRASREQTYPEMap[keyof EXTRASREQTYPEMap],
    extrasfeature: EXTRASTYPEMap[keyof EXTRASTYPEMap],
  }
}

export class BlockstoreRequest extends jspb.Message {
  getRequesttype(): BSREQTYPEMap[keyof BSREQTYPEMap];
  setRequesttype(value: BSREQTYPEMap[keyof BSREQTYPEMap]): void;

  clearReqoptsList(): void;
  getReqoptsList(): Array<BSREQOPTSMap[keyof BSREQOPTSMap]>;
  setReqoptsList(value: Array<BSREQOPTSMap[keyof BSREQOPTSMap]>): void;
  addReqopts(value: BSREQOPTSMap[keyof BSREQOPTSMap], index?: number): BSREQOPTSMap[keyof BSREQOPTSMap];

  clearCidsList(): void;
  getCidsList(): Array<string>;
  setCidsList(value: Array<string>): void;
  addCids(value: string, index?: number): string;

  clearDataList(): void;
  getDataList(): Array<Uint8Array | string>;
  getDataList_asU8(): Array<Uint8Array>;
  getDataList_asB64(): Array<string>;
  setDataList(value: Array<Uint8Array | string>): void;
  addData(value: Uint8Array | string, index?: number): Uint8Array | string;

  getCidversion(): string;
  setCidversion(value: string): void;

  getHashfunc(): string;
  setHashfunc(value: string): void;

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
    requesttype: BSREQTYPEMap[keyof BSREQTYPEMap],
    reqoptsList: Array<BSREQOPTSMap[keyof BSREQOPTSMap]>,
    cidsList: Array<string>,
    dataList: Array<Uint8Array | string>,
    cidversion: string,
    hashfunc: string,
  }
}

export class BlockstoreResponse extends jspb.Message {
  getRequesttype(): BSREQTYPEMap[keyof BSREQTYPEMap];
  setRequesttype(value: BSREQTYPEMap[keyof BSREQTYPEMap]): void;

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
    requesttype: BSREQTYPEMap[keyof BSREQTYPEMap],
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

export class KeystoreRequest extends jspb.Message {
  getRequesttype(): KSREQTYPEMap[keyof KSREQTYPEMap];
  setRequesttype(value: KSREQTYPEMap[keyof KSREQTYPEMap]): void;

  getName(): string;
  setName(value: string): void;

  getPrivatekey(): Uint8Array | string;
  getPrivatekey_asU8(): Uint8Array;
  getPrivatekey_asB64(): string;
  setPrivatekey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeystoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeystoreRequest): KeystoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeystoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeystoreRequest;
  static deserializeBinaryFromReader(message: KeystoreRequest, reader: jspb.BinaryReader): KeystoreRequest;
}

export namespace KeystoreRequest {
  export type AsObject = {
    requesttype: KSREQTYPEMap[keyof KSREQTYPEMap],
    name: string,
    privatekey: Uint8Array | string,
  }
}

export class KeystoreResponse extends jspb.Message {
  getRequesttype(): KSREQTYPEMap[keyof KSREQTYPEMap];
  setRequesttype(value: KSREQTYPEMap[keyof KSREQTYPEMap]): void;

  getPrivatekey(): Uint8Array | string;
  getPrivatekey_asU8(): Uint8Array;
  getPrivatekey_asB64(): string;
  setPrivatekey(value: Uint8Array | string): void;

  clearKeynamesList(): void;
  getKeynamesList(): Array<string>;
  setKeynamesList(value: Array<string>): void;
  addKeynames(value: string, index?: number): string;

  getHas(): boolean;
  setHas(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeystoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeystoreResponse): KeystoreResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeystoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeystoreResponse;
  static deserializeBinaryFromReader(message: KeystoreResponse, reader: jspb.BinaryReader): KeystoreResponse;
}

export namespace KeystoreResponse {
  export type AsObject = {
    requesttype: KSREQTYPEMap[keyof KSREQTYPEMap],
    privatekey: Uint8Array | string,
    keynamesList: Array<string>,
    has: boolean,
  }
}

export interface P2PREQTYPEMap {
  CLOSE: 0;
  FORWARD: 1;
  LISTEN: 2;
  LS: 3;
}

export const P2PREQTYPE: P2PREQTYPEMap;

export interface CONNMGMTREQTYPEMap {
  CM_CONNECT: 0;
  CM_DISCONNECT: 1;
  CM_STATUS: 2;
  CM_GET_PEERS: 3;
}

export const CONNMGMTREQTYPE: CONNMGMTREQTYPEMap;

export interface EXTRASREQTYPEMap {
  EX_ENABLE: 0;
  EX_DISABLE: 1;
}

export const EXTRASREQTYPE: EXTRASREQTYPEMap;

export interface EXTRASTYPEMap {
  IDENTIFY: 0;
  PUBSUB: 1;
  DISCOVERY: 2;
  MDNS: 3;
}

export const EXTRASTYPE: EXTRASTYPEMap;

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

export interface DAGREQTYPEMap {
  DAG_PUT: 0;
  DAG_GET: 1;
  DAG_NEW_NODE: 2;
  DAG_ADD_LINKS: 3;
  DAG_GET_LINKS: 4;
}

export const DAGREQTYPE: DAGREQTYPEMap;

export interface KSREQTYPEMap {
  KS_HAS: 0;
  KS_GET: 1;
  KS_PUT: 2;
  KS_DELETE: 3;
  KS_LIST: 4;
}

export const KSREQTYPE: KSREQTYPEMap;

