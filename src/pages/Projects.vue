<template>
  <h1 class="text-center">{{ t("navbar.projects") }}</h1>

  <div class="tech-filter text-center">
    <!-- ToDo: filter function -->
    <Badge v-for="badge in allBadges" :key="badge" :type="badge"/>
  </div>

  <Project v-for="project in projects" :key="project.title" :title="project.title" :badges="project.badges">
    <div v-html="project.description"></div>
  </Project>
</template>

<script setup lang="ts">
import {useMeta} from "vue-meta";
import {useI18n} from "vue-i18n";
import Project from "../components/Project.vue";
import Badge from "../components/Badge.vue";

const {t} = useI18n()

useMeta({
  title: t("navbar.projects"),
})

const projects = [
  {
    title: "FarmParadies 2009 - 2018",
    badges: [
      "php",
      "mysql",
    ],
    description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
        "      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
        "      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
        "      consetetur sadipscing elitr, sed diam</p>"
  },
  {
    title: "FarmParadies 2022 - now",
    badges: [
      "vue",
      "symfony",
    ],
    description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
        "      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
        "      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
        "      consetetur sadipscing elitr, sed diam</p>"
  },
  {
    title: "Monumente Shop",
    badges: [
      "javascript",
      "symfony",
      "scss",
    ],
    description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
        "      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
        "      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
        "      consetetur sadipscing elitr, sed diam</p>"
  },
];

const allBadges: string[] = [];

projects.filter((project) => {
  project.badges.filter((badge) => {
    if (!allBadges.includes(badge)) {
      allBadges.push(badge)
    }
  })
});

</script>