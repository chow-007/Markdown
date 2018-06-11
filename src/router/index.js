import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'     // 导入组件
import Note from '@/components/Note'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/note',
      name: 'Note',
      component: Note
    }
  ]
})

// 下面这种方式的简写
// var router = Router({
//   routes: [
//     {},
//   ]
// });
// export default
