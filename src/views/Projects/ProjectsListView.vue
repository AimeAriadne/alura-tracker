<script lang="ts">
import { defineComponent } from 'vue'
import { useProjectStore } from '@/stores/projectStore'

export default defineComponent({
  name: 'ProjectsListView',
  mounted() {
    const projectList = localStorage.getItem('project-list')
    if (projectList) {
      this.projectStore.projects = JSON.parse(projectList)
    }
  },
  methods: {
    removeProject(projectId: string): void {
      this.projectStore.deleteProject(projectId)
    }
  },
  setup() {
    const projectStore = useProjectStore()
    
    return {
      projectStore
    }
  }
})
</script>

<template>
  <section>
    <RouterLink 
      to="/projects/new" 
      class="button"
    >
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>

      <span>New project</span>
    </RouterLink>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>id</th>

          <th>Name</th>

          <th>Edit</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="project in projectStore.projects"
          :key="project.id"
        >
          <td>{{ project.id }}</td>

          <td>{{ project.name }}</td>

          <td>
            <RouterLink 
              :to="`/projects/${project.id}`" 
              class="button"
            >
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </RouterLink>

            <button 
              class="button ml-2 is-danger"
              @click="removeProject(project.id)"
            >
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
