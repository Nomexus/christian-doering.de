<template>
  <div class="content">
    <h1 class="text-center">{{ t("pageTitle.imprint") }}</h1>

    <div class="content-medium">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Christian Döring<br/>
        Prinz-Regent-Str. 111<br/>
        44795 Bochum
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 234 85 99 53 60<br/>
        E-Mail: kontakt@christian-doering.de
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {setMeta} from "@/services/meta";

const {t} = useI18n()

setMeta({
  title: t(`meta.imprint.title`),
  description: t("meta.home.description")
}, t)
</script>