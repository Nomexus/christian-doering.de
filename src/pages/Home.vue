<template>
  <div class="content">
    <h1 class="text-center main-headline mb-2" v-html="t('home.greeting')" />
    <h2 class="text-center styled mb-4 mt-0">{{ t("home.title") }}</h2>
    <div class="content-medium text-center mb-2" v-html="t('home.intro')" />
    <div class="content-medium text-center mb-0">
      <router-link class="cta-button" :to="`/${locale}/contact`">
        {{ t("home.contactMe") }}
      </router-link>
    </div>
    <ContentDivider class="mb-4 mt-4" />
    <h2 class="h1 mb-4 mt-0 text-center styled">
      {{ t("home.currentProjects") }}
    </h2>
    <div class="projects-home">
      <Project
        v-for="project in projects"
        :key="project.title"
        :project="project"
        :show="project.show" />
    </div>
    <div class="text-center mt-3">
      <router-link class="button" :to="`/${locale}/projects`">
        {{ t("home.allProjects") }}
      </router-link>
    </div>
    <ContentDivider class="mb-4 mt-4" />
    <h2 class="h1 mb-4 mt-0 text-center styled">
      {{ t("home.myExperience") }}
    </h2>
    <div class="experience-home mt-0">
      <div class="resume-default">
        <DefaultRow
          :date="'07/2022 – ' + t('current')"
          :title="t('experience.npo.title')"
          :where="t('experience.npo.employer')"></DefaultRow>
        <DefaultRow
          date="01/2018 – 06/2022"
          :title="t('experience.ow2.title')"
          :where="t('experience.ow2.employer')"></DefaultRow>
        <DefaultRow
          date="04/2013 – 12/2017"
          :title="t('experience.ow.title')"
          :where="t('experience.ow.employer')"></DefaultRow>
        <DefaultRow
          date="01/2010 – 08/2016"
          :title="t('experience.ht.title')"
          :where="t('experience.ht.employer')"></DefaultRow>
      </div>
    </div>
    <ContentDivider class="mb-4 mt-4" />
    <h2 class="h1 mt-0 mb-3 text-center">{{ t("navbar.contact") }}</h2>
    <div class="text-center">
      <router-link class="cta-button" :to="`/${locale}/contact`">
        {{ t("home.contactMe") }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { setMeta } from "@/services/meta";
import { useI18n } from "vue-i18n";
import Project from "@/components/Project.vue";
import DefaultRow from "@/components/resume/DefaultRow.vue";
import ContentDivider from "@/components/ContentDivider.vue";

const { t, locale } = useI18n();

setMeta(
  {
    meta: {
      name: "description",
      content: t("meta.home.description"),
    },
  },
  t
);

const projects = [
  {
    link: null,
    show: "",
    title: t("projects.farmparadies_2022.title"),
    img: "/img/projects/farmparadies-2022",
    badges: ["vue", "symfony"],
    description: t("projects.farmparadies_2022.description"),
  },
  {
    link: "https://www.rezepte-teilen.de",
    show: "",
    title: t("projects.recipes_book.title"),
    img: "/img/projects/rezepte-teilen.de",
    badges: ["vue", "symfony"],
    description: t("projects.recipes_book.description"),
  },
];
</script>
