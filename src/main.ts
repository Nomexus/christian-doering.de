import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router/'
import {createMetaManager as createVueMetaManager, deepestResolver, defaultConfig} from 'vue-meta'
import {createI18n} from "vue-i18n";
import {messages} from "./locales";

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
            // TODO?: attributes: ['src', 'test', 'text']
        }
    },
    deepestResolver
)

const i18n = createI18n({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'en',
    messages
});

export function createApp() {
    const app = createSSRApp(App)
    const router = createRouter()
    const metaManager = createMetaManager(import.meta.env.SSR)

    app.use(metaManager)
    app.use(router)
    app.use(i18n)

    return { app, router, metaManager }
}