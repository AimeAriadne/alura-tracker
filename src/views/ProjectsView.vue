<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'ProjectsView',
  components: {
    RouterView,
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