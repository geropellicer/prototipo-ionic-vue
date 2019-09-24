import Vue from 'vue'


import { IonicVueRouter } from '@ionic/vue';


Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/scroll'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/notificaciones',
      name: 'notificaciones',
      component: () => import(/* webpackChunkName: "about" */ './views/Notificaciones.vue')
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: () => import(/* webpackChunkName: "about" */ './views/Scroll.vue')
    },
  ],
  direction: 1,
	viewCount: 0
})
