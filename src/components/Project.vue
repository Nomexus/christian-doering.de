<template>
  <div class="project" :class="show">
    <div class="inner">
      <img width="300" height="200" src="https://via.placeholder.com/300x200" alt=""
           title="">
      <div class="project-content">
        <h2>{{ title }}</h2>
        <slot></slot>
        <a v-if="link" class="show-project" :href="link" target="_blank">Projekt ansehen</a>
        <div v-if="badges.length" class="badges">
          <template v-for="badge in badges" :key="badge">
            <Badge :text="badge" :css-class="badge"/>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '@/components/Badge.vue';

const props = defineProps({
  title: String,
  badges: {
    type: Object,
    default: []
  },
  show: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: null
  },
});

props.badges.sort()

</script>