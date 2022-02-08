import {
    createMemoryHistory,
    createRouter as _createRouter,
    createWebHistory
} from 'vue-router'
import {loadLocaleMessages, setI18nLanguage, SUPPORT_LOCALES} from "@/services/i18n";
import {I18n} from "vue-i18n";

const routes = [
    // ToDo: default route without param
    {
        path: "/:locale",
        component: () => import('@/pages/Contact.vue'),
    },
    {
        path: "/:locale/contact",
        component: () => import('@/pages/Contact.vue'),
    },
    {
        path: "/:locale/projects",
        component: () => import('@/pages/Projects.vue'),
    },
    {
        path: "/:locale/imprint",
        component: () => import('@/pages/Imprint.vue'),
    },
    {
        path: "/:locale/data-privacy",
        component: () => import('@/pages/DataPrivacy.vue'),
    }
]

export function createRouter(i18n: I18n) {
    const router = _createRouter({
        // use appropriate history implementation for server/client
        // import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes,
    })

    router.beforeEach(async (to, from, next) => {
        const paramsLocale = to.params.locale

        if (typeof paramsLocale === "undefined" || typeof paramsLocale === "object") {
            return next("/de")
        }

        if (!SUPPORT_LOCALES.includes(paramsLocale)) {
            return next(`/de`)
        }

        if (!i18n.global.availableLocales.includes(paramsLocale)) {
            await loadLocaleMessages(i18n, paramsLocale)
        }

        setI18nLanguage(i18n, paramsLocale)

        return next()
    })

    return router;
}