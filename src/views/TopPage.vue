<template>
    <section class="section has-background-light is-clipped">
        <div class="container">
          <h2 class="title mb-16 mb-24-tablet">Sản phẩm mới</h2>
          <div class="mb-20 columns is-multiline">
            <ProductSite v-for="(item,i) in products" :key="i" :product="item" v-on:view-product="viewProduct($event)"/>
          </div>
          <div class="has-text-centered"><a class="button is-primary" href="#">Show More</a></div>
        </div>
      </section>
</template>

<script >
import ProductSite from '../components/ProductSite.vue';
import axios from 'axios';
import { APIURL } from "../constant";

export default {
  name: "home",
  components: { ProductSite },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    axios
      .get(`${APIURL}/products`)
      .then((response) => this.products = response.data)
  },
  methods: {
    viewProduct(product) {
      this.product = product
    },
  },


};

</script>