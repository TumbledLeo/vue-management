import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import inde from '@/components/index'
import login from '@/components/login/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'inde',
      component: inde,
      meta: {
        requireAuth: true,
        keepAlive: true
      },
      children: []
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true,
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        needLogin: false,
        keepAlive: false
      }
    }
  ]
})
// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
    if (sessionStorage.getItem('userId')) { // 判断是否登录
      console.log('已经登录')
      next()
    } else { // 没登录则跳转到登录界面
      console.log('没登录则转到登录界面')
      next({
        path: '/login'
      })
    }
  } else {
    next()
    console.log('不需要登录权限')
  }
})
export default router
