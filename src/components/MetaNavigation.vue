<template>
  <div class="meta-navigation">
    <div class="left">
      <a
        rel="noopener nofollow"
        href="https://www.linkedin.com/in/christian-doering/"
        target="_blank">
        LinkedIn
      </a>
      <a
        rel="noopener nofollow"
        href="https://github.com/Nomexus/christian-doering.de"
        target="_blank">
        Github
      </a>
    </div>
    <div class="right">
      <router-link
        :hreflang="l"
        v-for="l in SUPPORT_LOCALES"
        :key="l"
        :class="locale === l ? 'active' : ''"
        :to="`/${l}/${routeWithoutParam($route.path)}`">
        {{ l }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { SUPPORT_LOCALES } from "@/services/i18n";
import { routeWithoutParam } from "@/services/helper";

const { locale } = useI18n();
</script>
