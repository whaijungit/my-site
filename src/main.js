import Vue from 'vue'
import App from './App.vue'
import './assets/styles/globa.less'
import { showMessage, debounce } from './utils'
import router from './router'
import './api/Mock'
import VLoading from './directives/Loading'
import Vlazy from './directives/lazy'
import './eventBus'
Vue.prototype.$showMessage = showMessage;
Vue.directive('loading', VLoading)
Vue.directive('lazy', Vlazy)

const vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

window.vm = vm