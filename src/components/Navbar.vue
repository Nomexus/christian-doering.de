<template>
  <div class="navbar">
    <router-link to="/">{{ t("navbar.home") }}</router-link>
    <router-link to="/projects">{{ t("navbar.projects") }}</router-link>
    <router-link to="/contact">{{ t("navbar.contact") }}</router-link>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>