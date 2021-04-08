import Vue from 'vue'
import App from './App.vue'
// import '@/assets/styles/globa.less'
import axios from 'axios';
new Vue({
  render: h => h(App)
}).$mount('#app')

axios.get('/erp/role',).then(r=>{console.log(r)})