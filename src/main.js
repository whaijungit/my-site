import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/globa.less'
import { showMessage } from '@/utils'
import router from '@/router'
import '@/api/Mock'
import VLoading from '@/directives/Loading'
Vue.prototype.$showMessage = showMessage;
Vue.directive('loading', VLoading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// // 接口测试

import * as blogApi from './api/Blog/blog'
// import * as blogApi from './api/Blog/banner'
// blogApi.getBanners().then(r => { console.log(r) })
blogApi.getBlog("12312").then(r => console.log(r))
blogApi.postComment({
  nickname: '123',
  content: '123',
  blogId: '123'
}).then(r => console.log(r))
// blogApi.getBlogTypes().then(r => { console.log("博客分类", r) })
// blogApi.getBlogs(2, 20, -1, 'nodejs').then(r => { console.log("博客列表数据", r) })

