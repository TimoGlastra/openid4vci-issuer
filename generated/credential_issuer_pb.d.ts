// package: openid4vci
// file: credential_issuer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";

export class CreateCredentialOfferRequest extends jspb.Message { 
    getIssuerMetadata(): Uint8Array | string;
    getIssuerMetadata_asU8(): Uint8Array;
    getIssuerMetadata_asB64(): string;
    setIssuerMetadata(value: Uint8Array | string): CreateCredentialOfferRequest;
    getCredentials(): Uint8Array | string;
    getCredentials_asU8(): Uint8Array;
    getCredentials_asB64(): string;
    setCredentials(value: Uint8Array | string): CreateCredentialOfferRequest;

    hasCredentialOfferEndpoint(): boolean;
    clearCredentialOfferEndpoint(): void;
    getCredentialOfferEndpoint(): string | undefined;
    setCredentialOfferEndpoint(value: string): CreateCredentialOfferRequest;

    hasAuthorizedCodeFlow(): boolean;
    clearAuthorizedCodeFlow(): void;
    getAuthorizedCodeFlow(): Uint8Array | string;
    getAuthorizedCodeFlow_asU8(): Uint8Array;
    getAuthorizedCodeFlow_asB64(): string;
    setAuthorizedCodeFlow(value: Uint8Array | string): CreateCredentialOfferRequest;

    hasPreAuthorizedCodeFlow(): boolean;
    clearPreAuthorizedCodeFlow(): void;
    getPreAuthorizedCodeFlow(): Uint8Array | string;
    getPreAuthorizedCodeFlow_asU8(): Uint8Array;
    getPreAuthorizedCodeFlow_asB64(): string;
    setPreAuthorizedCodeFlow(value: Uint8Array | string): CreateCredentialOfferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCredentialOfferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCredentialOfferRequest): CreateCredentialOfferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCredentialOfferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCredentialOfferRequest;
    static deserializeBinaryFromReader(message: CreateCredentialOfferRequest, reader: jspb.BinaryReader): CreateCredentialOfferRequest;
}

export namespace CreateCredentialOfferRequest {
    export type AsObject = {
        issuerMetadata: Uint8Array | string,
        credentials: Uint8Array | string,
        credentialOfferEndpoint?: string,
        authorizedCodeFlow: Uint8Array | string,
        preAuthorizedCodeFlow: Uint8Array | string,
    }
}

export class CreateCredentialOfferResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): CreateCredentialOfferResponse.Success | undefined;
    setSuccess(value?: CreateCredentialOfferResponse.Success): CreateCredentialOfferResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): CreateCredentialOfferResponse;

    getResponseCase(): CreateCredentialOfferResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCredentialOfferResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCredentialOfferResponse): CreateCredentialOfferResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCredentialOfferResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCredentialOfferResponse;
    static deserializeBinaryFromReader(message: CreateCredentialOfferResponse, reader: jspb.BinaryReader): CreateCredentialOfferResponse;
}

export namespace CreateCredentialOfferResponse {
    export type AsObject = {
        success?: CreateCredentialOfferResponse.Success.AsObject,
        error?: error_pb.Error.AsObject,
    }


    export class Success extends jspb.Message { 
        getCredentialOffer(): Uint8Array | string;
        getCredentialOffer_asU8(): Uint8Array;
        getCredentialOffer_asB64(): string;
        setCredentialOffer(value: Uint8Array | string): Success;
        getCredentialOfferUrl(): string;
        setCredentialOfferUrl(value: string): Success;

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
            credentialOffer: Uint8Array | string,
            credentialOfferUrl: string,
        }
    }


    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        SUCCESS = 1,
        ERROR = 2,
    }

}

export class PreEvaluateCredentialRequestRequest extends jspb.Message { 
    getCredentialRequest(): Uint8Array | string;
    getCredentialRequest_asU8(): Uint8Array;
    getCredentialRequest_asB64(): string;
    setCredentialRequest(value: Uint8Array | string): PreEvaluateCredentialRequestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreEvaluateCredentialRequestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PreEvaluateCredentialRequestRequest): PreEvaluateCredentialRequestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreEvaluateCredentialRequestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreEvaluateCredentialRequestRequest;
    static deserializeBinaryFromReader(message: PreEvaluateCredentialRequestRequest, reader: jspb.BinaryReader): PreEvaluateCredentialRequestRequest;
}

export namespace PreEvaluateCredentialRequestRequest {
    export type AsObject = {
        credentialRequest: Uint8Array | string,
    }
}

export class PreEvaluateCredentialRequestResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): PreEvaluateCredentialRequestResponse.Success | undefined;
    setSuccess(value?: PreEvaluateCredentialRequestResponse.Success): PreEvaluateCredentialRequestResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): PreEvaluateCredentialRequestResponse;

    getResponseCase(): PreEvaluateCredentialRequestResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreEvaluateCredentialRequestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PreEvaluateCredentialRequestResponse): PreEvaluateCredentialRequestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreEvaluateCredentialRequestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreEvaluateCredentialRequestResponse;
    static deserializeBinaryFromReader(message: PreEvaluateCredentialRequestResponse, reader: jspb.BinaryReader): PreEvaluateCredentialRequestResponse;
}

export namespace PreEvaluateCredentialRequestResponse {
    export type AsObject = {
        success?: PreEvaluateCredentialRequestResponse.Success.AsObject,
        error?: error_pb.Error.AsObject,
    }


    export class Success extends jspb.Message { 

        hasDid(): boolean;
        clearDid(): void;
        getDid(): string | undefined;
        setDid(value: string): Success;

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
            did?: string,
        }
    }


    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        SUCCESS = 1,
        ERROR = 2,
    }

}

export class EvaluateCredentialRequestRequest extends jspb.Message { 
    getIssuerMetadata(): Uint8Array | string;
    getIssuerMetadata_asU8(): Uint8Array;
    getIssuerMetadata_asB64(): string;
    setIssuerMetadata(value: Uint8Array | string): EvaluateCredentialRequestRequest;
    getCredentialRequest(): Uint8Array | string;
    getCredentialRequest_asU8(): Uint8Array;
    getCredentialRequest_asB64(): string;
    setCredentialRequest(value: Uint8Array | string): EvaluateCredentialRequestRequest;

    hasCredentialOffer(): boolean;
    clearCredentialOffer(): void;
    getCredentialOffer(): Uint8Array | string;
    getCredentialOffer_asU8(): Uint8Array;
    getCredentialOffer_asB64(): string;
    setCredentialOffer(value: Uint8Array | string): EvaluateCredentialRequestRequest;

    hasAuthorizationServerMetadata(): boolean;
    clearAuthorizationServerMetadata(): void;
    getAuthorizationServerMetadata(): Uint8Array | string;
    getAuthorizationServerMetadata_asU8(): Uint8Array;
    getAuthorizationServerMetadata_asB64(): string;
    setAuthorizationServerMetadata(value: Uint8Array | string): EvaluateCredentialRequestRequest;

    hasDidDocument(): boolean;
    clearDidDocument(): void;
    getDidDocument(): Uint8Array | string;
    getDidDocument_asU8(): Uint8Array;
    getDidDocument_asB64(): string;
    setDidDocument(value: Uint8Array | string): EvaluateCredentialRequestRequest;

    hasEvaluateCredentialRequestOptions(): boolean;
    clearEvaluateCredentialRequestOptions(): void;
    getEvaluateCredentialRequestOptions(): Uint8Array | string;
    getEvaluateCredentialRequestOptions_asU8(): Uint8Array;
    getEvaluateCredentialRequestOptions_asB64(): string;
    setEvaluateCredentialRequestOptions(value: Uint8Array | string): EvaluateCredentialRequestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvaluateCredentialRequestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EvaluateCredentialRequestRequest): EvaluateCredentialRequestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvaluateCredentialRequestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvaluateCredentialRequestRequest;
    static deserializeBinaryFromReader(message: EvaluateCredentialRequestRequest, reader: jspb.BinaryReader): EvaluateCredentialRequestRequest;
}

export namespace EvaluateCredentialRequestRequest {
    export type AsObject = {
        issuerMetadata: Uint8Array | string,
        credentialRequest: Uint8Array | string,
        credentialOffer: Uint8Array | string,
        authorizationServerMetadata: Uint8Array | string,
        didDocument: Uint8Array | string,
        evaluateCredentialRequestOptions: Uint8Array | string,
    }
}

export class EvaluateCredentialRequestResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): EvaluateCredentialRequestResponse.Success | undefined;
    setSuccess(value?: EvaluateCredentialRequestResponse.Success): EvaluateCredentialRequestResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): EvaluateCredentialRequestResponse;

    getResponseCase(): EvaluateCredentialRequestResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvaluateCredentialRequestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EvaluateCredentialRequestResponse): EvaluateCredentialRequestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvaluateCredentialRequestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvaluateCredentialRequestResponse;
    static deserializeBinaryFromReader(message: EvaluateCredentialRequestResponse, reader: jspb.BinaryReader): EvaluateCredentialRequestResponse;
}

export namespace EvaluateCredentialRequestResponse {
    export type AsObject = {
        success?: EvaluateCredentialRequestResponse.Success.AsObject,
        error?: error_pb.Error.AsObject,
    }


    export class Success extends jspb.Message { 

        hasProofOfPossession(): boolean;
        clearProofOfPossession(): void;
        getProofOfPossession(): Uint8Array | string;
        getProofOfPossession_asU8(): Uint8Array;
        getProofOfPossession_asB64(): string;
        setProofOfPossession(value: Uint8Array | string): Success;

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
            proofOfPossession: Uint8Array | string,
        }
    }


    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        SUCCESS = 1,
        ERROR = 2,
    }

}

export class CreateCredentialSuccessResponseRequest extends jspb.Message { 
    getCredentialRequest(): Uint8Array | string;
    getCredentialRequest_asU8(): Uint8Array;
    getCredentialRequest_asB64(): string;
    setCredentialRequest(value: Uint8Array | string): CreateCredentialSuccessResponseRequest;

    hasCredential(): boolean;
    clearCredential(): void;
    getCredential(): Uint8Array | string;
    getCredential_asU8(): Uint8Array;
    getCredential_asB64(): string;
    setCredential(value: Uint8Array | string): CreateCredentialSuccessResponseRequest;

    hasAcceptanceToken(): boolean;
    clearAcceptanceToken(): void;
    getAcceptanceToken(): string | undefined;
    setAcceptanceToken(value: string): CreateCredentialSuccessResponseRequest;

    hasCNonce(): boolean;
    clearCNonce(): void;
    getCNonce(): string | undefined;
    setCNonce(value: string): CreateCredentialSuccessResponseRequest;

    hasCNonceExpiresIn(): boolean;
    clearCNonceExpiresIn(): void;
    getCNonceExpiresIn(): number | undefined;
    setCNonceExpiresIn(value: number): CreateCredentialSuccessResponseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCredentialSuccessResponseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCredentialSuccessResponseRequest): CreateCredentialSuccessResponseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCredentialSuccessResponseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCredentialSuccessResponseRequest;
    static deserializeBinaryFromReader(message: CreateCredentialSuccessResponseRequest, reader: jspb.BinaryReader): CreateCredentialSuccessResponseRequest;
}

export namespace CreateCredentialSuccessResponseRequest {
    export type AsObject = {
        credentialRequest: Uint8Array | string,
        credential: Uint8Array | string,
        acceptanceToken?: string,
        cNonce?: string,
        cNonceExpiresIn?: number,
    }
}

export class CreateCredentialSuccessResponseResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): CreateCredentialSuccessResponseResponse.Success | undefined;
    setSuccess(value?: CreateCredentialSuccessResponseResponse.Success): CreateCredentialSuccessResponseResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): CreateCredentialSuccessResponseResponse;

    getResponseCase(): CreateCredentialSuccessResponseResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCredentialSuccessResponseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCredentialSuccessResponseResponse): CreateCredentialSuccessResponseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCredentialSuccessResponseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCredentialSuccessResponseResponse;
    static deserializeBinaryFromReader(message: CreateCredentialSuccessResponseResponse, reader: jspb.BinaryReader): CreateCredentialSuccessResponseResponse;
}

export namespace CreateCredentialSuccessResponseResponse {
    export type AsObject = {
        success?: CreateCredentialSuccessResponseResponse.Success.AsObject,
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

export class CreateCredentialErrorResponseRequest extends jspb.Message { 
    getError(): string;
    setError(value: string): CreateCredentialErrorResponseRequest;

    hasErrorDescription(): boolean;
    clearErrorDescription(): void;
    getErrorDescription(): string | undefined;
    setErrorDescription(value: string): CreateCredentialErrorResponseRequest;

    hasErrorUri(): boolean;
    clearErrorUri(): void;
    getErrorUri(): string | undefined;
    setErrorUri(value: string): CreateCredentialErrorResponseRequest;

    hasErrorAdditionalDetails(): boolean;
    clearErrorAdditionalDetails(): void;
    getErrorAdditionalDetails(): Uint8Array | string;
    getErrorAdditionalDetails_asU8(): Uint8Array;
    getErrorAdditionalDetails_asB64(): string;
    setErrorAdditionalDetails(value: Uint8Array | string): CreateCredentialErrorResponseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCredentialErrorResponseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCredentialErrorResponseRequest): CreateCredentialErrorResponseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCredentialErrorResponseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCredentialErrorResponseRequest;
    static deserializeBinaryFromReader(message: CreateCredentialErrorResponseRequest, reader: jspb.BinaryReader): CreateCredentialErrorResponseRequest;
}

export namespace CreateCredentialErrorResponseRequest {
    export type AsObject = {
        error: string,
        errorDescription?: string,
        errorUri?: string,
        errorAdditionalDetails: Uint8Array | string,
    }
}

export class CreateCredentialErrorResponseResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): CreateCredentialErrorResponseResponse.Success | undefined;
    setSuccess(value?: CreateCredentialErrorResponseResponse.Success): CreateCredentialErrorResponseResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): CreateCredentialErrorResponseResponse;

    getResponseCase(): CreateCredentialErrorResponseResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCredentialErrorResponseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCredentialErrorResponseResponse): CreateCredentialErrorResponseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCredentialErrorResponseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCredentialErrorResponseResponse;
    static deserializeBinaryFromReader(message: CreateCredentialErrorResponseResponse, reader: jspb.BinaryReader): CreateCredentialErrorResponseResponse;
}

export namespace CreateCredentialErrorResponseResponse {
    export type AsObject = {
        success?: CreateCredentialErrorResponseResponse.Success.AsObject,
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
