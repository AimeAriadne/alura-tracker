<script lang="ts">
import { defineComponent } from 'vue'
import { useProjectStore } from '@/stores/projectStore'

export default defineComponent({
  name: 'ProjectsView',
  setup() {
    const projectStore = useProjectStore()
    return {
      projectStore
    }
  }
})
</script>

<template>
  <section class="projects">
    <h1 class="title">Projects</h1>
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
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>