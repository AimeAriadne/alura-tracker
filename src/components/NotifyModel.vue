<script lang="ts">
import { notifyType } from '@/interfaces/INotify';
import { useNotificationStore } from '@/stores/notificationStore';
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: "NotifyModel",
  data() {
    return {
      notificationContext: {
        [notifyType.INFO]: 'is-info',
        [notifyType.SUCCESS]: 'is-success',
        [notifyType.WARNING]: 'is-warning',
        [notifyType.DANGER]: 'is-danger'
      }
    }
  },
  setup() {
    const notificationStore = useNotificationStore()
    return {
      notifications: computed(() => notificationStore.notifications)
    }
  }
})
</script>

<template>
  <div class="notification">
    <article 
      class="message"
      v-for="notification in notifications"
      :key="notification.id"
      :class="notificationContext[notification.type]"
    >
      <div class="message-header">
        {{ notification.title }}
      </div>

      <div class="message-body">
        {{ notification.text }}
      </div>
    </article>
  </div>
</template>

<style scoped>
.notification {
  position: absolute;
  right: 0;
  width: 18rem;
  padding: 0;
  margin: 0.5rem;
  z-index: 1;
}
</style>