<script lang="ts">
import { defineComponent } from 'vue'
import StopwatchLog from './StopwatchLog.vue'
import StopwatchBtn from './StopwatchBtn.vue'

export default defineComponent({
  name: 'StopwatchTimer',
  components: {
    StopwatchLog,
    StopwatchBtn,
  },
  emits: [ 'finishedTimer' ],
  data() {
    return {
      stopwatch: 0,
      timeInSecs: 0,
      stopwatchStarted: false,
    }
  },
  methods: {
    start(): void {
      this.stopwatchStarted = true
      this.stopwatch = setInterval(() => {
        this.timeInSecs++
      }, 1000)
    },
    finish(): void {
      this.stopwatchStarted = false
      clearInterval(this.stopwatch)
      this.$emit('finishedTimer', this.timeInSecs)
      this.timeInSecs = 0
    }
  },
})
</script>

<template>
  <div class="is-flex is-align-items-center is-justify-content-space-evenly">
    <StopwatchLog :time-in-secs="timeInSecs"/>
   
    <StopwatchBtn
      icon-btn="fas fa-play"
      label="play"
      :disabled="stopwatchStarted"
      @press-btn="start"
    />

    <StopwatchBtn
      icon-btn="fas fa-stop"
      label="stop"
      :disabled="!stopwatchStarted"
      @press-btn="finish"
    />
  </div>  
</template>