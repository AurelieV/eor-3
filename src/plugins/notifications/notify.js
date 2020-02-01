import { PUSH_NOTIFICATION_ACTION, REMOVE_NOTIFICATION_MUTATION } from './store'

export default function notifyFactory({ store }) {
  return {
    error(message) {
      return store.dispatch(PUSH_NOTIFICATION_ACTION, { type: 'error', message })
    },
    info(message) {
      return store.dispatch(PUSH_NOTIFICATION_ACTION, { type: 'info', message })
    },
    success(message) {
      return store.dispatch(PUSH_NOTIFICATION_ACTION, { type: 'success', message })
    },
    dimiss(notificationId) {
      return store.commit(REMOVE_NOTIFICATION_MUTATION, notificationId)
    },
  }
}
