<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/SideBar.vue'
import AppForm from '@/components/AppForm.vue';
import TaskModel from '@/components/TaskModel.vue'
import type ITask from '@/interfaces/ITask'
import TaskBox from '@/components/TaskBox.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    SideBar,
    AppForm,
    TaskModel,
    TaskBox
},
  data() {
    return {
      tasks: [] as ITask[],
      darkModeOn: false 
    }
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0
    }
  },
  methods: {
    saveTask(task: ITask): void {
      this.tasks.push(task)
    },
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
      <AppForm @save-task="saveTask"/>

      <div class="task-list">
        <TaskBox v-if="emptyList">
          No tasks added yet
        </TaskBox>
        
        <TaskModel 
          v-for="(task, index) in tasks" 
          :key="index"
          :task-done="task"
        />
      </div>
    </div> 
  </main>
</template>

<style>
.task-list {
  padding: 1.25rem;
}
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