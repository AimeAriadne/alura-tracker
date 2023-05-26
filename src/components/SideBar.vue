<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar',
  emits: [ 'DarkModeToggle' ],
  data() {
    return {
      darkModeOn: false,
    }
  },
  computed: {
    darkModeIcon(): string {
      if (this.darkModeOn) {
        return 'fas fa-sun'
      }
      return 'fas fa-moon'
    }
  },
  methods: {
    toggleDarkMode(): void {
      this.darkModeOn = !this.darkModeOn
      this.$emit('DarkModeToggle', this.darkModeOn)
    }
  }
})
</script>

<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Alura Tracker">
    </h1>
    <button 
      class="button is-link is-outlined"
      @click="toggleDarkMode"
    >
      <i :class="darkModeIcon"></i>
    </button>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
  background: #faf0ca;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>