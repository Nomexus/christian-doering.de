<template>
  <div>
    <MetaNavigation />
    <Navbar />
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
  <!-- ToDo: Generates hydration mismatch -->
  <metainfo>
    <template v-slot:title="{ content }">{{ content }} - Christian Döring</template>
  </metainfo>
</template>

<script setup>
import "./scss/main.scss";
import {useMeta} from "vue-meta";
import Navbar from "./components/Navbar.vue";
import MetaNavigation from "./components/MetaNavigation.vue";

useMeta({
  htmlAttrs: { lang: 'de' }
})
</script>