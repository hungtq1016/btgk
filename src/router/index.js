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
    { path: '/', name: 'home', component: TopPage,meta:{title: 'Home'}},
    { path: '/about', name: 'about', component: About,meta:{title: 'About'}},
    { path: '/product', name: 'add-product', component: AddProduct,meta:{title: 'Add Product'}},
    { path: '/products', name: 'products', component: Products,meta:{title: 'Products'}},
    { path: '/products/:id', name: 'product-detail', component: Product,meta:{title: 'Product'}},
    { path: '/cart', name: 'car', component: Cart,meta:{title: 'Cart'}},
    { path: '/:pathMatch(.*)*', name: 'error', component: Error,meta:{title: '404'}},
  ]
})

router.beforeEach((to,from,next) =>{
  document.title = `Shop Cart | ${to.meta.title}`;
  next()
})

export default router
