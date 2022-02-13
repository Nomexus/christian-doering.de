<template>
  <div class="resume-default-row">
    <div v-if="!dateAsHeadline && date" class="resume-default-row-left">
      <span>{{ date }}</span>
      {{ where }}
    </div>
    <h3 v-if="dateAsHeadline && date" class="resume-default-row-left">
      <span>{{ date }}</span>
      {{ where }}
    </h3>
    <div class="resume-default-row-right">
      <h3 v-if="!dateAsHeadline && title" class="resume-default-title" v-html="title" />
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