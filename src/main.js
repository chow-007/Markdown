// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
import $ from 'jquery'
import Vuex from 'vuex'   // 1. 导入
Vue.use(Vuex);           // 2. 使用Vuex
const store = new Vuex.Store({      // 3. 实例化一个store仓库(一个应用有且只有一个仓库)
  state: {     // 数据属性
    allNotes: [],
    note: {
      id: '',
      title: '',
      date: '',
      content: '',
      markdown: ''
    }
  },
  getters: {
    getAllNotes: function (state) {
      console.log(7777);
      console.log(state.allNotes, typeof (state.allNotes));
      console.log(88888);
      return state.allNotes
    }
  },
  mutations: {   // (同步)修改状态唯一的方法就是提交mutations
    // 展示数据
    GETNOTES: function (state, data) {
      state.allNotes = data
    },
    // 添加数据(把更新后的数据再发送回来)
    ADDONENOTE: function (state, data) {
      state.allNotes = data
    },
    SELECTCURRENTNOTE: function (state, note) {
      state.note = note
    },
    // 删除数据
    DELETENOTE: function (state, note) {
      // state.note.delete
    }
  },
  // 添加这一步目的: 实现异步操作
  actions: {   // (异步)通过commit触发mutations,mutations再去修改数据状态
    // 展示数据列表
    getNotes: function (context) {
      $.ajax({
        url:'http://127.0.0.1:8000/comments/',
        success:function (data) {
          console.log(1111111111);
          console.log(data);
          console.log(2222222222);
          context.commit('GETNOTES', data)
        }
      })
    },
    // 添加数据
    addOneNote: function (context, info) {
      // axios是发请求的,vue推荐使用这个插件发请求(类似ajax)
      $.ajax({
        url: 'http://127.0.0.1:7428/add/comments/',
        type: 'post',
        data: info,
        success: function (data) {
          // console.log(data);
          context.commit('ADDONENOTE', data)
        }

      })
    },
    selectCurrentNote: function (context, note) {
      context.commit('SELECTCURRENTNOTE', note)
    },
    // 删除数据
    deleteNote: function (context, note) {
      context.commit('DELETENOTE', note)
    }
  }
});
new Vue({
  el: '#app',
  router,
  store,              // 4. 挂载到根实例下
  components: {App},
  template: '<App/>'
})
