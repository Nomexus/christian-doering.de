import {
    createMemoryHistory,
    createRouter as _createRouter,
    createWebHistory
} from 'vue-router'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('../pages/*.vue')

const routes = [
    // ToDo: Language routing
    {
        path: "/",
        component: () => import('../pages/Home.vue'),
    },
    {
        path: "/contact",
        component: () => import('../pages/Contact.vue'),
    },
    {
        path: "/projects",
        component: () => import('../pages/Projects.vue'),
    },
    {
        path: "/imprint",
        component: () => import('../pages/Imprint.vue'),
    },
    {
        path: "/data-privacy",
        component: () => import('../pages/DataPrivacy.vue'),
    }
]

export function createRouter() {
    const router = _createRouter({
        // use appropriate history implementation for server/client
        // import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes
    })

    router.beforeEach((to, from, next) => {
        next();
    })

    return router;
}