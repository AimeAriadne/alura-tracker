<script lang="ts">
import { defineComponent } from 'vue'
import StopwatchTimer from './StopwatchTimer.vue'
import { useProjectStore } from '@/stores/projectStore'
import { useNotificationStore } from '@/stores/notificationStore'
import { notifyType } from '@/interfaces/INotify'

export default defineComponent({
  name: 'TaskForm',
  components: {
    StopwatchTimer,
  },
  emits: [ 'saveTask' ],
  data() {
    return {
      taskDone: '',
      projectId: ''
    }
  },
  methods: {
    finishTask(time: number): void {
      const project = this.projectStore.projects.find(project => project.id === this.projectId)
      if (!project) {
        this.notificationStore.notify({
          title: 'Project Alert',
          text: `Oops! You need to choose a project`,
          type: notifyType.DANGER,
          id: new Date().getTime()
        })
        return
      }
      this.$emit('saveTask', {
          timeInSecs: time,
          description: this.taskDone,
          project
      })
      this.taskDone = ''
      this.projectId = ''
    }
  },
  setup() {
    const projectStore = useProjectStore() 
    const notificationStore = useNotificationStore()
    return {
      projectStore,
      notificationStore
    }
  }
})
</script>

<template>
  <div class="box app-form">
    <form 
      class="columns is-vcentered"
      role="form"
      aria-label="Create new task form"
    >  
      <input
        class="input column is-5" 
        name="task"
        type="text" 
        placeholder="New Task"
        v-model="taskDone"
      />

      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Select a project</option>
            
            <option
              v-for="project in projectStore.projects"
              :value="project.id"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      
      <div class="column">
        <StopwatchTimer @finished-timer="finishTask"/>
      </div>
    </form>
  </div>
</template>

<style>
.app-form {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
</style>