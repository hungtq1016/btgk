import { createRouter, createWebHistory } from 'vue-router'

import TopPage from '../views/TopPage.vue';
import About from '../views/AboutPage.vue';
import Product from '../views/ProductPage.vue';
import Error from '../views/ErrorPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: TopPage},
    { path: '/about', name: 'about', component: About},
    { path: '/product', name: 'product', component: Product},
    { path: '/:pathMatch(.*)*', name: 'error', component: Error},
  ]
})

export default router
