<template>
  <div class="resume-default-row">
    <div v-if="!dateAsHeadline && date" class="resume-default-row-left">
      <span>{{ date }}</span>
    </div>
    <h3 v-if="dateAsHeadline && date" class="resume-default-row-left">
      <span>{{ date }}</span>
    </h3>
    <div class="resume-default-row-right">
      <h3 v-if="!dateAsHeadline && title" class="resume-default-title">{{ title }}</h3>
      <span v-if="where" class="resume-default-where">{{ where }}</span>
      <div v-if="$slots.default" class="resume-default-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

defineProps({
  date: String,
  title: String,
  where: String,
  content: String,
  dateAsHeadline: {
    type: Boolean,
    default: false
  }
})

</script>