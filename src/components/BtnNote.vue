<template>
  <!--<div class="btn-note">-->
    <button class="btn" :class="currentType" @click.stop='clickhandler'>
      <slot>按钮</slot>      <!-- 插槽 (按钮的文字位置)-->
    </button>
  <!--</div>-->
</template>
<script>
  export default {
    name:'BtnNote',
    data(){
      return{

      }
    },
    methods:{
      clickhandler(){
				this.$emit('click1')
			}
    },
    props:{
      type:String   // 从父组件传过来的值,来判断用哪种class标签属性(bootstrap)
    },
    computed:{
      currentType(){
        return{
          'btn-success': this.type==='success'?true:false,
          'btn-info': this.type==='info'?true:false,
          'btn-danger': this.type==='danger'?true:false,
        }
      }
    }
  }

</script>
<style></style>
