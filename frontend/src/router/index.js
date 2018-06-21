import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Book from '@/components/Book'
import Test from '@/components/Test'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/book/:id',
      component: Book
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/admin',
      component: Admin
    }
  ]
})
