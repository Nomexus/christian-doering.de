import App from '@/App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from '@/router/'
import {createMetaManager as createVueMetaManager, deepestResolver, defaultConfig} from 'vue-meta'
import {loadLocaleMessages, setupI18n} from "@/services/i18n";

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.

const createMetaManager = (isSSR = false) => createVueMetaManager(
    isSSR,
    {
        ...defaultConfig,
        esi: {
            group: true,
            namespaced: true
        }
    },
    deepestResolver
)

const i18n = setupI18n({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'en'
});

await loadLocaleMessages(i18n, "de")

export function createApp() {
    const app = createSSRApp(App)
    const router = createRouter(i18n)
    const metaManager = createMetaManager(import.meta.env.SSR)

    app.use(metaManager)
    app.use(router)
    app.use(i18n)

    return { app, router, metaManager }
}