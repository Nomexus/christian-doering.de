<template>
  <MetaNavigation/>
  <Navbar/>
  <router-view v-slot="{ Component }">
    <Suspense>
      <div class="content">
        <component :is="Component"/>
      </div>
    </Suspense>
  </router-view>
  <Footer />
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
import Footer from "./components/Footer.vue";

useMeta({
  htmlAttrs: {lang: 'de'}
})
</script>