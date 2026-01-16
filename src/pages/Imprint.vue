<template>
  <div class="content">
    <h1 class="text-center">{{ t("pageTitle.imprint") }}</h1>

    <div class="content-medium">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Christian Dengel
        <br />
        Prinz-Regent-Str. 111
        <br />
        44795 Bochum
      </p>

      <h2>Kontakt</h2>
      <p>E-Mail: kontakt@christian-doering.de</p>
      <h3>Bild- / Quellenangaben</h3>
      <a target="_blank" href="https://icons8.com/icon/13979/xing">Xing</a>
      icon by
      <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { setMeta } from "@/services/meta";

const { t } = useI18n();

setMeta(
  {
    title: t(`meta.imprint.title`),
    meta: {
      name: "description",
      content: t("meta.home.description"),
    },
  },
  t
);
</script>
