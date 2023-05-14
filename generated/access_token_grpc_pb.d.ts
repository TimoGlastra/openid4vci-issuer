// package: openid4vci
// file: access_token.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as access_token_pb from "./access_token_pb";
import * as error_pb from "./error_pb";

interface IAccessTokenServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createAccessTokenErrorResponse: IAccessTokenServiceService_ICreateAccessTokenErrorResponse;
    createAccessTokenSuccessResponse: IAccessTokenServiceService_ICreateAccessTokenSuccessResponse;
    evaluateAccessTokenRequest: IAccessTokenServiceService_IEvaluateAccessTokenRequest;
}

interface IAccessTokenServiceService_ICreateAccessTokenErrorResponse extends grpc.MethodDefinition<access_token_pb.CreateAccessTokenErrorResponseRequest, access_token_pb.CreateAccessTokenErrorResponseResponse> {
    path: "/openid4vci.AccessTokenService/CreateAccessTokenErrorResponse";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_token_pb.CreateAccessTokenErrorResponseRequest>;
    requestDeserialize: grpc.deserialize<access_token_pb.CreateAccessTokenErrorResponseRequest>;
    responseSerialize: grpc.serialize<access_token_pb.CreateAccessTokenErrorResponseResponse>;
    responseDeserialize: grpc.deserialize<access_token_pb.CreateAccessTokenErrorResponseResponse>;
}
interface IAccessTokenServiceService_ICreateAccessTokenSuccessResponse extends grpc.MethodDefinition<access_token_pb.CreateAccessTokenSuccessResponseRequest, access_token_pb.CreateAccessTokenSuccessResponseResponse> {
    path: "/openid4vci.AccessTokenService/CreateAccessTokenSuccessResponse";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_token_pb.CreateAccessTokenSuccessResponseRequest>;
    requestDeserialize: grpc.deserialize<access_token_pb.CreateAccessTokenSuccessResponseRequest>;
    responseSerialize: grpc.serialize<access_token_pb.CreateAccessTokenSuccessResponseResponse>;
    responseDeserialize: grpc.deserialize<access_token_pb.CreateAccessTokenSuccessResponseResponse>;
}
interface IAccessTokenServiceService_IEvaluateAccessTokenRequest extends grpc.MethodDefinition<access_token_pb.EvaluateAccessTokenRequestRequest, access_token_pb.EvaluateAccessTokenRequestResponse> {
    path: "/openid4vci.AccessTokenService/EvaluateAccessTokenRequest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_token_pb.EvaluateAccessTokenRequestRequest>;
    requestDeserialize: grpc.deserialize<access_token_pb.EvaluateAccessTokenRequestRequest>;
    responseSerialize: grpc.serialize<access_token_pb.EvaluateAccessTokenRequestResponse>;
    responseDeserialize: grpc.deserialize<access_token_pb.EvaluateAccessTokenRequestResponse>;
}

export const AccessTokenServiceService: IAccessTokenServiceService;

export interface IAccessTokenServiceServer extends grpc.UntypedServiceImplementation {
    createAccessTokenErrorResponse: grpc.handleUnaryCall<access_token_pb.CreateAccessTokenErrorResponseRequest, access_token_pb.CreateAccessTokenErrorResponseResponse>;
    createAccessTokenSuccessResponse: grpc.handleUnaryCall<access_token_pb.CreateAccessTokenSuccessResponseRequest, access_token_pb.CreateAccessTokenSuccessResponseResponse>;
    evaluateAccessTokenRequest: grpc.handleUnaryCall<access_token_pb.EvaluateAccessTokenRequestRequest, access_token_pb.EvaluateAccessTokenRequestResponse>;
}

export interface IAccessTokenServiceClient {
    createAccessTokenErrorResponse(request: access_token_pb.CreateAccessTokenErrorResponseRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenErrorResponseResponse) => void): grpc.ClientUnaryCall;
    createAccessTokenErrorResponse(request: access_token_pb.CreateAccessTokenErrorResponseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenErrorResponseResponse) => void): grpc.ClientUnaryCall;
    createAccessTokenErrorResponse(request: access_token_pb.CreateAccessTokenErrorResponseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenErrorResponseResponse) => void): grpc.ClientUnaryCall;
    createAccessTokenSuccessResponse(request: access_token_pb.CreateAccessTokenSuccessResponseRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenSuccessResponseResponse) => void): grpc.ClientUnaryCall;
    createAccessTokenSuccessResponse(request: access_token_pb.CreateAccessTokenSuccessResponseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenSuccessResponseResponse) => void): grpc.ClientUnaryCall;
    createAccessTokenSuccessResponse(request: access_token_pb.CreateAccessTokenSuccessResponseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenSuccessResponseResponse) => void): grpc.ClientUnaryCall;
    evaluateAccessTokenRequest(request: access_token_pb.EvaluateAccessTokenRequestRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.EvaluateAccessTokenRequestResponse) => void): grpc.ClientUnaryCall;
    evaluateAccessTokenRequest(request: access_token_pb.EvaluateAccessTokenRequestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.EvaluateAccessTokenRequestResponse) => void): grpc.ClientUnaryCall;
    evaluateAccessTokenRequest(request: access_token_pb.EvaluateAccessTokenRequestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.EvaluateAccessTokenRequestResponse) => void): grpc.ClientUnaryCall;
}

export class AccessTokenServiceClient extends grpc.Client implements IAccessTokenServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createAccessTokenErrorResponse(request: access_token_pb.CreateAccessTokenErrorResponseRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenErrorResponseResponse) => void): grpc.ClientUnaryCall;
    public createAccessTokenErrorResponse(request: access_token_pb.CreateAccessTokenErrorResponseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenErrorResponseResponse) => void): grpc.ClientUnaryCall;
    public createAccessTokenErrorResponse(request: access_token_pb.CreateAccessTokenErrorResponseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenErrorResponseResponse) => void): grpc.ClientUnaryCall;
    public createAccessTokenSuccessResponse(request: access_token_pb.CreateAccessTokenSuccessResponseRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenSuccessResponseResponse) => void): grpc.ClientUnaryCall;
    public createAccessTokenSuccessResponse(request: access_token_pb.CreateAccessTokenSuccessResponseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenSuccessResponseResponse) => void): grpc.ClientUnaryCall;
    public createAccessTokenSuccessResponse(request: access_token_pb.CreateAccessTokenSuccessResponseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.CreateAccessTokenSuccessResponseResponse) => void): grpc.ClientUnaryCall;
    public evaluateAccessTokenRequest(request: access_token_pb.EvaluateAccessTokenRequestRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.EvaluateAccessTokenRequestResponse) => void): grpc.ClientUnaryCall;
    public evaluateAccessTokenRequest(request: access_token_pb.EvaluateAccessTokenRequestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.EvaluateAccessTokenRequestResponse) => void): grpc.ClientUnaryCall;
    public evaluateAccessTokenRequest(request: access_token_pb.EvaluateAccessTokenRequestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.EvaluateAccessTokenRequestResponse) => void): grpc.ClientUnaryCall;
}
