<template>
  <h1>{{ t("navbar.resume") }}</h1>
</template>

<script setup lang="ts">
import {useMeta} from "vue-meta";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

useMeta({
  title: t("navbar.resume"),
})
</script>