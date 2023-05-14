# OpenID4VCI Issuer

This is a sample OpenID4VCI issuer based on [openid4vc-rs](https://github.com/sicpa-dlab/openid4vc-rs), and [Aries Framework JavaScript](https://github.com/hyperledger/aries-framework-javascript)

## Running

1. Make sure you have the openid4vci grpc server running.

```sh
git clone https://github.com/sicpa-dlab/openid4vc-rs
cargo build
./target/debug/server
```

1. Install the dependencies in this repo and start the server

```sh
yarn install
yarn start
```

3. Make a request (e.g. to create a credential offer)

```sh
curl -X POST http://localhost:3000/create-offer
```

## Updating the GRPC Client

1. Update the path in the `generate` script in the `package.json` file.
   - It currently assumes there's a parent directory called `openid4vci-rs` as a clone of the openid4vc-rs repository.
2. Run `yarn generate` to generate the client.

## Endpoints

### Well Known OpenID Credential Issuer Endpoints

`GET /.well-known/openid-configuration`

Hosts the OpenID4VCI Credential Issuer metadata on the specified well-known path.

### Create Credential Offer

`POST /create-offer`

Creates a credential offer.
