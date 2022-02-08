<template>
  <div class="navbar">
    <router-link :to="`/${locale}/`">{{ t("navbar.home") }}</router-link>
    <router-link :to="`/${locale}/projects`">{{ t("navbar.projects") }}</router-link>
    <router-link :to="`/${locale}/contact`">{{ t("navbar.contact") }}</router-link>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n()
</script>