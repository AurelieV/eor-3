import Notifications from './Notifications'
import notifStore from './store'
import notifyFactory from './notify'

export default function install(Vue, { store }) {
  Vue.component('Notifications', Notifications)
  store.registerModule('notifications', notifStore())
  Vue.prototype.$notify = notifyFactory({ store })
}
