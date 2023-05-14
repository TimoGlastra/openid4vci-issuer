import { agent } from './agent'
import { app } from './app'

async function run() {
  await agent.initialize()
  app.listen(3000, () => {
    console.log('OpenID4VCI issuer listening on port 3000')
  })
}

run()
