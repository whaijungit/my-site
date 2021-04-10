import Vue from 'vue'

// 得到组件的dom元素
export default function (comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, { props })
  });
  vm.$mount();
  return vm.$el;
}