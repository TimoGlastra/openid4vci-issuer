import express from 'express'
import { client } from './openid4vci-client'
import { CreateCredentialOfferRequest } from '../generated/credential_issuer_pb'
import { issuerMetadata } from './metadata'
import crypto from 'node:crypto'
import { fromJson, getJson } from './util'

const app = express()

app.use(express.json())

app.get('/.well-known/openid-issuer', (_, res) => {
  return res.json(issuerMetadata)
})

app.post('/create-offer', async (req, res) => {
  try {
    const offerRequest = new CreateCredentialOfferRequest()
      .setPreAuthorizedCodeFlow(
        fromJson({
          'pre-authorized_code': crypto.randomBytes(32).toString('hex'),
        })
      )
      .setIssuerMetadata(fromJson(issuerMetadata))
      .setCredentials(fromJson([issuerMetadata.credentials_supported[0].id]))

    const response = await client.credentialIssuer.createCredentialOffer(offerRequest)

    const { success, error } = response.toObject()

    if (!success || error) throw new Error(`Error creating offer ${JSON.stringify(error)}`)

    return {
      credentialOffer: getJson(success.credentialOffer),
      credentialOfferUrl: success.credentialOfferUrl,
    }
  } catch (error: any) {
    console.error(error)
    return res.status(500).json({ message: error.message, stack: error.stack })
  }
})

app.use((err: any, _: any, res: any, __: any) => {
  console.error(err.stack)
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
})

export { app }
