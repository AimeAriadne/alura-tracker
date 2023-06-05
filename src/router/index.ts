import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import TaskView from '@/views/TaskView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectFormView from '@/views/Projects/ProjectFormView.vue'
import ProjectsListView from '@/views/Projects/ProjectsListView.vue'

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
      component: ProjectsView,
      children: [
        {
          path: '',
          name: 'Projects',
          component: ProjectsListView
        },
        {
          path: 'new',
          name: 'New Project',
          component: ProjectFormView
        },
        {
          path: ':id',
          name: 'Edit Project',
          component: ProjectFormView,
          props: true
        },
      ]
    }
  ] as RouteRecordRaw[]
})

export default router
