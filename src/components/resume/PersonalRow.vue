<template>
  <div class="resume-personal-row">
    <div class="resume-personal-title">{{ title }}</div>
    <div v-if="!$slots.default" class="resume-personal-value">
      {{ value }}
    </div>
    <div v-if="$slots.default" class="resume-personal-value">
      <slot></slot>
    </div>
  </div>
</template>


<script setup lang="ts">

defineProps({
  title: String,
  value: String,
})

</script>