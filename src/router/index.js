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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
