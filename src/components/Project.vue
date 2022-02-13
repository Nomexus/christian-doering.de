<template>
  <div class="project" :class="show">
    <div class="inner">
      <picture v-if="project.img">
        <source
            type="image/webp"
            :srcset="`${project.img}.webp, ${project.img}@2x.webp 2x`">

        <img loading="lazy" width="300" height="200"
             :alt="project.title"
             :srcset="`${project.img}.jpg, ${project.img}@2x.jpg 2x`">
      </picture>
      <div class="project-content">
        <h2>{{ project.title }}</h2>
        <div v-html="project.description"></div>
        <a v-if="project.link" class="show-project" :href="project.link" target="_blank">Projekt ansehen</a>
        <div v-if="project.badges.length" class="badges">
          <template v-for="badge in project.badges" :key="badge">
            <Badge @click="parentFilter(badge)" :text="badge" :css-class="`${badge} cursor-pointer`"/>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '@/components/Badge.vue';
import {getCurrentInstance} from "vue";

const props = defineProps({
  // ToDo: use typescript properly
  show: String,
  project: Object,
});

props.project?.badges.sort()

const instance = getCurrentInstance();

function parentFilter(badge: String) {
  if(
      instance !== null &&
      // @ts-ignore
      typeof instance.ctx?.$parent?.filter !== "undefined"

  ) {
    // @ts-ignore
    instance.ctx?.$parent?.filter(badge)
  }
}

</script>