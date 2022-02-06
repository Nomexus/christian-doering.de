<template>
  <h1>{{ t("navbar.projects") }}</h1>
</template>

<script setup lang="ts">
import {useMeta} from "vue-meta";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

useMeta({
  title: t("navbar.projects"),
})
</script>