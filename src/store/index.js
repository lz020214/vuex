// 创建仓库
import Vue from 'vue'
import Vuex from 'vuex'
// 将 Vuex 注册到 Vue 中，以便在组件中使用 Vuex 的功能
Vue.use(Vuex)

// 创建一个 Vuex 存储对象（即仓库）
const store = new Vuex.Store({
    // 定义了状态数据
  state: {
    // 是一个初始值为 0 的计数器
    count: 0
  },
//   定义了变更状态的方法
  mutations: {
    // 这里的 increment 方法用于将计数器加 1
    increment (state) {
      state.count++
    }
  }
})

export default store