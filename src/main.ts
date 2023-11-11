import App from "@/App.vue";
import { createSSRApp } from "vue";
import { createRouter } from "@/router/";
import { loadLocaleMessages, setupI18n } from "@/services/i18n";
import { createHead } from "@unhead/vue";

export function createApp() {
  const head = createHead();

  const i18n = setupI18n({
    legacy: false,
    locale: "de",
    fallbackLocale: "en",
    warnHtmlMessage: false,
  });

  loadLocaleMessages(i18n, "de").then(undefined);

  const app = createSSRApp(App);
  const router = createRouter(i18n);

  app.use(router);
  app.use(i18n);
  app.use(head);

  return { app, router, head };
}
