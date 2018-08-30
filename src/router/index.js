import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import goods from '@/components/goods'
import comments from '@/components/comments'
import sellers from '@/components/sellers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/goods',
          name: 'goods',
          component: goods
        },
        {
          path: '/comments',
          name: 'comments',
          component: comments
        },
        {
          path: '/sellers',
          name: 'sellers',
          component: sellers
        }
      ]
    }
  ]
})
