<template>
  <div class="project">
    <img width="300" height="200" src="https://via.placeholder.com/400x300" alt=""
         title="">
    <div class="project-content">
      <h2>{{ title }}</h2>
      <slot></slot>
      <div v-if="badges.length" class="badges">
        <template v-for="badge in badges" :key="badge">
          <Badge :type="badge" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '../components/Badge.vue';

const props = defineProps({
  title: String,
  badges: {
    type: Object,
    default: []
  }
});



</script>