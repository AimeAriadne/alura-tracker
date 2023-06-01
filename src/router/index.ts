import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import TaskView from '@/views/TaskView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectFormView from '@/views/Projects/ProjectFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: TaskView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView
    },
    {
      path: '/projects/new',
      name: 'New Project',
      component: ProjectFormView
    },
    {
      path: '/projects/:id',
      name: 'Edit Project',
      component: ProjectFormView,
      props: true
    },
  ] as RouteRecordRaw[]
})

export default router
