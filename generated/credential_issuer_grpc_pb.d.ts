// package: openid4vci
// file: credential_issuer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as credential_issuer_pb from "./credential_issuer_pb";
import * as error_pb from "./error_pb";

interface ICredentialIssuerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCredentialOffer: ICredentialIssuerServiceService_ICreateCredentialOffer;
    evaluateCredentialRequest: ICredentialIssuerServiceService_IEvaluateCredentialRequest;
    preEvaluateCredentialRequest: ICredentialIssuerServiceService_IPreEvaluateCredentialRequest;
    createCredentialErrorResponse: ICredentialIssuerServiceService_ICreateCredentialErrorResponse;
    createCredentialSuccessResponse: ICredentialIssuerServiceService_ICreateCredentialSuccessResponse;
}

interface ICredentialIssuerServiceService_ICreateCredentialOffer extends grpc.MethodDefinition<credential_issuer_pb.CreateCredentialOfferRequest, credential_issuer_pb.CreateCredentialOfferResponse> {
    path: "/openid4vci.CredentialIssuerService/CreateCredentialOffer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<credential_issuer_pb.CreateCredentialOfferRequest>;
    requestDeserialize: grpc.deserialize<credential_issuer_pb.CreateCredentialOfferRequest>;
    responseSerialize: grpc.serialize<credential_issuer_pb.CreateCredentialOfferResponse>;
    responseDeserialize: grpc.deserialize<credential_issuer_pb.CreateCredentialOfferResponse>;
}
interface ICredentialIssuerServiceService_IEvaluateCredentialRequest extends grpc.MethodDefinition<credential_issuer_pb.EvaluateCredentialRequestRequest, credential_issuer_pb.EvaluateCredentialRequestResponse> {
    path: "/openid4vci.CredentialIssuerService/EvaluateCredentialRequest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<credential_issuer_pb.EvaluateCredentialRequestRequest>;
    requestDeserialize: grpc.deserialize<credential_issuer_pb.EvaluateCredentialRequestRequest>;
    responseSerialize: grpc.serialize<credential_issuer_pb.EvaluateCredentialRequestResponse>;
    responseDeserialize: grpc.deserialize<credential_issuer_pb.EvaluateCredentialRequestResponse>;
}
interface ICredentialIssuerServiceService_IPreEvaluateCredentialRequest extends grpc.MethodDefinition<credential_issuer_pb.PreEvaluateCredentialRequestRequest, credential_issuer_pb.PreEvaluateCredentialRequestResponse> {
    path: "/openid4vci.CredentialIssuerService/PreEvaluateCredentialRequest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<credential_issuer_pb.PreEvaluateCredentialRequestRequest>;
    requestDeserialize: grpc.deserialize<credential_issuer_pb.PreEvaluateCredentialRequestRequest>;
    responseSerialize: grpc.serialize<credential_issuer_pb.PreEvaluateCredentialRequestResponse>;
    responseDeserialize: grpc.deserialize<credential_issuer_pb.PreEvaluateCredentialRequestResponse>;
}
interface ICredentialIssuerServiceService_ICreateCredentialErrorResponse extends grpc.MethodDefinition<credential_issuer_pb.CreateCredentialErrorResponseRequest, credential_issuer_pb.CreateCredentialErrorResponseResponse> {
    path: "/openid4vci.CredentialIssuerService/CreateCredentialErrorResponse";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<credential_issuer_pb.CreateCredentialErrorResponseRequest>;
    requestDeserialize: grpc.deserialize<credential_issuer_pb.CreateCredentialErrorResponseRequest>;
    responseSerialize: grpc.serialize<credential_issuer_pb.CreateCredentialErrorResponseResponse>;
    responseDeserialize: grpc.deserialize<credential_issuer_pb.CreateCredentialErrorResponseResponse>;
}
interface ICredentialIssuerServiceService_ICreateCredentialSuccessResponse extends grpc.MethodDefinition<credential_issuer_pb.CreateCredentialSuccessResponseRequest, credential_issuer_pb.CreateCredentialSuccessResponseResponse> {
    path: "/openid4vci.CredentialIssuerService/CreateCredentialSuccessResponse";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<credential_issuer_pb.CreateCredentialSuccessResponseRequest>;
    requestDeserialize: grpc.deserialize<credential_issuer_pb.CreateCredentialSuccessResponseRequest>;
    responseSerialize: grpc.serialize<credential_issuer_pb.CreateCredentialSuccessResponseResponse>;
    responseDeserialize: grpc.deserialize<credential_issuer_pb.CreateCredentialSuccessResponseResponse>;
}

export const CredentialIssuerServiceService: ICredentialIssuerServiceService;

export interface ICredentialIssuerServiceServer extends grpc.UntypedServiceImplementation {
    createCredentialOffer: grpc.handleUnaryCall<credential_issuer_pb.CreateCredentialOfferRequest, credential_issuer_pb.CreateCredentialOfferResponse>;
    evaluateCredentialRequest: grpc.handleUnaryCall<credential_issuer_pb.EvaluateCredentialRequestRequest, credential_issuer_pb.EvaluateCredentialRequestResponse>;
    preEvaluateCredentialRequest: grpc.handleUnaryCall<credential_issuer_pb.PreEvaluateCredentialRequestRequest, credential_issuer_pb.PreEvaluateCredentialRequestResponse>;
    createCredentialErrorResponse: grpc.handleUnaryCall<credential_issuer_pb.CreateCredentialErrorResponseRequest, credential_issuer_pb.CreateCredentialErrorResponseResponse>;
    createCredentialSuccessResponse: grpc.handleUnaryCall<credential_issuer_pb.CreateCredentialSuccessResponseRequest, credential_issuer_pb.CreateCredentialSuccessResponseResponse>;
}

export interface ICredentialIssuerServiceClient {
    createCredentialOffer(request: credential_issuer_pb.CreateCredentialOfferRequest, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialOfferResponse) => void): grpc.ClientUnaryCall;
    createCredentialOffer(request: credential_issuer_pb.CreateCredentialOfferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialOfferResponse) => void): grpc.ClientUnaryCall;
    createCredentialOffer(request: credential_issuer_pb.CreateCredentialOfferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialOfferResponse) => void): grpc.ClientUnaryCall;
    evaluateCredentialRequest(request: credential_issuer_pb.EvaluateCredentialRequestRequest, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.EvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    evaluateCredentialRequest(request: credential_issuer_pb.EvaluateCredentialRequestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.EvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    evaluateCredentialRequest(request: credential_issuer_pb.EvaluateCredentialRequestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.EvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    preEvaluateCredentialRequest(request: credential_issuer_pb.PreEvaluateCredentialRequestRequest, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.PreEvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    preEvaluateCredentialRequest(request: credential_issuer_pb.PreEvaluateCredentialRequestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.PreEvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    preEvaluateCredentialRequest(request: credential_issuer_pb.PreEvaluateCredentialRequestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.PreEvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    createCredentialErrorResponse(request: credential_issuer_pb.CreateCredentialErrorResponseRequest, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialErrorResponseResponse) => void): grpc.ClientUnaryCall;
    createCredentialErrorResponse(request: credential_issuer_pb.CreateCredentialErrorResponseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialErrorResponseResponse) => void): grpc.ClientUnaryCall;
    createCredentialErrorResponse(request: credential_issuer_pb.CreateCredentialErrorResponseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialErrorResponseResponse) => void): grpc.ClientUnaryCall;
    createCredentialSuccessResponse(request: credential_issuer_pb.CreateCredentialSuccessResponseRequest, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialSuccessResponseResponse) => void): grpc.ClientUnaryCall;
    createCredentialSuccessResponse(request: credential_issuer_pb.CreateCredentialSuccessResponseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialSuccessResponseResponse) => void): grpc.ClientUnaryCall;
    createCredentialSuccessResponse(request: credential_issuer_pb.CreateCredentialSuccessResponseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialSuccessResponseResponse) => void): grpc.ClientUnaryCall;
}

export class CredentialIssuerServiceClient extends grpc.Client implements ICredentialIssuerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createCredentialOffer(request: credential_issuer_pb.CreateCredentialOfferRequest, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialOfferResponse) => void): grpc.ClientUnaryCall;
    public createCredentialOffer(request: credential_issuer_pb.CreateCredentialOfferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialOfferResponse) => void): grpc.ClientUnaryCall;
    public createCredentialOffer(request: credential_issuer_pb.CreateCredentialOfferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialOfferResponse) => void): grpc.ClientUnaryCall;
    public evaluateCredentialRequest(request: credential_issuer_pb.EvaluateCredentialRequestRequest, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.EvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    public evaluateCredentialRequest(request: credential_issuer_pb.EvaluateCredentialRequestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.EvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    public evaluateCredentialRequest(request: credential_issuer_pb.EvaluateCredentialRequestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.EvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    public preEvaluateCredentialRequest(request: credential_issuer_pb.PreEvaluateCredentialRequestRequest, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.PreEvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    public preEvaluateCredentialRequest(request: credential_issuer_pb.PreEvaluateCredentialRequestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.PreEvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    public preEvaluateCredentialRequest(request: credential_issuer_pb.PreEvaluateCredentialRequestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.PreEvaluateCredentialRequestResponse) => void): grpc.ClientUnaryCall;
    public createCredentialErrorResponse(request: credential_issuer_pb.CreateCredentialErrorResponseRequest, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialErrorResponseResponse) => void): grpc.ClientUnaryCall;
    public createCredentialErrorResponse(request: credential_issuer_pb.CreateCredentialErrorResponseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialErrorResponseResponse) => void): grpc.ClientUnaryCall;
    public createCredentialErrorResponse(request: credential_issuer_pb.CreateCredentialErrorResponseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialErrorResponseResponse) => void): grpc.ClientUnaryCall;
    public createCredentialSuccessResponse(request: credential_issuer_pb.CreateCredentialSuccessResponseRequest, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialSuccessResponseResponse) => void): grpc.ClientUnaryCall;
    public createCredentialSuccessResponse(request: credential_issuer_pb.CreateCredentialSuccessResponseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialSuccessResponseResponse) => void): grpc.ClientUnaryCall;
    public createCredentialSuccessResponse(request: credential_issuer_pb.CreateCredentialSuccessResponseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: credential_issuer_pb.CreateCredentialSuccessResponseResponse) => void): grpc.ClientUnaryCall;
}
