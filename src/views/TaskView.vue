<script lang="ts">
import { defineComponent } from 'vue'
import AppForm from '@/components/AppForm.vue';
import TaskModel from '@/components/TaskModel.vue'
import TaskBox from '@/components/TaskBox.vue';
import type ITask from '@/interfaces/ITask'

export default defineComponent({
  name: 'TaskView',
  components: {
    AppForm,
    TaskModel,
    TaskBox
},
  data() {
    return {
      tasks: [] as ITask[],
    }
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0
    }
  },
  methods: {
    getList(): ITask[] {
      const taskList = localStorage.getItem('task-list')
      if (taskList) {
        this.tasks = JSON.parse(taskList)
      }
      return this.tasks
    },
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
    <AppForm @save-task="addTask"/>

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