// package: pb
// file: pubsub.proto

import * as jspb from "google-protobuf";

export class PubSubRequest extends jspb.Message {
  getRequesttype(): PSREQTYPEMap[keyof PSREQTYPEMap];
  setRequesttype(value: PSREQTYPEMap[keyof PSREQTYPEMap]): void;

  clearPeersList(): void;
  getPeersList(): Array<PubSubPeer>;
  setPeersList(value: Array<PubSubPeer>): void;
  addPeers(value?: PubSubPeer, index?: number): PubSubPeer;

  clearTopicsList(): void;
  getTopicsList(): Array<string>;
  setTopicsList(value: Array<string>): void;
  addTopics(value: string, index?: number): string;

  getTopic(): string;
  setTopic(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getAdvertise(): boolean;
  setAdvertise(value: boolean): void;

  getDiscover(): boolean;
  setDiscover(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubSubRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubRequest): PubSubRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubSubRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubRequest;
  static deserializeBinaryFromReader(message: PubSubRequest, reader: jspb.BinaryReader): PubSubRequest;
}

export namespace PubSubRequest {
  export type AsObject = {
    requesttype: PSREQTYPEMap[keyof PSREQTYPEMap],
    peersList: Array<PubSubPeer.AsObject>,
    topicsList: Array<string>,
    topic: string,
    data: Uint8Array | string,
    advertise: boolean,
    discover: boolean,
  }
}

export class PubSubResponse extends jspb.Message {
  getRequesttype(): PSREQTYPEMap[keyof PSREQTYPEMap];
  setRequesttype(value: PSREQTYPEMap[keyof PSREQTYPEMap]): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): PubSubMessage | undefined;
  setMessage(value?: PubSubMessage): void;

  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubSubResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubResponse): PubSubResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubSubResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubResponse;
  static deserializeBinaryFromReader(message: PubSubResponse, reader: jspb.BinaryReader): PubSubResponse;
}

export namespace PubSubResponse {
  export type AsObject = {
    requesttype: PSREQTYPEMap[keyof PSREQTYPEMap],
    message?: PubSubMessage.AsObject,
    namesList: Array<string>,
  }
}

export class PubSubMessage extends jspb.Message {
  getFrom(): Uint8Array | string;
  getFrom_asU8(): Uint8Array;
  getFrom_asB64(): string;
  setFrom(value: Uint8Array | string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getSeqno(): Uint8Array | string;
  getSeqno_asU8(): Uint8Array;
  getSeqno_asB64(): string;
  setSeqno(value: Uint8Array | string): void;

  clearTopicidsList(): void;
  getTopicidsList(): Array<string>;
  setTopicidsList(value: Array<string>): void;
  addTopicids(value: string, index?: number): string;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubSubMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubMessage): PubSubMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubSubMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubMessage;
  static deserializeBinaryFromReader(message: PubSubMessage, reader: jspb.BinaryReader): PubSubMessage;
}

export namespace PubSubMessage {
  export type AsObject = {
    from: Uint8Array | string,
    data: Uint8Array | string,
    seqno: Uint8Array | string,
    topicidsList: Array<string>,
    signature: Uint8Array | string,
    key: Uint8Array | string,
  }
}

export class PubSubPeer extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getPeerid(): string;
  setPeerid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubSubPeer.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubPeer): PubSubPeer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubSubPeer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubPeer;
  static deserializeBinaryFromReader(message: PubSubPeer, reader: jspb.BinaryReader): PubSubPeer;
}

export namespace PubSubPeer {
  export type AsObject = {
    topic: string,
    peerid: string,
  }
}

export interface PSREQTYPEMap {
  GET_TOPICS: 0;
  LIST_PEERS: 1;
  SUBSCRIBE: 2;
  PUBLISH: 3;
}

export const PSREQTYPE: PSREQTYPEMap;

