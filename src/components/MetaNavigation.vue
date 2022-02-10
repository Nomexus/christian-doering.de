<template>
  <div class="meta-navigation">
    <a rel="noopener nofollow" href="https://www.linkedin.com/in/christian-doering/" target="_blank">Github</a>
    <a rel="noopener nofollow" href="https://github.com/Nomexus/christian-doering.de" target="_blank">LinkedIn</a>
    |
    <router-link
        :hreflang="l"
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