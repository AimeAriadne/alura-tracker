
import type ITask from "@/interfaces/ITask"
import { defineStore } from "pinia"

export interface TasksState {
  tasks: ITask[],
}

export const useTaskStore = defineStore('taskStore', {
  state: (): TasksState => ({
    tasks: []
  }),
  actions: {
    addTask(task: ITask): void {
      this.tasks.push(task)
    },
    deleteTask(task: ITask) {
      const foundItem = this.tasks.findIndex(item => item === task) 
      this.tasks.splice(foundItem, 1)
    }
  }
})
