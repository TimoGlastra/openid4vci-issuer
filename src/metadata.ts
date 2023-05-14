const issuerMetadata = {
  credential_issuer: 'http://localhost:3000',
  credential_endpoint: 'http://localhost:3000/issueCredential',
  credentials_supported: [
    // https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#section-e.1.3
    {
      format: 'ldp_vc',
      id: 'OpenBadgeCredential',
      cryptographic_binding_methods_supported: ['did:web'],
      cryptographic_suites_supported: ['Ed25519Signature2018'],
      '@context': [
        'https://www.w3.org/2018/credentials/v1',
        // FIXME: https://github.com/sicpa-dlab/openid4vc-rs/issues/43
        // {
        //   '@vocab': 'https://w3id.org/security/undefinedTerm#',
        // },
        'https://mattr.global/contexts/vc-extensions/v1',
        'https://purl.imsglobal.org/spec/ob/v3p0/context.json',
        'https://w3c-ccg.github.io/vc-status-rl-2020/contexts/vc-revocation-list-2020/v1.jsonld',
      ],
      types: ['VerifiableCredential', 'VerifiableCredentialExtension', 'OpenBadgeCredential'],
    },
  ],
} as const

export { issuerMetadata }
