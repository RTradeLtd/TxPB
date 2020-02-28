// package: pb
// file: replication.proto

import * as jspb from "google-protobuf";

export class Replication extends jspb.Message {
  getHeader(): string;
  setHeader(value: string): void;

  clearCidsBytesList(): void;
  getCidsBytesList(): Array<Uint8Array | string>;
  getCidsBytesList_asU8(): Array<Uint8Array>;
  getCidsBytesList_asB64(): Array<string>;
  setCidsBytesList(value: Array<Uint8Array | string>): void;
  addCidsBytes(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearServersList(): void;
  getServersList(): Array<ServerSource>;
  setServersList(value: Array<ServerSource>): void;
  addServers(value?: ServerSource, index?: number): ServerSource;

  getReplicationFactor(): number;
  setReplicationFactor(value: number): void;

  getRefreshIntervalSeconds(): number;
  setRefreshIntervalSeconds(value: number): void;

  getServerDownDelaySeconds(): number;
  setServerDownDelaySeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Replication.AsObject;
  static toObject(includeInstance: boolean, msg: Replication): Replication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Replication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Replication;
  static deserializeBinaryFromReader(message: Replication, reader: jspb.BinaryReader): Replication;
}

export namespace Replication {
  export type AsObject = {
    header: string,
    cidsBytesList: Array<Uint8Array | string>,
    serversList: Array<ServerSource.AsObject>,
    replicationFactor: number,
    refreshIntervalSeconds: number,
    serverDownDelaySeconds: number,
  }
}

export class ServerSource extends jspb.Message {
  hasAddrInfo(): boolean;
  clearAddrInfo(): void;
  getAddrInfo(): AddrInfo | undefined;
  setAddrInfo(value?: AddrInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerSource.AsObject;
  static toObject(includeInstance: boolean, msg: ServerSource): ServerSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerSource;
  static deserializeBinaryFromReader(message: ServerSource, reader: jspb.BinaryReader): ServerSource;
}

export namespace ServerSource {
  export type AsObject = {
    addrInfo?: AddrInfo.AsObject,
  }
}

export class AddrInfo extends jspb.Message {
  getIdBytes(): Uint8Array | string;
  getIdBytes_asU8(): Uint8Array;
  getIdBytes_asB64(): string;
  setIdBytes(value: Uint8Array | string): void;

  clearAddrsBytesList(): void;
  getAddrsBytesList(): Array<Uint8Array | string>;
  getAddrsBytesList_asU8(): Array<Uint8Array>;
  getAddrsBytesList_asB64(): Array<string>;
  setAddrsBytesList(value: Array<Uint8Array | string>): void;
  addAddrsBytes(value: Uint8Array | string, index?: number): Uint8Array | string;

  getGrpcPort(): number;
  setGrpcPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddrInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AddrInfo): AddrInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddrInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddrInfo;
  static deserializeBinaryFromReader(message: AddrInfo, reader: jspb.BinaryReader): AddrInfo;
}

export namespace AddrInfo {
  export type AsObject = {
    idBytes: Uint8Array | string,
    addrsBytesList: Array<Uint8Array | string>,
    grpcPort: number,
  }
}

export class Subscription extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getAuthorIdBytes(): Uint8Array | string;
  getAuthorIdBytes_asU8(): Uint8Array;
  getAuthorIdBytes_asB64(): string;
  setAuthorIdBytes(value: Uint8Array | string): void;

  getRemove(): boolean;
  setRemove(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscription.AsObject;
  static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscription;
  static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
  export type AsObject = {
    topic: string,
    authorIdBytes: Uint8Array | string,
    remove: boolean,
  }
}

export class ReplicationStatus extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getCurrentVersion(): number;
  setCurrentVersion(value: number): void;

  getTargetVersion(): number;
  setTargetVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicationStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicationStatus): ReplicationStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplicationStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicationStatus;
  static deserializeBinaryFromReader(message: ReplicationStatus, reader: jspb.BinaryReader): ReplicationStatus;
}

export namespace ReplicationStatus {
  export type AsObject = {
    ok: boolean,
    isActive: boolean,
    currentVersion: number,
    targetVersion: number,
  }
}

export class SubscriptionUpdate extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getReplicationBytes(): Uint8Array | string;
  getReplicationBytes_asU8(): Uint8Array;
  getReplicationBytes_asB64(): string;
  setReplicationBytes(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionUpdate): SubscriptionUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionUpdate;
  static deserializeBinaryFromReader(message: SubscriptionUpdate, reader: jspb.BinaryReader): SubscriptionUpdate;
}

export namespace SubscriptionUpdate {
  export type AsObject = {
    version: number,
    replicationBytes: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class SignedSubscription extends jspb.Message {
  hasSubPart(): boolean;
  clearSubPart(): void;
  getSubPart(): Subscription | undefined;
  setSubPart(value?: Subscription): void;

  hasUpdatePart(): boolean;
  clearUpdatePart(): void;
  getUpdatePart(): SubscriptionUpdate | undefined;
  setUpdatePart(value?: SubscriptionUpdate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: SignedSubscription): SignedSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignedSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedSubscription;
  static deserializeBinaryFromReader(message: SignedSubscription, reader: jspb.BinaryReader): SignedSubscription;
}

export namespace SignedSubscription {
  export type AsObject = {
    subPart?: Subscription.AsObject,
    updatePart?: SubscriptionUpdate.AsObject,
  }
}

