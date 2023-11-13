import { createRouter, createWebHistory } from 'vue-router'
import Landing from "@/views/Landing.vue";
import About from "@/views/About.vue";
import Impressum from "@/views/Impressum.vue";
import RoomsPage from '@/views/RoomsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/impressum',
      name: 'impressum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Impressum
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomsPage
    }
  ]
})

export default router
