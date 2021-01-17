import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Notfound from '../views/Notfound.vue'
import User from '../views/User.vue'

import UserListPage from '../views/UserList.vue'
import UserEdit from '../views/UserEdit.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: UserListPage
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
  },
  {
    path: '/user_edit/:id',
    name: 'UserEdit',
    component: UserEdit,
  },
  {
    path: '*',
    name: 'notFound',
    component: Notfound,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
