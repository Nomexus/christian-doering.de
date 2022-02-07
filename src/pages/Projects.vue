<template>
  <h1 class="text-center">{{ t("navbar.projects") }}</h1>

  <div class="tech-filter text-center">
    <!-- ToDo: active class -->
    <Badge @click="filter()"
           text="alle" css-class="all"/>
    <Badge @click="filter(badge)" v-for="badge in allBadges" :key="badge"
           :text="badge" :css-class="badge"/>
  </div>

  <Project v-for="project in shownProjects" :key="project.title"
           :show="project.show"
           :title="project.title"
           :badges="project.badges"
           :link="project.link">
    <div v-html="project.description"></div>
  </Project>
</template>

<script setup lang="ts">
import {useMeta} from "vue-meta";
import {useI18n} from "vue-i18n";
import Project from "@/components/Project.vue";
import Badge from "@/components/Badge.vue";
import {ref} from "vue";

const {t} = useI18n()

useMeta({
  title: t("navbar.projects"),
})

// ToDo: move projects to locales
const projects = [
  {
    link: null,
    show: true,
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
    link: null,
    show: true,
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
    link: "https://www.monumente-shop.de",
    show: true,
    title: "Monumente Shop",
    badges: [
      "javascript",
      "symfony",
      "shopware 5",
    ],
    description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
        "      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
        "      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
        "      consetetur sadipscing elitr, sed diam</p>"
  },
];

const allBadges: string[] = [];
let shownProjects = ref(projects);


projects.filter((project) => {
  project.badges.filter((badge) => {
    if (!allBadges.includes(badge)) {
      allBadges.push(badge)
    }
  })
});

allBadges.sort()

function filter(badge: String | undefined = undefined) {
  shownProjects.value = projects.filter((project) => {
    if (badge === undefined || project.badges.filter((b) => b === badge).length) {
      project.show = true;
    } else {
      project.show = false
    }

    return project
  })
}

defineExpose({
  shownProjects,
  allBadges
})

</script>