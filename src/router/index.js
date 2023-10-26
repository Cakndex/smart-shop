import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout'
import login from '@/views/login'
import pay from '@/views/pay'
import myorder from '@/views/myorder'
import prodetail from '@/views/prodetail'
import search from '@/views/search'
import searchlist from '@/views/search/list'
import cart from '@/views/layout/cart'
import category from '@/views/layout/category'
import home from '@/views/layout/home'
import user from '@/views/layout/user'
import store from '@/store'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '/cart',
          component: cart
        },
        {
          path: '/category',
          component: category
        },
        {
          path: '/home',
          component: home
        },
        {
          path: '/user',
          component: user
        }
      ],
      redirect: '/home'
    },
    {
      path: '/pay',
      component: pay
    },
    {
      path: '/myorder',
      component: myorder
    },
    {
      path: '/prodetail/:id',
      component: prodetail
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/searchlist',
      component: searchlist
    }
  ]
})

const authUrl = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (!authUrl.includes(to.path)) {
    next()
    return
  }

  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
