<template>
  <footer>
    <ul>
      <li>
        <router-link to="/imprint">{{ t("footer.imprint") }}</router-link>
      </li>
      <li>
        <router-link to="/data-privacy">{{ t("footer.dataPrivacy") }}</router-link>
      </li>
      <li>
        <a href="https://github.com/Nomexus/christian-doering.de" target="_blank">Github</a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>