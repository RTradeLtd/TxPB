// package: pb
// file: node.proto

import * as jspb from "google-protobuf";
import * as util_pb from "./util_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";

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

export class ConnectRequest extends jspb.Message {
  clearMultiaddrsList(): void;
  getMultiaddrsList(): Array<string>;
  setMultiaddrsList(value: Array<string>): void;
  addMultiaddrs(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectRequest): ConnectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectRequest;
  static deserializeBinaryFromReader(message: ConnectRequest, reader: jspb.BinaryReader): ConnectRequest;
}

export namespace ConnectRequest {
  export type AsObject = {
    multiaddrsList: Array<string>,
  }
}

export class IsConnectedRequest extends jspb.Message {
  clearPeeridsList(): void;
  getPeeridsList(): Array<string>;
  setPeeridsList(value: Array<string>): void;
  addPeerids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsConnectedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsConnectedRequest): IsConnectedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsConnectedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsConnectedRequest;
  static deserializeBinaryFromReader(message: IsConnectedRequest, reader: jspb.BinaryReader): IsConnectedRequest;
}

export namespace IsConnectedRequest {
  export type AsObject = {
    peeridsList: Array<string>,
  }
}

export class IsConnectedResponse extends jspb.Message {
  getConnectedMap(): jspb.Map<string, boolean>;
  clearConnectedMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsConnectedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsConnectedResponse): IsConnectedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsConnectedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsConnectedResponse;
  static deserializeBinaryFromReader(message: IsConnectedResponse, reader: jspb.BinaryReader): IsConnectedResponse;
}

export namespace IsConnectedResponse {
  export type AsObject = {
    connectedMap: Array<[string, boolean]>,
  }
}

export class DisconnectRequest extends jspb.Message {
  clearPeeridsList(): void;
  getPeeridsList(): Array<string>;
  setPeeridsList(value: Array<string>): void;
  addPeerids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectRequest): DisconnectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisconnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectRequest;
  static deserializeBinaryFromReader(message: DisconnectRequest, reader: jspb.BinaryReader): DisconnectRequest;
}

export namespace DisconnectRequest {
  export type AsObject = {
    peeridsList: Array<string>,
  }
}

export class DisconnectResponse extends jspb.Message {
  getStatusMap(): jspb.Map<string, DisconnectResponse.StatusMessage>;
  clearStatusMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectResponse): DisconnectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisconnectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectResponse;
  static deserializeBinaryFromReader(message: DisconnectResponse, reader: jspb.BinaryReader): DisconnectResponse;
}

export namespace DisconnectResponse {
  export type AsObject = {
    statusMap: Array<[string, DisconnectResponse.StatusMessage.AsObject]>,
  }

  export class StatusMessage extends jspb.Message {
    getDisconnected(): boolean;
    setDisconnected(value: boolean): void;

    getReason(): string;
    setReason(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusMessage.AsObject;
    static toObject(includeInstance: boolean, msg: StatusMessage): StatusMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusMessage;
    static deserializeBinaryFromReader(message: StatusMessage, reader: jspb.BinaryReader): StatusMessage;
  }

  export namespace StatusMessage {
    export type AsObject = {
      disconnected: boolean,
      reason: string,
    }
  }
}

export class EnableExtrasRequest extends jspb.Message {
  getExtrasfeature(): EXTRASTYPEMap[keyof EXTRASTYPEMap];
  setExtrasfeature(value: EXTRASTYPEMap[keyof EXTRASTYPEMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableExtrasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableExtrasRequest): EnableExtrasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableExtrasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableExtrasRequest;
  static deserializeBinaryFromReader(message: EnableExtrasRequest, reader: jspb.BinaryReader): EnableExtrasRequest;
}

export namespace EnableExtrasRequest {
  export type AsObject = {
    extrasfeature: EXTRASTYPEMap[keyof EXTRASTYPEMap],
  }
}

export class DisableExtrasRequest extends jspb.Message {
  getExtrasfeature(): EXTRASTYPEMap[keyof EXTRASTYPEMap];
  setExtrasfeature(value: EXTRASTYPEMap[keyof EXTRASTYPEMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableExtrasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisableExtrasRequest): DisableExtrasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableExtrasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableExtrasRequest;
  static deserializeBinaryFromReader(message: DisableExtrasRequest, reader: jspb.BinaryReader): DisableExtrasRequest;
}

export namespace DisableExtrasRequest {
  export type AsObject = {
    extrasfeature: EXTRASTYPEMap[keyof EXTRASTYPEMap],
  }
}

export interface EXTRASTYPEMap {
  IDENTIFY: 0;
  PUBSUB: 1;
  DISCOVERY: 2;
}

export const EXTRASTYPE: EXTRASTYPEMap;

