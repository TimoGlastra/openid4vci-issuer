import { ChannelCredentials } from '@grpc/grpc-js'
import { CredentialIssuerServiceClient } from '../generated/credential_issuer_grpc_pb'
import { AccessTokenServiceClient } from '../generated/access_token_grpc_pb'
import { CreateCredentialOfferRequest, CreateCredentialOfferResponse } from '../generated/credential_issuer_pb'

const url = '0.0.0.0:50051'
const credentials = ChannelCredentials.createInsecure()

const credentialIssuer = new CredentialIssuerServiceClient(url, credentials)
const accessToken = new AccessTokenServiceClient(url, credentials)

type Callback<Res> = (error: unknown, response: Res) => void
type GrpcMethod<Req, Res> = (request: Req, callback: Callback<Res>) => unknown
type PromiseGrpcMethod<Req, Res> = (request: Req) => Promise<Res>

function promisifyGrpc<Req, Res>(method: GrpcMethod<Req, Res>): PromiseGrpcMethod<Req, Res> {
  return (request: Req) =>
    new Promise((resolve, reject) => {
      method(request, (error, response) => (error ? reject(error) : resolve(response)))
    })
}

const client = {
  credentialIssuer: {
    createCredentialOffer: (request: CreateCredentialOfferRequest) =>
      new Promise<CreateCredentialOfferResponse>((resolve, reject) =>
        credentialIssuer.createCredentialOffer(request, (error, response) => {
          console.error('error is', error)

          return error ? reject(error) : resolve(response)
        })
      ),
  },
}

export { CreateCredentialOfferRequest }

export { client }
