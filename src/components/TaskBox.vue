<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TaskBox'
})
</script>

<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<style scoped>
.box {
  background-color: #faf0ca;
}
</style>