<template>
  <div class="meta-navigation">
    <a :class="locale === l ? 'active': ''"
       v-for="l in availableLocales" :key="`locale-${l}`"
       @click="changeLanguage(l)">
      {{ l.toUpperCase() }}
    </a>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {locale, availableLocales} = useI18n()

function changeLanguage(this: any, l: string) {
  this.locale = l;
  // ToDo: router push to force meta change?
}
</script>