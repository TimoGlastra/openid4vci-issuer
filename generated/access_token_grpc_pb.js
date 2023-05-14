// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var access_token_pb = require('./access_token_pb.js');
var error_pb = require('./error_pb.js');

function serialize_openid4vci_CreateAccessTokenErrorResponseRequest(arg) {
  if (!(arg instanceof access_token_pb.CreateAccessTokenErrorResponseRequest)) {
    throw new Error('Expected argument of type openid4vci.CreateAccessTokenErrorResponseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_CreateAccessTokenErrorResponseRequest(buffer_arg) {
  return access_token_pb.CreateAccessTokenErrorResponseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_CreateAccessTokenErrorResponseResponse(arg) {
  if (!(arg instanceof access_token_pb.CreateAccessTokenErrorResponseResponse)) {
    throw new Error('Expected argument of type openid4vci.CreateAccessTokenErrorResponseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_CreateAccessTokenErrorResponseResponse(buffer_arg) {
  return access_token_pb.CreateAccessTokenErrorResponseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_CreateAccessTokenSuccessResponseRequest(arg) {
  if (!(arg instanceof access_token_pb.CreateAccessTokenSuccessResponseRequest)) {
    throw new Error('Expected argument of type openid4vci.CreateAccessTokenSuccessResponseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_CreateAccessTokenSuccessResponseRequest(buffer_arg) {
  return access_token_pb.CreateAccessTokenSuccessResponseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_CreateAccessTokenSuccessResponseResponse(arg) {
  if (!(arg instanceof access_token_pb.CreateAccessTokenSuccessResponseResponse)) {
    throw new Error('Expected argument of type openid4vci.CreateAccessTokenSuccessResponseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_CreateAccessTokenSuccessResponseResponse(buffer_arg) {
  return access_token_pb.CreateAccessTokenSuccessResponseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_EvaluateAccessTokenRequestRequest(arg) {
  if (!(arg instanceof access_token_pb.EvaluateAccessTokenRequestRequest)) {
    throw new Error('Expected argument of type openid4vci.EvaluateAccessTokenRequestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_EvaluateAccessTokenRequestRequest(buffer_arg) {
  return access_token_pb.EvaluateAccessTokenRequestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_EvaluateAccessTokenRequestResponse(arg) {
  if (!(arg instanceof access_token_pb.EvaluateAccessTokenRequestResponse)) {
    throw new Error('Expected argument of type openid4vci.EvaluateAccessTokenRequestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_EvaluateAccessTokenRequestResponse(buffer_arg) {
  return access_token_pb.EvaluateAccessTokenRequestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccessTokenServiceService = exports.AccessTokenServiceService = {
  createAccessTokenErrorResponse: {
    path: '/openid4vci.AccessTokenService/CreateAccessTokenErrorResponse',
    requestStream: false,
    responseStream: false,
    requestType: access_token_pb.CreateAccessTokenErrorResponseRequest,
    responseType: access_token_pb.CreateAccessTokenErrorResponseResponse,
    requestSerialize: serialize_openid4vci_CreateAccessTokenErrorResponseRequest,
    requestDeserialize: deserialize_openid4vci_CreateAccessTokenErrorResponseRequest,
    responseSerialize: serialize_openid4vci_CreateAccessTokenErrorResponseResponse,
    responseDeserialize: deserialize_openid4vci_CreateAccessTokenErrorResponseResponse,
  },
  createAccessTokenSuccessResponse: {
    path: '/openid4vci.AccessTokenService/CreateAccessTokenSuccessResponse',
    requestStream: false,
    responseStream: false,
    requestType: access_token_pb.CreateAccessTokenSuccessResponseRequest,
    responseType: access_token_pb.CreateAccessTokenSuccessResponseResponse,
    requestSerialize: serialize_openid4vci_CreateAccessTokenSuccessResponseRequest,
    requestDeserialize: deserialize_openid4vci_CreateAccessTokenSuccessResponseRequest,
    responseSerialize: serialize_openid4vci_CreateAccessTokenSuccessResponseResponse,
    responseDeserialize: deserialize_openid4vci_CreateAccessTokenSuccessResponseResponse,
  },
  evaluateAccessTokenRequest: {
    path: '/openid4vci.AccessTokenService/EvaluateAccessTokenRequest',
    requestStream: false,
    responseStream: false,
    requestType: access_token_pb.EvaluateAccessTokenRequestRequest,
    responseType: access_token_pb.EvaluateAccessTokenRequestResponse,
    requestSerialize: serialize_openid4vci_EvaluateAccessTokenRequestRequest,
    requestDeserialize: deserialize_openid4vci_EvaluateAccessTokenRequestRequest,
    responseSerialize: serialize_openid4vci_EvaluateAccessTokenRequestResponse,
    responseDeserialize: deserialize_openid4vci_EvaluateAccessTokenRequestResponse,
  },
};

exports.AccessTokenServiceClient = grpc.makeGenericClientConstructor(AccessTokenServiceService);
