<template>
  <div class="project" :class="show">
    <div class="inner">
      <a :href="project.link" target="_blank">
      <picture v-if="project.img">
        <source
            type="image/webp"
            :srcset="`${project.img}.webp, ${project.img}@2x.webp 2x`">

        <img loading="lazy" width="300" height="200"
             :alt="project.title"
             :srcset="`${project.img}.jpg, ${project.img}@2x.jpg 2x`">
      </picture>
      </a>
      <div class="project-content">
        <h2>{{ project.title }}</h2>
        <div v-html="project.description"></div>
        <a v-if="project.link" class="show-project button small" :href="project.link" target="_blank">zum Projekt</a>
        <div v-if="project.badges.length" class="badges">
          <template v-for="badge in project.badges" :key="badge">
            <Badge @click="$emit('filter', badge)" :text="badge" :css-class="`${badge} cursor-pointer`"/>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '@/components/Badge.vue';

const props = defineProps({
  show: String,
  project: Object,
});

defineEmits(['filter']);

props.project?.badges.sort()

</script>