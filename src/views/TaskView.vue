<script lang="ts">
import { defineComponent, watch } from 'vue'
import TaskForm from '@/components/TaskForm.vue'
import TaskModel from '@/components/TaskModel.vue'
import TaskBox from '@/components/TaskBox.vue'
import type ITask from '@/interfaces/ITask'
import { useTaskStore } from '@/stores/taskStore'

export default defineComponent({
  name: 'TaskView',
  components: {
    TaskForm,
    TaskModel,
    TaskBox
  },
  mounted() {
    const taskList = localStorage.getItem('task-list')
    if (taskList) {
      this.taskStore.tasks = JSON.parse(taskList)
    }
  },
  computed: {
    emptyList(): boolean {
      return this.taskStore.tasks.length === 0
    }
  },
  methods: {
    addTask(task: ITask): void {
      this.taskStore.addTask(task)
    },
    removeTask(task: ITask) {
      this.taskStore.deleteTask(task)
    },
  },
  setup() {
    const taskStore = useTaskStore()

    watch(taskStore.tasks, (newValue) => {
      if (newValue.length) {
        localStorage.setItem('task-list', JSON.stringify(newValue))
      } else {
        localStorage.removeItem('task-list')
      }
    })

    return {
      taskStore
    }
  }
})
</script>

<template>
  <div>
    <TaskForm @save-task="addTask"/>

    <div class="task-list">
      <TaskBox v-if="emptyList">
        No tasks added yet
      </TaskBox>
      
      <TaskModel 
        v-for="(task, index) in taskStore.tasks" 
        :key="index"
        :task-done="task"
        @remove-task="removeTask(task)"
      />
    </div>
  </div>
</template>

<style>
.task-list {
  padding: 1.25rem;
}
</style>