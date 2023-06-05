
import type { INotify } from "@/interfaces/INotify"
import { defineStore } from "pinia"

export interface NotifyState {
  notifications: INotify[]
}

export const useNotificationStore = defineStore('notificationStore', {
  state: (): NotifyState => ({
    notifications: []
  }),
  actions: {
    notify(notification : INotify) {
      this.notifications.push(notification)
      setTimeout(() => {
        this.notifications = this.notifications.filter(item => item.id !== notification.id)
      }, 3000)
    }
  }
})