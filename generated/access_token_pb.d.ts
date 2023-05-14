// package: openid4vci
// file: access_token.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";

export class CreateAccessTokenErrorResponseRequest extends jspb.Message { 
    getError(): string;
    setError(value: string): CreateAccessTokenErrorResponseRequest;

    hasErrorDescription(): boolean;
    clearErrorDescription(): void;
    getErrorDescription(): string | undefined;
    setErrorDescription(value: string): CreateAccessTokenErrorResponseRequest;

    hasErrorUri(): boolean;
    clearErrorUri(): void;
    getErrorUri(): string | undefined;
    setErrorUri(value: string): CreateAccessTokenErrorResponseRequest;

    hasErrorAdditionalDetails(): boolean;
    clearErrorAdditionalDetails(): void;
    getErrorAdditionalDetails(): Uint8Array | string;
    getErrorAdditionalDetails_asU8(): Uint8Array;
    getErrorAdditionalDetails_asB64(): string;
    setErrorAdditionalDetails(value: Uint8Array | string): CreateAccessTokenErrorResponseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccessTokenErrorResponseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccessTokenErrorResponseRequest): CreateAccessTokenErrorResponseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccessTokenErrorResponseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccessTokenErrorResponseRequest;
    static deserializeBinaryFromReader(message: CreateAccessTokenErrorResponseRequest, reader: jspb.BinaryReader): CreateAccessTokenErrorResponseRequest;
}

export namespace CreateAccessTokenErrorResponseRequest {
    export type AsObject = {
        error: string,
        errorDescription?: string,
        errorUri?: string,
        errorAdditionalDetails: Uint8Array | string,
    }
}

export class CreateAccessTokenErrorResponseResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): CreateAccessTokenErrorResponseResponse.Success | undefined;
    setSuccess(value?: CreateAccessTokenErrorResponseResponse.Success): CreateAccessTokenErrorResponseResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): CreateAccessTokenErrorResponseResponse;

    getResponseCase(): CreateAccessTokenErrorResponseResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccessTokenErrorResponseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccessTokenErrorResponseResponse): CreateAccessTokenErrorResponseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccessTokenErrorResponseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccessTokenErrorResponseResponse;
    static deserializeBinaryFromReader(message: CreateAccessTokenErrorResponseResponse, reader: jspb.BinaryReader): CreateAccessTokenErrorResponseResponse;
}

export namespace CreateAccessTokenErrorResponseResponse {
    export type AsObject = {
        success?: CreateAccessTokenErrorResponseResponse.Success.AsObject,
        error?: error_pb.Error.AsObject,
    }


    export class Success extends jspb.Message { 
        getErrorResponse(): Uint8Array | string;
        getErrorResponse_asU8(): Uint8Array;
        getErrorResponse_asB64(): string;
        setErrorResponse(value: Uint8Array | string): Success;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Success.AsObject;
        static toObject(includeInstance: boolean, msg: Success): Success.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Success, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Success;
        static deserializeBinaryFromReader(message: Success, reader: jspb.BinaryReader): Success;
    }

    export namespace Success {
        export type AsObject = {
            errorResponse: Uint8Array | string,
        }
    }


    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        SUCCESS = 1,
        ERROR = 2,
    }

}

export class CreateAccessTokenSuccessResponseRequest extends jspb.Message { 
    getAccessToken(): string;
    setAccessToken(value: string): CreateAccessTokenSuccessResponseRequest;
    getTokenType(): string;
    setTokenType(value: string): CreateAccessTokenSuccessResponseRequest;

    hasExpiresIn(): boolean;
    clearExpiresIn(): void;
    getExpiresIn(): number | undefined;
    setExpiresIn(value: number): CreateAccessTokenSuccessResponseRequest;

    hasScope(): boolean;
    clearScope(): void;
    getScope(): string | undefined;
    setScope(value: string): CreateAccessTokenSuccessResponseRequest;

    hasCNonce(): boolean;
    clearCNonce(): void;
    getCNonce(): string | undefined;
    setCNonce(value: string): CreateAccessTokenSuccessResponseRequest;

    hasCNonceExpiresIn(): boolean;
    clearCNonceExpiresIn(): void;
    getCNonceExpiresIn(): number | undefined;
    setCNonceExpiresIn(value: number): CreateAccessTokenSuccessResponseRequest;

    hasAuthorizationPending(): boolean;
    clearAuthorizationPending(): void;
    getAuthorizationPending(): boolean | undefined;
    setAuthorizationPending(value: boolean): CreateAccessTokenSuccessResponseRequest;

    hasInterval(): boolean;
    clearInterval(): void;
    getInterval(): number | undefined;
    setInterval(value: number): CreateAccessTokenSuccessResponseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccessTokenSuccessResponseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccessTokenSuccessResponseRequest): CreateAccessTokenSuccessResponseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccessTokenSuccessResponseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccessTokenSuccessResponseRequest;
    static deserializeBinaryFromReader(message: CreateAccessTokenSuccessResponseRequest, reader: jspb.BinaryReader): CreateAccessTokenSuccessResponseRequest;
}

export namespace CreateAccessTokenSuccessResponseRequest {
    export type AsObject = {
        accessToken: string,
        tokenType: string,
        expiresIn?: number,
        scope?: string,
        cNonce?: string,
        cNonceExpiresIn?: number,
        authorizationPending?: boolean,
        interval?: number,
    }
}

export class CreateAccessTokenSuccessResponseResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): CreateAccessTokenSuccessResponseResponse.Success | undefined;
    setSuccess(value?: CreateAccessTokenSuccessResponseResponse.Success): CreateAccessTokenSuccessResponseResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): CreateAccessTokenSuccessResponseResponse;

    getResponseCase(): CreateAccessTokenSuccessResponseResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccessTokenSuccessResponseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccessTokenSuccessResponseResponse): CreateAccessTokenSuccessResponseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccessTokenSuccessResponseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccessTokenSuccessResponseResponse;
    static deserializeBinaryFromReader(message: CreateAccessTokenSuccessResponseResponse, reader: jspb.BinaryReader): CreateAccessTokenSuccessResponseResponse;
}

export namespace CreateAccessTokenSuccessResponseResponse {
    export type AsObject = {
        success?: CreateAccessTokenSuccessResponseResponse.Success.AsObject,
        error?: error_pb.Error.AsObject,
    }


    export class Success extends jspb.Message { 
        getSuccessResponse(): Uint8Array | string;
        getSuccessResponse_asU8(): Uint8Array;
        getSuccessResponse_asB64(): string;
        setSuccessResponse(value: Uint8Array | string): Success;
        getCreatedAt(): string;
        setCreatedAt(value: string): Success;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Success.AsObject;
        static toObject(includeInstance: boolean, msg: Success): Success.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Success, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Success;
        static deserializeBinaryFromReader(message: Success, reader: jspb.BinaryReader): Success;
    }

    export namespace Success {
        export type AsObject = {
            successResponse: Uint8Array | string,
            createdAt: string,
        }
    }


    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        SUCCESS = 1,
        ERROR = 2,
    }

}

export class EvaluateAccessTokenRequestRequest extends jspb.Message { 
    getAccessTokenRequest(): Uint8Array | string;
    getAccessTokenRequest_asU8(): Uint8Array;
    getAccessTokenRequest_asB64(): string;
    setAccessTokenRequest(value: Uint8Array | string): EvaluateAccessTokenRequestRequest;

    hasCredentialOffer(): boolean;
    clearCredentialOffer(): void;
    getCredentialOffer(): Uint8Array | string;
    getCredentialOffer_asU8(): Uint8Array;
    getCredentialOffer_asB64(): string;
    setCredentialOffer(value: Uint8Array | string): EvaluateAccessTokenRequestRequest;

    hasEvaluateAccessTokenRequestOptions(): boolean;
    clearEvaluateAccessTokenRequestOptions(): void;
    getEvaluateAccessTokenRequestOptions(): Uint8Array | string;
    getEvaluateAccessTokenRequestOptions_asU8(): Uint8Array;
    getEvaluateAccessTokenRequestOptions_asB64(): string;
    setEvaluateAccessTokenRequestOptions(value: Uint8Array | string): EvaluateAccessTokenRequestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvaluateAccessTokenRequestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EvaluateAccessTokenRequestRequest): EvaluateAccessTokenRequestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvaluateAccessTokenRequestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvaluateAccessTokenRequestRequest;
    static deserializeBinaryFromReader(message: EvaluateAccessTokenRequestRequest, reader: jspb.BinaryReader): EvaluateAccessTokenRequestRequest;
}

export namespace EvaluateAccessTokenRequestRequest {
    export type AsObject = {
        accessTokenRequest: Uint8Array | string,
        credentialOffer: Uint8Array | string,
        evaluateAccessTokenRequestOptions: Uint8Array | string,
    }
}

export class EvaluateAccessTokenRequestResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): EvaluateAccessTokenRequestResponse.Success | undefined;
    setSuccess(value?: EvaluateAccessTokenRequestResponse.Success): EvaluateAccessTokenRequestResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): EvaluateAccessTokenRequestResponse;

    getResponseCase(): EvaluateAccessTokenRequestResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvaluateAccessTokenRequestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EvaluateAccessTokenRequestResponse): EvaluateAccessTokenRequestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvaluateAccessTokenRequestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvaluateAccessTokenRequestResponse;
    static deserializeBinaryFromReader(message: EvaluateAccessTokenRequestResponse, reader: jspb.BinaryReader): EvaluateAccessTokenRequestResponse;
}

export namespace EvaluateAccessTokenRequestResponse {
    export type AsObject = {
        success?: EvaluateAccessTokenRequestResponse.Success.AsObject,
        error?: error_pb.Error.AsObject,
    }


    export class Success extends jspb.Message { 
        getSuccessResponse(): Uint8Array | string;
        getSuccessResponse_asU8(): Uint8Array;
        getSuccessResponse_asB64(): string;
        setSuccessResponse(value: Uint8Array | string): Success;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Success.AsObject;
        static toObject(includeInstance: boolean, msg: Success): Success.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Success, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Success;
        static deserializeBinaryFromReader(message: Success, reader: jspb.BinaryReader): Success;
    }

    export namespace Success {
        export type AsObject = {
            successResponse: Uint8Array | string,
        }
    }


    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        SUCCESS = 1,
        ERROR = 2,
    }

}
