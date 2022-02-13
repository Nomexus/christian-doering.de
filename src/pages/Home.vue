<template>
  <div class="content">
    <h1 class="text-center main-headline mb-2" v-html="t('home.greeting') "/>
    <h2 class="text-center styled mb-4 mt-0">{{ t('home.title') }}</h2>
    <div class="content-medium text-center mb-2" v-html="t('home.intro')"/>
    <div class="content-medium text-center mb-0">
      <router-link class="cta-button" :to="`/${locale}/contact`">{{ t('home.openForNewChallenges') }}</router-link>
    </div>
    <ContentDivider class="mb-4 mt-4" />
    <h2 class="h1 mb-4 mt-0 pl-2 styled ml--2-mobile-landscape">{{ t('home.myExperience') }}</h2>
    <div class="experience-home mt-0">
      <div class="resume-default">
        <DefaultRow
            date="04/2013 – 06/2022"
            :title="t('experience.ow.title')"
            :where="t('experience.ow.employer')">
          <ul v-if="locale === 'de'">
            <li>
              Planung und Entwicklung von IT-Projekten bis zum Release
              <ul>
                <li>Theme- und Plugin-Entwicklung für Shopware 5 und 6 Systeme</li>
                <li>
                  Verwaltungs- / Administrationssysteme auf Basis von Phalcon, MySQL, JavaScript, sowie Symfony und Vue
                </li>
              </ul>
            </li>
            <li>Ausbildung von Auszubildenden</li>
            <li>Analyse und Durchführung von Performance- und SEO-Optimierungen</li>
            <li>
              Einbringung neuer Technologien, Modernisierungen und Workflows, sowie deren Einrichtung und Schulung der
              Kollegen
            </li>
            <li>
              Linux Serveradministration
              <ul>
                <li>interner Entwicklungsserver</li>
                <li>Einrichtung von Gitlab und Git</li>
              </ul>
            </li>
          </ul>
          <ul v-if="locale === 'en'">
            <li>
              Planning and development of projects up to the release
              <ul>
                <li>Theme and plugin development for Shopware 5 and 6 systems</li>
                <li>
                  Management / administration systems based on Phalcon, MySQL, JavaScript, as well as Symfony and Vue
                </li>
              </ul>
            </li>
            <li>Training of trainees</li>
            <li>
              Analysis and implementation of performance and SEO optimizations</li>
            <li>
              Introducing new technologies, modernizations and workflows, as well as setting them up and training colleagues
            </li>
            <li>
              Linux server administration
              <ul>
                <li>Internal development server</li>
                <li>Setting up Gitlab and Git</li>
              </ul>
            </li>
          </ul>
        </DefaultRow>
        <DefaultRow
            date="01/2010 – 08/2016"
            :title="t('experience.ht.title')"
            :where="t('experience.ht.employer')">
          <ul v-if="locale === 'de'">
            <li>Betrieb des Browsergames „FarmParadies“</li>
            <li>Planung und Entwicklung mit PHP, MySQL und JavaScript</li>
            <li>Layouterstellung und 3D-Modellierung mit Photoshop und Cinema 4D</li>
          </ul>
          <ul v-if="locale === 'en'">
            <li>Operation of the browser game "FarmParadies"</li>
            <li>Planning- and Projectdevelopment with PHP, MySQL and JavaScript</li>
            <li>Layout creation and 3D modeling with Photoshop and Cinema 4D</li>
          </ul>
        </DefaultRow>
      </div>
    </div>
    <ContentDivider class="mb-4 mt-4" />
    <h2 class="h1 mb-4 mt-0 pr-2 text-right styled mr--2-mobile-landscape">{{ t('home.currentProjects') }}</h2>
    <div class="projects-home">
      <Project v-for="project in projects" :key="project.title" :project="project" :show="project.show"/>
    </div>
    <div class="text-center mt-3">
      <router-link class="button" :to="`/${locale}/projects`">{{ t('home.allProjects') }}</router-link>
    </div>
    <ContentDivider class="mb-4 mt-4" />
    <h2 class="h1 mt-0 mb-3 text-center">{{ t('navbar.contact') }}</h2>
    <div class="text-center">
      <router-link class="cta-button" :to="`/${locale}/contact`">{{ t('home.openForNewChallenges') }}</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {setMeta} from "@/services/meta";
import {useI18n} from "vue-i18n";
import Project from "@/components/Project.vue";
import DefaultRow from "@/components/resume/DefaultRow.vue";
import ContentDivider from "@/components/ContentDivider.vue";

const {t, locale} = useI18n()

setMeta({
  description: t("meta.home.description")
}, t)

const projects = [
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
    title: t("projects.recipes_book.title"),
    img: "/img/projects/recipes-book",
    badges: [
      "vue",
      "symfony",
    ],
    description: t("projects.recipes_book.description"),
  },
];
</script>