<template>
  <div>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
  <!-- ToDo: Generates hydration mismatch -->
  <metainfo>
    <template v-slot:title="{ content }">{{ content }} - it runs</template>
  </metainfo>
</template>

<script setup>
import "./scss/main.scss";
import {useMeta} from "vue-meta";

useMeta({
  htmlAttrs: { lang: 'de' }
})
</script>