export const IS_CONNECTED = 'isConnected'
export const UPDATE_USER_ACTION = 'updateUser'

const UPDATE_FIREBASE_USER_MUTATION = 'updateFirebaseUser'
const RESET_USER_MUTATION = 'resetUser'

export default function store() {
  return {
    state: {
      uid: undefined,
      user: undefined,
      roles: {},
    },
    mutations: {
      [UPDATE_FIREBASE_USER_MUTATION](state, uid) {
        state.uid = uid
      },
      [RESET_USER_MUTATION](state) {
        state.uid = null
        state.user = null
        state.roles = {}
      },
    },
    actions: {
      async [UPDATE_USER_ACTION]({ commit }, user) {
        if (user) {
          commit(UPDATE_FIREBASE_USER_MUTATION, user.uid)
        } else {
          commit(RESET_USER_MUTATION)
        }
      },
    },
    getters: {
      [IS_CONNECTED](state) {
        return Boolean(state.uid)
      },
    },
  }
}
