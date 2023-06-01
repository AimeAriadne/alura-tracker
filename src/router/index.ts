import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import TaskView from '@/views/TaskView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: TaskView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
  ] as RouteRecordRaw[]
})

export default router
