import { createRouter, createWebHistory } from 'vue-router'

import TopPage from '../views/TopPage.vue';
import About from '../views/AboutPage.vue';
import Products from '../views/ProductPage.vue';
import Product from '../views/ProductDetail.vue';
import AddProduct from '../views/AddProduct.vue';
import Cart from '../views/CartPage.vue';
import Error from '../views/ErrorPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: TopPage},
    { path: '/about', name: 'about', component: About},
    { path: '/product', name: 'add-product', component: AddProduct},
    { path: '/products', name: 'products', component: Products},
    { path: '/products/:id', name: 'product-detail', component: Product},
    { path: '/cart', name: 'car', component: Cart},
    { path: '/:pathMatch(.*)*', name: 'error', component: Error},
  ]
})

export default router
