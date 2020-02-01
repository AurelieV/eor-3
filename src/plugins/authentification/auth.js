import * as Oidc from 'oidc-client'
import axios from 'axios'

export default function authFactory(firebaseAuth, openIdSettings) {
  return {
    async logout() {
      await firebaseAuth.signOut()
    },

    loginWithJudgeApps() {
      const client = new Oidc.UserManager(openIdSettings)
      client.signinRedirect()
    },

    async processJudgeAppsToken(code) {
      const { data } = await axios.post('/api/authenticate', { code })
      await firebaseAuth.signInWithCustomToken(data.token)
    },
  }
}
