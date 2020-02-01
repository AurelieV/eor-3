import authStore, { UPDATE_USER_ACTION } from './store'
import authFactory from './auth'

export default {
  install(Vue, options) {
    const { store, firebaseAuth, openIdSettings } = options
    store.registerModule('auth', authStore())
    Vue.prototype.$auth = authFactory(firebaseAuth, openIdSettings)

    firebaseAuth.onAuthStateChanged(user => {
      store.dispatch(UPDATE_USER_ACTION, user)
    })
  },
}
