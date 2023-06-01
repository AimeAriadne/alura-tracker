<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'SideBar',
  components: {
    RouterLink,
  },
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
    <nav class="mt-5">
      <ul>
        <li>
          <RouterLink 
            class="link"
            to="/"
          >
            <i class="fas fa-tasks"></i>
            Tasks
          </RouterLink>
        </li>
        <li>
          <RouterLink 
            class="link"
            to="/projects"
          >
            <i class="fas fa-project-diagram"></i>
            Projects
          </RouterLink>
        </li>
      </ul>
    </nav>
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
nav li {
  margin: 0.5rem 0;
}
.link {
  color: #485fc7;
}
.link.router-link-active {
    color: #2b2d42 ;
}
.link:hover {
  color: #fcc34f;
}
</style>