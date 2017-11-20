import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import cart from '@/views/cart'
import Address from '@/views/Address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path:'/GoodsList',
      name:'GoodsList',
      component: GoodsList
    },
    {
      path:'/cart',
      name:'cart',
      component:cart
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    }

  ]
})
