import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheHome.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheFavorites.vue')
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheBasket.vue')
  },
  {
    path: '/product/:genre/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheProduct.vue')
  },
  {
    path: '/search/:search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheSearch.vue')
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheNotFound.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
