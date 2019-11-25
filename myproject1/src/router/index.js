import Vue from 'vue'
import Router from 'vue-router'
import NewContact from '@/components/NewContact'
import NewContact2 from '@/components/NewContact2'
import login from '@/login/login'

import db from '../utils/localstorage'

import {Message} from 'element-ui'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      // path相当于URL地址
      path: '/newcontact',
      name: 'NewContact',
      component: NewContact
    },
    {
      path: '/newContact2',
      name: 'N2',
      component: NewContact2
    },
    {
      path: '/views/views1',
      component: () => import('@/views/views1')
    },
    {
      path: '/customer/customer',
      component: () => import('@/login/customer/customer')
    },
    {
      path: '/form/forms',
      component: () => import('@/form/forms')
    },
		{
			path:'/main',
			component:()=>import('@/form/main'),
			  redirect:'/welcome',
			  children:[
				{path:'/welcome',component:()=>import ('@/views/welcome')}
				]
		}
  ]
})

// 白名单 放行
const whiteList = [
  '/login',
  '/views/views1'
]
// 挂载路由导航器
router.beforeEach((to, from, next) => {
  // to 要去的路径
  // from 从哪个路径来
  // next放行
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    let token = db.get('tokens')
    // let user = db.get('USER')
    // eslint-disable-next-line eqeqeq
    if (token.length) {
      // console.log('导航：' + token.length)
      next()
    } else {
      Message({
        message: '账号已过期！请先登录！',
        type: 'warning'
      })
      // console.log('请先登录')
      // 本来就是登录界面，就不用更改
      if (from.path === '/login') {
        // 先结束路由进度
        // NProgress.done()
        return
      }
      next('/login')
    }
  }
})
export default router
