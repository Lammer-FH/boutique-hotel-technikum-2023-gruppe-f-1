import { createRouter, createWebHistory } from 'vue-router'
import Landing from "@/views/Landing.vue";
import About from "@/views/About.vue";
import Impressum from "@/views/Impressum.vue";
import RoomsPage from '@/views/RoomsPage.vue';
import BookingForm from "@/views/BookingForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/booking/:roomId',
      name: 'Booking',
      component: BookingForm,
      props: true
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
