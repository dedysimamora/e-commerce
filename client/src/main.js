import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import VueSwal from 'vue-swal'
import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '950781414946-rtc042tvemni6gss0hqah9as2j9r85h7.apps.googleusercontent.com',
  scope: 'profile',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
 
Vue.use(VueSwal)

 
Vue.prototype.axios = axios.create({
  baseURL: `http://localhost:3210`
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
