import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AboutUs from '@/components/AboutUs'
import UserPolicy from '@/components/UserPolicy'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/UserPolicy',
      name: 'UserPolicy',
      component: UserPolicy
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
