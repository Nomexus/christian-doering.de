<template>
  <div class="resume-personal">
    <img width="400" height="500" src="https://via.placeholder.com/400x500" alt="Christian Döring"
         title="Christian Döring">
    <div class="resume-personal-content">
      <h1>{{ t("navbar.home") }}</h1>
      <PersonalRow title="Name" value="Christian Döring"/>
      <PersonalRow title="Anschrift">
        Prinz-Regent-Str. 111<br>
        44795 Bochum
      </PersonalRow>
      <PersonalRow title="Tel." value="+49 151 401 205 31"/>
      <PersonalRow title="Email">
        <!-- ToDo: Obfuscate for automated spam crawler -->
        info@harvest-time.de
      </PersonalRow>
      <PersonalRow title="LinkedIn">
        <a href="https://www.linkedin.com/in/christian-doering/" target="_blank">
          linkedin.com/in/christian-doering
        </a>
      </PersonalRow>
      <PersonalRow title="Github">
        <a href="https://github.com/Nomexus" target="_blank">
          github.com/Nomexus
        </a>
      </PersonalRow>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMeta} from "vue-meta";
import {useI18n} from "vue-i18n";
import PersonalRow from '@/components/resume/PersonalRow.vue';

const {t} = useI18n()

useMeta({
  title: t("navbar.contact"),
})
</script>