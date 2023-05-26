import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import TaskView from '@/views/TaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: TaskView
    },
  ] as RouteRecordRaw[]
})

export default router
