// package: pb
// file: keystore.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";

export class KeystoreRequest extends jspb.Message {
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
    name: string,
    privatekey: Uint8Array | string,
  }
}

export class KeystoreResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getPrivatekey(): Uint8Array | string;
  getPrivatekey_asU8(): Uint8Array;
  getPrivatekey_asB64(): string;
  setPrivatekey(value: Uint8Array | string): void;

  clearKeynamesList(): void;
  getKeynamesList(): Array<string>;
  setKeynamesList(value: Array<string>): void;
  addKeynames(value: string, index?: number): string;

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
    status: string,
    privatekey: Uint8Array | string,
    keynamesList: Array<string>,
  }
}

