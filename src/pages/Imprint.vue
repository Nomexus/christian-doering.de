<template>
  <h1 class="text-center">{{ t("pageTitle.imprint") }}</h1>
</template>

<script setup lang="ts">
import {useMeta} from "vue-meta";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

useMeta({
  title: t("pageTitle.imprint"),
})
</script>