import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/home-about.vue';
import Project from '@/views/project-work.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/project",
        name: "Project",
        component: Project,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router