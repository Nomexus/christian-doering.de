import App from "@/App.vue";
import { createSSRApp } from "vue";
import { createRouter } from "@/router/";
import { setupI18n } from "@/services/i18n";
import { createHead } from "@unhead/vue";
import * as messages_de from "@/locales/de.json";
import * as messages_en from "@/locales/en.json";

export function createApp() {
  const head = createHead();

  const i18n = setupI18n({
    legacy: false,
    locale: "de",
    fallbackLocale: "en",
    warnHtmlMessage: false,
    messages: {
      de: messages_de,
      en: messages_en,
    },
  });

  const app = createSSRApp(App);
  const router = createRouter(i18n);

  app.use(router);
  app.use(i18n);
  app.use(head);

  return { app, router, head };
}
