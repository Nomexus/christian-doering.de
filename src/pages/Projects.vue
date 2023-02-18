<template>
  <div class="content">
    <h1 class="text-center">{{ t("navbar.projects") }}</h1>

    <div class="tech-filter text-center">
      <Badge @click="filter(badge.name)" v-for="badge in allBadges" :key="badge.name"
             :text="badge.name" :css-class="badge.active ? badge.name + ' is-active' : badge.name"/>
    </div>

    <Project v-for="project in shownProjects" :key="project.title" :project="project" :show="project.show"
             @filter="(name) => filter(name)"/>
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
}, t)

const projects = [
  {
    link: 'https://www.rezepte-teilen.de',
    show: "",
    title: t("projects.recipes_book.title"),
    img: "/img/projects/rezepte-teilen.de",
    badges: [
      "vue",
      "symfony",
    ],
    description: t("projects.recipes_book.description"),
  },
  {
    link: null,
    show: "",
    title: t("projects.farmparadies_2022.title"),
    img: "/img/projects/farmparadies-2022",
    badges: [
      "vue",
      "symfony"
    ],
    description: t("projects.farmparadies_2022.description"),
  },
  {
    link: null,
    show: "",
    title: t("projects.farmparadies_2009.title"),
    img: "/img/projects/farmparadies-2009",
    badges: [
      "php",
      "mysql",
      "jquery",
    ],
    description: t("projects.farmparadies_2009.description")
  },
  {
    link: null,
    show: "",
    title: t("projects.project_system.title"),
    img: "/img/projects/projekt-system",
    badges: [
      "jquery",
      "phalcon",
    ],
    description: t("projects.project_system.description"),
  },
  {
    link: null,
    show: "",
    title: t("projects.api_tools.title"),
    img: "/img/projects/api-tools",
    badges: [
      "jquery",
      "phalcon",
    ],
    description: t("projects.api_tools.description"),
  },
];

const allBadges: { name: string; active: boolean; }[] = [
  {
    name: t("projects.all"),
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
        badge === t("projects.all") ||
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

</script>