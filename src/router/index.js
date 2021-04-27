import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/router'
import { titleContoller } from '@/utils'
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history',
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleContoller.setRouterTitle(to.meta.title)
  }
})

export default router
