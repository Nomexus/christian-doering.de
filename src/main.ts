import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router/'
import {createMetaManager as createVueMetaManager, deepestResolver, defaultConfig} from 'vue-meta'

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

export function createApp() {
    const app = createSSRApp(App)
    const router = createRouter()
    const metaManager = createMetaManager(import.meta.env.SSR)

    app.use(metaManager)
    app.use(router)

    return { app, router, metaManager }
}