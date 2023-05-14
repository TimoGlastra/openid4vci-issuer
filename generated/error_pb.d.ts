// package: openid4vci
// file: error.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Error extends jspb.Message { 
    getCode(): number;
    setCode(value: number): Error;
    getName(): string;
    setName(value: string): Error;
    getDescription(): string;
    setDescription(value: string): Error;

    hasAdditionalInformation(): boolean;
    clearAdditionalInformation(): void;
    getAdditionalInformation(): Uint8Array | string;
    getAdditionalInformation_asU8(): Uint8Array;
    getAdditionalInformation_asB64(): string;
    setAdditionalInformation(value: Uint8Array | string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        code: number,
        name: string,
        description: string,
        additionalInformation: Uint8Array | string,
    }
}
