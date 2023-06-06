<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useProjectStore } from '@/stores/projectStore'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'ProjectsView',
  components: {
    RouterView,
  },
  setup() {
    const projectStore = useProjectStore()

    watch(projectStore.$state, (state) => {
      if (state.projects.length) {
        localStorage.setItem('project-list', JSON.stringify(state.projects))
      } else {
        localStorage.removeItem('project-list')
      }
    })
    return {
      projectStore
    }
  }
})

</script>

<template>
  <div class="projects">
    <h1 class="title">Projects</h1>
    
    <RouterView />
  </div>
</template>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>