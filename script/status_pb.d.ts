// package: pb
// file: status.proto

import * as jspb from "google-protobuf";
import * as util_pb from "./util_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";

export class VersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VersionResponse): VersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionResponse;
  static deserializeBinaryFromReader(message: VersionResponse, reader: jspb.BinaryReader): VersionResponse;
}

export namespace VersionResponse {
  export type AsObject = {
    version: string,
  }
}

export class StatusResponse extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getStatus(): APISTATUSMap[keyof APISTATUSMap];
  setStatus(value: APISTATUSMap[keyof APISTATUSMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusResponse;
  static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
  export type AsObject = {
    host: string,
    status: APISTATUSMap[keyof APISTATUSMap],
  }
}

export interface APISTATUSMap {
  ONLINE: 0;
  PURGING: 1;
  DEGRADED_PERFORMANCE: 2;
  ERROR: 3;
}

export const APISTATUS: APISTATUSMap;

