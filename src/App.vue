<template>
  <MetaNavigation/>
  <Navbar/>
  <!-- ToDo: page transitions -->
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <div class="content" :key="$route.path">
        <component :is="Component"/>
      </div>
    </transition>
  </router-view>
  <Footer/>
  <!-- ToDo: generates hydration mismatch -->
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