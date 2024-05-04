<template>
<div>
  <!-- 调用仓库里面的状态数据count -->
  {{ this.$store.state.count }}
  <button @click="add">+1</button>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
    add(){
      // 通过提交到仓库里面进行+1操作
      this.$store.commit("increment")
    }
  }
}
</script>

