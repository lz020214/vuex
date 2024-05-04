<template>
<div>
  <!-- 调用仓库里面的状态数据count -->
  <!-- {{ this.$store.state.count }} -->
  {{ count }}
  <button @click="add">+1</button>
</div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  // 通过计算属性直接获得值，不必写的过于麻烦
  // computed:{
  //   count(){
  //     return this.$store.state.count
  //   }
  // },

  // 更加简便的方法
  computed:mapState([
    'count',
  ]),

  methods:{
    add(){
      // 通过提交到仓库里面进行+1操作
      this.$store.commit("increment")
    }
  }
}
</script>

