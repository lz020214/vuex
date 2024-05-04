import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 将从 './store' 导入的 store 对象赋值给 Vue 实例的 store 属性
  // 这样，在组件中就可以通过 this.$store 来访问和使用这个存储对象中的状态和相关的操作方法，
  // 实现了状态管理的功能。
  store:store
}).$mount('#app')
