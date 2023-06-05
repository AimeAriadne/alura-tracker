<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import NotifyModel from './components/NotifyModel.vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    SideBar,
    NotifyModel,
  },
  data() {
    return {
      darkModeOn: false,
    }
  },
  methods: {
    toggleDarkMode(darkMode: boolean): void {
      this.darkModeOn = darkMode
    }
  }
})
</script>

<template>
  <main 
    class="columns is-gapless is-multiline"
    :class="{ 'dark-mode': darkModeOn }"
  >
    <div class="column is-one-fifth">
      <SideBar @dark-mode-toggle="toggleDarkMode"/>
    </div>

    <div class="column app-content">
      <NotifyModel/>

      <RouterView/>
    </div> 
  </main>
</template>

<style>
main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}
.app-content {
  background-color: var(--bg-primary);
}
</style>