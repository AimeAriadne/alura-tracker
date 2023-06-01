<script lang="ts">
import { defineComponent } from 'vue'
import { useProjectStore } from '@/stores/projectStore'

export default defineComponent({
  name: 'ProjectFormView',
  props: {
    id: {
      type: String,
    }
  },
  mounted() {
    if(this.id) {
      const projectFound = this.projectStore.projects.find(project => project.id === this.id)
      this.projectName = projectFound?.name || ''
    }
  },
  data() {
    return {
      projectName: '',
    }
  }, 
  methods: {
    saveProject(): void {
      if(this.id) {
        this.projectStore.editProject({
          id: this.id,
          name: this.projectName
        })
      } else {
        this.projectStore.addProject(this.projectName)
      }
      this.projectName = ''
      this.$router.push('/projects')
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
  </section>
</template>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>