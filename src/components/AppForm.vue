<script lang="ts">
import { defineComponent } from 'vue'
import StopwatchTimer from './StopwatchTimer.vue'

export default defineComponent({
  name: 'AppForm',
  components: {
    StopwatchTimer,
  },
  emits: [ 'saveTask' ],
  data() {
    return {
      taskDone: '',
    }
  },
  methods: {
    finishTask(time: number): void {
      this.$emit('saveTask', {
          timeInSecs: time,
          description: this.taskDone
      })
      this.taskDone = ''
    },
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
        class="input column is-6" 
        name="task"
        type="text" 
        placeholder="New Task"
        v-model="taskDone"
      />
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