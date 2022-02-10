<template>
  <metainfo></metainfo>
  <MetaNavigation/>
  <Navbar/>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"/>
    </transition>
  </router-view>
  <Footer/>
</template>

<script setup>
import "@/scss/main.scss"
import Navbar from "@/components/Navbar.vue"
import MetaNavigation from "@/components/MetaNavigation.vue"
import Footer from "@/components/Footer.vue"
</script>