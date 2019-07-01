import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Landing from './views/Landing.vue'
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Profile from './components/ProfileSetting.vue'
import Wishlist from './components/WishList.vue'
import Topup from './components/TopUp.vue'
import ProductDetails from './components/productDetails.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/landing',
      name: 'landing',
      component: Landing
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children : [
        {
          path: '/products',
          name: 'products',
          component: Products
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        },
        {
          path: '/wishlist',
          name: 'wishlist',
          component: Wishlist
        },
        {
          path: '/topup',
          name: 'topup',
          component: Topup
        },
        {
          path: '/products/:productId',
          name: 'productDetails',
          component: ProductDetails
        }
      ]
    }
  ]
})