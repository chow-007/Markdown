<template>
  <div class="index">
    <h2>笔记首页</h2>
    <button @click="toNote">我的笔记</button>
  </div>
</template>
<script>
  export default {
    name:'index',
    data(){
      return{
      }
    },
    methods:{
      toNote(){
        // 编程时导航
        this.$router.push({path:'/note'})
      }
    },
    computed:{
      indexmsg:function () {
        return this.$store.state.allNotes
      }
    },
  }
</script>
<style>

</style>
