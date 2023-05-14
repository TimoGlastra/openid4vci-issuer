import { AskarModule } from '@aries-framework/askar'
import { Agent } from '@aries-framework/core'
import { agentDependencies } from '@aries-framework/node'
import { ariesAskar } from '@hyperledger/aries-askar-nodejs'
import { logger } from './logger'

const agent = new Agent({
  config: {
    label: 'OpenID4VCI Issuer',
    walletConfig: {
      id: 'test',
      key: 'test',
    },
    logger,
  },
  dependencies: agentDependencies,
  modules: {
    askar: new AskarModule({
      ariesAskar,
    }),
  },
})

export { agent }
