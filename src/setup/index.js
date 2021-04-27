import Vue from 'vue'
import '@/api/Mock'
import VLoading from '@/directives/Loading'
import Vlazy from '@/directives/lazy'
import '@/eventBus'
import "@/global";
import { showMessage } from '@/utils'
import '@/assets/styles/globa.less'

Vue.prototype.$showMessage = showMessage;
Vue.directive('loading', VLoading)
Vue.directive('lazy', Vlazy)
Vue.config.productionTip = false

export default Vue;