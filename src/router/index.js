import { createRouter, createWebHistory } from 'vue-router'
import Landing from "@/components/Landing.vue";
import About from "@/components/About.vue";
import Impressum from "@/components/Impressum.vue";

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
    }
  ]
})

export default router
