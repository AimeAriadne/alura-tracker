<script lang="ts">
import { defineComponent } from 'vue'
import TaskForm from '@/components/TaskForm.vue'
import TaskModel from '@/components/TaskModel.vue'
import TaskBox from '@/components/TaskBox.vue'
import type ITask from '@/interfaces/ITask'

export default defineComponent({
  name: 'TaskView',
  components: {
    TaskForm,
    TaskModel,
    TaskBox
},
  data() {
    return {
      tasks: [] as ITask[],
    }
  },
  watch: {
    tasks() {
      const taskList = localStorage.getItem('task-list')
      if (taskList) {
        this.tasks = JSON.parse(taskList)
      }
    }
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0
    }
  },
  methods: {
    addTask(task: ITask): void {
      this.tasks.push(task)
      this.saveTasks()
    },
    saveTasks() {
      localStorage.setItem('task-list', JSON.stringify(this.tasks))
    },
    removeTask(task: ITask) {
      const foundItem = this.tasks.findIndex(taskItem => taskItem === task) 
      this.tasks.splice(foundItem, 1)
      this.saveTasks()
    },
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
        v-for="(task, index) in tasks" 
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