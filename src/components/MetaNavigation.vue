<template>
  <div class="meta-navigation">
    <!-- ToDo: switch current page, dont go to home -->
    <router-link
        v-for="l in SUPPORT_LOCALES" :key="l"
        :class="locale === l ? 'active': ''"
        :to="`/${l}/${routeWithoutParam($route.path)}`"
    >
      {{ l }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {SUPPORT_LOCALES} from "@/services/i18n"

const {locale} = useI18n()

function routeWithoutParam(path: string) {
  const pathParts = path.split("/").filter((part: string, index) => {
    if ((part !== "" && !SUPPORT_LOCALES.includes(part)) || index > 1) {
      return part
    }
  })

  return pathParts.join("/")
}
</script>