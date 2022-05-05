import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/home',
    component: () => import('@/page/Home'),
    children: [
      { 
        path: '/home',
        name: 'HomePage',
        component: () => import('@/page/HomePage')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
