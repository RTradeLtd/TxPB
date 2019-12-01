// package: pb
// file: pubsub.proto

import * as jspb from "google-protobuf";
import * as util_pb from "./util_pb";

export class PubSubListPeersRequest extends jspb.Message {
  clearTopicsList(): void;
  getTopicsList(): Array<string>;
  setTopicsList(value: Array<string>): void;
  addTopics(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubSubListPeersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubListPeersRequest): PubSubListPeersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubSubListPeersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubListPeersRequest;
  static deserializeBinaryFromReader(message: PubSubListPeersRequest, reader: jspb.BinaryReader): PubSubListPeersRequest;
}

export namespace PubSubListPeersRequest {
  export type AsObject = {
    topicsList: Array<string>,
  }
}

export class PubSubListPeersResponse extends jspb.Message {
  clearPeersList(): void;
  getPeersList(): Array<PubSubListPeersResponse.Peer>;
  setPeersList(value: Array<PubSubListPeersResponse.Peer>): void;
  addPeers(value?: PubSubListPeersResponse.Peer, index?: number): PubSubListPeersResponse.Peer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubSubListPeersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubListPeersResponse): PubSubListPeersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubSubListPeersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubListPeersResponse;
  static deserializeBinaryFromReader(message: PubSubListPeersResponse, reader: jspb.BinaryReader): PubSubListPeersResponse;
}

export namespace PubSubListPeersResponse {
  export type AsObject = {
    peersList: Array<PubSubListPeersResponse.Peer.AsObject>,
  }

  export class Peer extends jspb.Message {
    getTopic(): string;
    setTopic(value: string): void;

    getPeerid(): string;
    setPeerid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Peer.AsObject;
    static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Peer;
    static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
  }

  export namespace Peer {
    export type AsObject = {
      topic: string,
      peerid: string,
    }
  }
}

export class PubSubPublishRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getAdvertise(): boolean;
  setAdvertise(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubSubPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubPublishRequest): PubSubPublishRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubSubPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubPublishRequest;
  static deserializeBinaryFromReader(message: PubSubPublishRequest, reader: jspb.BinaryReader): PubSubPublishRequest;
}

export namespace PubSubPublishRequest {
  export type AsObject = {
    topic: string,
    data: Uint8Array | string,
    advertise: boolean,
  }
}

export class PubSubSubscribeRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getDiscover(): boolean;
  setDiscover(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubSubSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubSubscribeRequest): PubSubSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubSubSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubSubscribeRequest;
  static deserializeBinaryFromReader(message: PubSubSubscribeRequest, reader: jspb.BinaryReader): PubSubSubscribeRequest;
}

export namespace PubSubSubscribeRequest {
  export type AsObject = {
    topic: string,
    discover: boolean,
  }
}

export class PubSubTopicsResponse extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubSubTopicsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubTopicsResponse): PubSubTopicsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubSubTopicsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubTopicsResponse;
  static deserializeBinaryFromReader(message: PubSubTopicsResponse, reader: jspb.BinaryReader): PubSubTopicsResponse;
}

export namespace PubSubTopicsResponse {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class PubSubMessageResponse extends jspb.Message {
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
  toObject(includeInstance?: boolean): PubSubMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubMessageResponse): PubSubMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubSubMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubMessageResponse;
  static deserializeBinaryFromReader(message: PubSubMessageResponse, reader: jspb.BinaryReader): PubSubMessageResponse;
}

export namespace PubSubMessageResponse {
  export type AsObject = {
    from: Uint8Array | string,
    data: Uint8Array | string,
    seqno: Uint8Array | string,
    topicidsList: Array<string>,
    signature: Uint8Array | string,
    key: Uint8Array | string,
  }
}

