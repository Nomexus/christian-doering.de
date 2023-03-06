<template>
  <footer>
    <ul>
      <li>
        <router-link :to="`/${locale}/imprint`">
          {{ t("footer.imprint") }}
        </router-link>
      </li>
      <li>
        <router-link :to="`/${locale}/data-privacy`">
          {{ t("footer.dataPrivacy") }}
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
</script>
