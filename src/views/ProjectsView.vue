<script lang="ts">
import { defineComponent } from 'vue'
import { useProjectStore } from '@/stores/projectStore'

export default defineComponent({
  name: 'ProjectsView',
  data() {
    return {
      projectName: '',
    }
  }, 
  methods: {
    saveProject(): void {
      this.projectStore.addProject(this.projectName)
      this.projectName = ''
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
  <section class="projects">
    <h1 class="title">Projects</h1>
    <form @submit.prevent="saveProject">
      <div class="field">
        <label 
          for="project" 
          class="label"
        >
          Project Name
        </label>
        <input 
          type="text" 
          name="project" 
          id="project" 
          class="input"
          v-model="projectName"
        >
        <div class="field">
          <button 
            class="button"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="project in projectStore.projects"
          :key="project.id"
        >
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
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