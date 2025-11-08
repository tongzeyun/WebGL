import {createRouter,createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'editor',
      component: Home,
    },
  ]
})
export default router