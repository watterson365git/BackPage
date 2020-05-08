import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/addarticle',
    name: 'addarticle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/addarticle')
  },
  {
    path: '/addhtml',
    name: 'addhtml',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/addhtml')
  },

  // {
  //   path: '/manage_user',
  //   name: 'manage_user',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/manage_user')
  // },

]

const router = new VueRouter({
  mode:"hash",
  base:process.env.BABEL_URL,
  routes
})

export default router
