import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import AuDio from '../pages/AuDio/AuDio'
import Broadcast from '../pages/Broadcast/Broadcast'
import Group from '../pages/Group/Group'
import Mine from '../pages/Mine/Mine'
import Film from '../components/Film'
import Book from '../components/Book'
import TV from '../components/TV'
import City from '../components/City'
import Music from '../components/Music'
import Search from '../components/Search'
import Register from '../components/Register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/AuDio',
      name: 'AuDio',
      component: AuDio,
      children:[
        {path:'',component:Film},
        {path:'Film',component:Film},
        {path:'Book',component:Book},
        {path:'TV',component:TV},
        {path:'City',component:City},
        {path:'Music',component:Music},
      ]
    },
    {
      path: '/Broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
  ]
})
