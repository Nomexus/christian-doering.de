<template>
  <span :class="'badge ' + 'badge-' + props.cssClass">
    {{ props.text }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  cssClass: String,
});
</script>
