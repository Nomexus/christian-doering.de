<template>
  <div class="navbar">
    <router-link to="/">{{ t("navbar.overview") }}</router-link>
    <router-link to="/resume">{{ t("navbar.resume") }}</router-link>
    <router-link to="/projects">{{ t("navbar.projects") }}</router-link>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>