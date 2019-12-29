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

