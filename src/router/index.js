import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/home-about.vue';
import Project from '@/views/project-work.vue';
import Contact from '@/views/contact-me.vue';

// tableau des routes
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
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router