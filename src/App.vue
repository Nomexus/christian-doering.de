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
import {useRoute, useRouter} from "vue-router";
import {routeWithoutParam} from "@/services/helper";
import {useI18n} from "vue-i18n";

const router = useRouter();
const route = useRoute();

const {locale} = useI18n()

// ToDo: move to service
if (typeof window !== "undefined") {
  let touchstartX;
  let touchendX;
  let touchStartTime;
  let touchEndTime;

  const routeOrder = [
    "",
    "projects",
    "contact",
  ];

  window.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchStartTime = Date.now()
  }, false);

  window.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchEndTime = Date.now()
    // ToDo: fix navbar active bug after router push, find a way to set transition name
    //handleGesture();
  }, false);

  function handleGesture() {
    const touchTime = touchEndTime - touchStartTime;

    if (touchTime <= 200) {
      const realRoute = routeWithoutParam(route.path);
      const routeIndex = routeOrder.indexOf(realRoute);

      if (touchendX < touchstartX) {
        if (touchstartX - touchendX > 30) {
          if ((routeIndex + 1) < routeOrder.length) {
            const pushPath = `/${locale.value}/${routeOrder[routeIndex + 1]}`;
            return router.push(pushPath)
          }
        }
      }

      if (touchendX > touchstartX) {
        if (touchendX - touchstartX > 30) {
          if (routeIndex !== 0) {
            const pushPath = `/${locale.value}/${routeOrder[routeIndex - 1]}`;
            return router.push(pushPath)
          }
        }
      }
    }
  }
}
</script>