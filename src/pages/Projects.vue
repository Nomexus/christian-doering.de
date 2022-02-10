<template>
  <div class="content">
    <h1 class="text-center">{{ t("navbar.projects") }}</h1>

    <div class="tech-filter text-center">
      <Badge @click="filter(badge.name)" v-for="badge in allBadges" :key="badge.name"
             :text="badge.name" :css-class="badge.active ? badge.name + ' is-active' : badge.name"/>
    </div>

    <Project v-for="project in shownProjects" :key="project.title"
             :show="project.show"
             :title="project.title"
             :badges="project.badges"
             :link="project.link">
      <div v-html="project.description"></div>
    </Project>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import Project from "@/components/Project.vue";
import Badge from "@/components/Badge.vue";
import {ref} from "vue";
import {setMeta} from "@/services/meta";

const {t} = useI18n()

setMeta({
  title: t(`meta.projects.title`),
  description: t("meta.projects.description")
})

// ToDo: move projects to locales
const projects = [
  {
    link: null,
    show: "",
    title: "FarmParadies 2009 - 2018",
    badges: [
      "php",
      "mysql",
      "javascript",
    ],
    description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
        "      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
        "      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
        "      consetetur sadipscing elitr, sed diam</p>"
  },
  {
    link: null,
    show: "",
    title: "FarmParadies 2022 - now",
    badges: [
      "vue",
      "symfony",
      "php",
      "mysql"
    ],
    description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
        "      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
        "      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
        "      consetetur sadipscing elitr, sed diam</p>"
  },
  {
    show: "",
    title: "Projekt-, Aufgaben- & Zeitmanagement System",
    badges: [
      "javascript",
      "phalcon",
      "mysql",
    ],
    description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
        "      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
        "      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
        "      consetetur sadipscing elitr, sed diam</p>"
  },
  {
    show: "",
    title: "Shopware und Wordpress API",
    badges: [
      "javascript",
      "phalcon",
      "mysql",
    ],
    description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
        "      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
        "      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
        "      consetetur sadipscing elitr, sed diam</p>"
  },
];

const allBadges: { name: string; active: boolean; }[] = [
  {
    name: "alle",
    active: true,
  }
];

let shownProjects = ref(projects);


projects.filter((project) => {
  project.badges.filter((badge) => {
    if (!allBadges.filter((b) => b.name == badge).length) {
      allBadges.push({
        name: badge,
        active: false
      })
    }
  })
});

allBadges.sort()

function filter(badge: String) {
  shownProjects.value = projects.filter((project) => {
    if (
        badge === "alle" ||
        project.badges.filter((b) => b === badge).length
    ) {
      if (project.show !== "")
        project.show = "is-visible"
    } else {
      project.show = "is-hidden"
    }

    return project
  })

  allBadges.filter((b) => {
    b.name === badge ? b.active = true : b.active = false
  })
}

defineExpose({
  shownProjects,
  allBadges
})

</script>