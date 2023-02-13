import {createRouter, createWebHashHistory} from "vue-router";
import {Component} from "vue";

interface route {
    path: string
    component: Component
}

const routes: route[] = [
    {
        path: "/",
        component: () => import('../views/Home/Home.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;