import App from '@/App.vue'
import {createSSRApp} from 'vue'
import {createRouter} from '@/router/'
import {createMetaManager as createVueMetaManager, deepestResolver, defaultConfig} from 'vue-meta'
import {loadLocaleMessages, setupI18n} from "@/services/i18n";

export function createApp() {
    const createMetaManager = (isSSR = false) => createVueMetaManager(
        isSSR,
        {
            ...defaultConfig,
            esi: {
                group: true,
                namespaced: true,
            }
        },
        deepestResolver
    )

    const i18n = setupI18n({
        legacy: false,
        locale: 'de',
        fallbackLocale: 'en',
        warnHtmlMessage: false
    });

    loadLocaleMessages(i18n, "de").then(_ => {})

    const app = createSSRApp(App)
    const router = createRouter(i18n)
    const metaManager = createMetaManager(import.meta.env.SSR)

    app.use(metaManager)
    app.use(router)
    app.use(i18n)

    return {app, router, metaManager}
}