<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StopwatchLog',
  props: {
    timeInSecs: {
      type: Number,
      default: 0,
    },
    timeColor: { 
      type: String,
      default: 'var(--text-primary)'
    }
  },
  computed: {
    passedTime(): string {
      return new Date(this.timeInSecs * 1000).toISOString().substr(11, 8)
    }
  },
})

</script>

<template>
  <section>
    <strong :style="{ color: timeColor }">{{ passedTime }}</strong>
  </section>
</template>

<style>

</style>