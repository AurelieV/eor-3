import Vue from 'vue'
import App from './App.vue'

// Configuration
import { openIdSettings } from '@/../config/judgeapps.config'

// Services
import { firebaseAuth } from '@/services/firebase'
import router from '@/router'
import store from '@/store'

// Plugins
import auth from './plugins/authentification'
Vue.use(auth, {
  store,
  firebaseAuth,
  openIdSettings,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
