import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/globa.less'
import { showMessage } from '@/utils'
import '@/api/Mock'

Vue.prototype.$showMessage = showMessage;

new Vue({
  render: h => h(App)
}).$mount('#app')
