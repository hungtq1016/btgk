<template>
    <div class="container">
        <section class="section px-0">
            <h1 class="title uppercase">Sản phẩm mới</h1>
            <div class="columns is-multiline is-mobile">
                <ProductSite v-for="(item,i) in products" :key="i" :product="item" v-on:view-product="viewProduct($event)"/>
            </div>
          </section>
    </div>
</template>

<script >
import ProductSite from '../components/ProductSite.vue';
import axios from 'axios';
import { APIURL } from "../constant";

export default {
    name: "home",
    components: { ProductSite },
    data(){
        return {
            products:[]
        };
    },
    mounted () {
    axios
      .get(`${APIURL}/products`)
      .then((response) => this.products = response.data)
     },
    methods: {
        viewProduct(product) {
      this.product = product
      // this.active.product_drawer = true
    },
    },
    
    
};

</script>