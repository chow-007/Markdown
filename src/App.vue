<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.png" alt="">
        </a>
      </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
              <router-link tag="li" :to="item.href"  v-for="(item,i) in urls" :key="i" @click.native="clickHandler(i)">
                <a>{{ item.name }}</a>
              </router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
          </ul>
        </div>
    </nav>
    <div class="container-fluid">
      <router-view/>
    </div>

  </div>
</template>

<script>
  // 直接导入,node_modules前面的路径已经提前配置好
  import 'bootstrap/dist/css/bootstrap.min.css'

  var $ = require('jquery');   // 效果等同:import
  //  import Note from '@/components/Note'

  export default {
    name: 'App',
    data() {
      return {
        urls: [
          {href: '/', name: '首页'},
          {href: '/note', name: '我的笔记'},
        ],
        current_i: 0
      }
    },
    methods: {
      clickHandler(i) {
        this.current_i = i
      }
    },
    mounted() {    // 当前组件加载完成后,才会执行这个函数
      console.log('当前组件加载完成了');
//      console.log($);
      this.$store.dispatch('getNotes');
    },

  }
</script>

<style scoped>

  img {
    width: 40px;
    height: 40px;
    margin-top: -10px;
  }
</style>
