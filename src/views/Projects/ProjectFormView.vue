<script lang="ts">
import { defineComponent } from 'vue'
import { useProjectStore } from '@/stores/projectStore'
import { useNotificationStore } from '@/stores/notificationStore'
import { notifyType } from '@/interfaces/INotify'

export default defineComponent({
  name: 'ProjectFormView',
  props: {
    id: {
      type: String,
    }
  },
  mounted() {
    if(this.id) {
      const projectFound = this.projectStore.projects.find(project => project.id === this.id)
      this.projectName = projectFound?.name || ''
    }
  },
  data() {
    return {
      projectName: '',
    }
  }, 
  methods: {
    saveProject(): void {
      if(this.id) {
        this.projectStore.editProject({
          id: this.id,
          name: this.projectName
        })
      } else {
        this.projectStore.addProject(this.projectName)
      }
      this.notificationStore.notify({
        title: 'Project Alert',
        text: `Your project ${this.projectName} was successfully ${this.id ? 'edited' : 'added'}`,
        type: notifyType.SUCCESS,
        id: new Date().getTime()
      })
      this.projectName = ''
      this.$router.push('/projects')
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
  <section>
    <form @submit.prevent="saveProject">
      <div class="field">
        <label 
          for="project" 
          class="label"
        >
          Project Name
        </label>

        <input 
          type="text" 
          name="project" 
          id="project" 
          class="input"
          v-model="projectName"
        >
        
        <div class="field">
          <button 
            class="button"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </section>
</template>
