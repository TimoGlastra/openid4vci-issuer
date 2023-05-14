// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var credential_issuer_pb = require('./credential_issuer_pb.js');
var error_pb = require('./error_pb.js');

function serialize_openid4vci_CreateCredentialErrorResponseRequest(arg) {
  if (!(arg instanceof credential_issuer_pb.CreateCredentialErrorResponseRequest)) {
    throw new Error('Expected argument of type openid4vci.CreateCredentialErrorResponseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_CreateCredentialErrorResponseRequest(buffer_arg) {
  return credential_issuer_pb.CreateCredentialErrorResponseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_CreateCredentialErrorResponseResponse(arg) {
  if (!(arg instanceof credential_issuer_pb.CreateCredentialErrorResponseResponse)) {
    throw new Error('Expected argument of type openid4vci.CreateCredentialErrorResponseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_CreateCredentialErrorResponseResponse(buffer_arg) {
  return credential_issuer_pb.CreateCredentialErrorResponseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_CreateCredentialOfferRequest(arg) {
  if (!(arg instanceof credential_issuer_pb.CreateCredentialOfferRequest)) {
    throw new Error('Expected argument of type openid4vci.CreateCredentialOfferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_CreateCredentialOfferRequest(buffer_arg) {
  return credential_issuer_pb.CreateCredentialOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_CreateCredentialOfferResponse(arg) {
  if (!(arg instanceof credential_issuer_pb.CreateCredentialOfferResponse)) {
    throw new Error('Expected argument of type openid4vci.CreateCredentialOfferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_CreateCredentialOfferResponse(buffer_arg) {
  return credential_issuer_pb.CreateCredentialOfferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_CreateCredentialSuccessResponseRequest(arg) {
  if (!(arg instanceof credential_issuer_pb.CreateCredentialSuccessResponseRequest)) {
    throw new Error('Expected argument of type openid4vci.CreateCredentialSuccessResponseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_CreateCredentialSuccessResponseRequest(buffer_arg) {
  return credential_issuer_pb.CreateCredentialSuccessResponseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_CreateCredentialSuccessResponseResponse(arg) {
  if (!(arg instanceof credential_issuer_pb.CreateCredentialSuccessResponseResponse)) {
    throw new Error('Expected argument of type openid4vci.CreateCredentialSuccessResponseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_CreateCredentialSuccessResponseResponse(buffer_arg) {
  return credential_issuer_pb.CreateCredentialSuccessResponseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_EvaluateCredentialRequestRequest(arg) {
  if (!(arg instanceof credential_issuer_pb.EvaluateCredentialRequestRequest)) {
    throw new Error('Expected argument of type openid4vci.EvaluateCredentialRequestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_EvaluateCredentialRequestRequest(buffer_arg) {
  return credential_issuer_pb.EvaluateCredentialRequestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_EvaluateCredentialRequestResponse(arg) {
  if (!(arg instanceof credential_issuer_pb.EvaluateCredentialRequestResponse)) {
    throw new Error('Expected argument of type openid4vci.EvaluateCredentialRequestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_EvaluateCredentialRequestResponse(buffer_arg) {
  return credential_issuer_pb.EvaluateCredentialRequestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_PreEvaluateCredentialRequestRequest(arg) {
  if (!(arg instanceof credential_issuer_pb.PreEvaluateCredentialRequestRequest)) {
    throw new Error('Expected argument of type openid4vci.PreEvaluateCredentialRequestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_PreEvaluateCredentialRequestRequest(buffer_arg) {
  return credential_issuer_pb.PreEvaluateCredentialRequestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_openid4vci_PreEvaluateCredentialRequestResponse(arg) {
  if (!(arg instanceof credential_issuer_pb.PreEvaluateCredentialRequestResponse)) {
    throw new Error('Expected argument of type openid4vci.PreEvaluateCredentialRequestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_openid4vci_PreEvaluateCredentialRequestResponse(buffer_arg) {
  return credential_issuer_pb.PreEvaluateCredentialRequestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CredentialIssuerServiceService = exports.CredentialIssuerServiceService = {
  createCredentialOffer: {
    path: '/openid4vci.CredentialIssuerService/CreateCredentialOffer',
    requestStream: false,
    responseStream: false,
    requestType: credential_issuer_pb.CreateCredentialOfferRequest,
    responseType: credential_issuer_pb.CreateCredentialOfferResponse,
    requestSerialize: serialize_openid4vci_CreateCredentialOfferRequest,
    requestDeserialize: deserialize_openid4vci_CreateCredentialOfferRequest,
    responseSerialize: serialize_openid4vci_CreateCredentialOfferResponse,
    responseDeserialize: deserialize_openid4vci_CreateCredentialOfferResponse,
  },
  evaluateCredentialRequest: {
    path: '/openid4vci.CredentialIssuerService/EvaluateCredentialRequest',
    requestStream: false,
    responseStream: false,
    requestType: credential_issuer_pb.EvaluateCredentialRequestRequest,
    responseType: credential_issuer_pb.EvaluateCredentialRequestResponse,
    requestSerialize: serialize_openid4vci_EvaluateCredentialRequestRequest,
    requestDeserialize: deserialize_openid4vci_EvaluateCredentialRequestRequest,
    responseSerialize: serialize_openid4vci_EvaluateCredentialRequestResponse,
    responseDeserialize: deserialize_openid4vci_EvaluateCredentialRequestResponse,
  },
  preEvaluateCredentialRequest: {
    path: '/openid4vci.CredentialIssuerService/PreEvaluateCredentialRequest',
    requestStream: false,
    responseStream: false,
    requestType: credential_issuer_pb.PreEvaluateCredentialRequestRequest,
    responseType: credential_issuer_pb.PreEvaluateCredentialRequestResponse,
    requestSerialize: serialize_openid4vci_PreEvaluateCredentialRequestRequest,
    requestDeserialize: deserialize_openid4vci_PreEvaluateCredentialRequestRequest,
    responseSerialize: serialize_openid4vci_PreEvaluateCredentialRequestResponse,
    responseDeserialize: deserialize_openid4vci_PreEvaluateCredentialRequestResponse,
  },
  createCredentialErrorResponse: {
    path: '/openid4vci.CredentialIssuerService/CreateCredentialErrorResponse',
    requestStream: false,
    responseStream: false,
    requestType: credential_issuer_pb.CreateCredentialErrorResponseRequest,
    responseType: credential_issuer_pb.CreateCredentialErrorResponseResponse,
    requestSerialize: serialize_openid4vci_CreateCredentialErrorResponseRequest,
    requestDeserialize: deserialize_openid4vci_CreateCredentialErrorResponseRequest,
    responseSerialize: serialize_openid4vci_CreateCredentialErrorResponseResponse,
    responseDeserialize: deserialize_openid4vci_CreateCredentialErrorResponseResponse,
  },
  createCredentialSuccessResponse: {
    path: '/openid4vci.CredentialIssuerService/CreateCredentialSuccessResponse',
    requestStream: false,
    responseStream: false,
    requestType: credential_issuer_pb.CreateCredentialSuccessResponseRequest,
    responseType: credential_issuer_pb.CreateCredentialSuccessResponseResponse,
    requestSerialize: serialize_openid4vci_CreateCredentialSuccessResponseRequest,
    requestDeserialize: deserialize_openid4vci_CreateCredentialSuccessResponseRequest,
    responseSerialize: serialize_openid4vci_CreateCredentialSuccessResponseResponse,
    responseDeserialize: deserialize_openid4vci_CreateCredentialSuccessResponseResponse,
  },
};

exports.CredentialIssuerServiceClient = grpc.makeGenericClientConstructor(CredentialIssuerServiceService);
