<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StopwatchBtn',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    iconBtn: {
      type: String,
      default: ''
    }
  },
  emits: [ 'pressBtn' ]
})
</script>

<template>
  <button 
    class="button" 
    @click="$emit('pressBtn')"
    :disabled="disabled"
  >
    <span class="icon">
      <i :class="iconBtn"></i>
    </span>
    <span>{{ label }}</span>
  </button>
</template>