<template>
  <div class="content">
    <div class="contact content-medium text-center">
      <h1>{{ t("navbar.contact") }}</h1>

      <p>
        Sollte ich dein Interesse geweckt haben, dann melde dich doch einfach bei mir! :)
      </p>

      <a class="h2" href="mailto:kontakt@christian-doering.de">kontakt@christian-doering.de</a>

      <div class="contact-icons">
        <a rel="noopener nofollow" href="https://www.linkedin.com/in/christian-doering/" target="_blank">
          <img src="@/assets/icons/linkedin-icon.svg" alt="LinkedIn Logo">
          <span>linkedin.com</span>
        </a>
        <a rel="noopener nofollow" href="https://github.com/Nomexus" target="_blank">
          <img src="@/assets/icons/GitHub-Mark-Light-120px-plus.png" alt="Github Logo">
          <span>github.com</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {setMeta} from "@/services/meta";

const {t} = useI18n()

setMeta({
  title: t(`meta.contact.title`),
  description: t("meta.contact.description")
})
</script>