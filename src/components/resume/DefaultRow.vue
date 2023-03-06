<template>
  <div class="resume-default-row">
    <div class="resume-default-row-right">
      <h3
        v-if="!dateAsHeadline && title"
        class="resume-default-title"
        v-html="title" />
      <div v-if="$slots.default" class="resume-default-content">
        <slot></slot>
      </div>
    </div>
    <div v-if="!dateAsHeadline && date" class="resume-default-row-left">
      <span class="resume-time">{{ date }}</span>
      <span class="resume-employer">{{ where }}</span>
    </div>
    <h3 v-if="dateAsHeadline && date" class="resume-default-row-left">
      <span class="resume-time">{{ date }}</span>
      <span class="resume-employer">{{ where }}</span>
    </h3>
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
    default: false,
  },
});
</script>
