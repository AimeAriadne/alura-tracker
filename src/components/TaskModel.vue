<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import StopwatchLog from './StopwatchLog.vue'
import type ITask from '@/interfaces/ITask'
import TaskBox from './TaskBox.vue'


export default defineComponent({
  name: 'TaskModel',
  components: {
    StopwatchLog,
    TaskBox,
  },
  props: {
    taskDone: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
})

</script>

<template>
  <TaskBox>
    <div class="columns is-align-items-center">
      <div class="column is-half">
        {{ taskDone.description || 'Empty Task' }}
      </div>

      <div class="column">
        {{ taskDone.project.name || 'Empty Project' }}
      </div>

      <div class="column">
        <StopwatchLog 
          :time-in-secs="taskDone.timeInSecs"
          time-color="#4A4A4A"  
        />
      </div>

      <button 
        class="button ml-2 is-danger"
        @click="$emit('removeTask')"
      >
        <span class="icon is-small">
          <i class="fas fa-trash"></i>
        </span>
      </button>
    </div>
  </TaskBox>
</template>
