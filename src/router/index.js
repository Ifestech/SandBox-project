
import { createRouter, createWebHistory } from 'vue-router'
import Indexpage from '@/views/Indexpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Indexpage,
    }
  ],
})

export default router
