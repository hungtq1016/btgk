<template>
  <Suspense>
    <template #default>
      <section class="section has-background-light is-clipped">
        <div class="container">
          <h2 class="title mb-16 mb-24-tablet">Sản phẩm mới</h2>
          <div class="mb-20 columns is-multiline">
            <ProductSite v-for="(item,i) in products" :key="i" :product="item" />
          </div>
          <div class="has-text-centered"><a class="button is-primary" href="#">Show More</a></div>
        </div>
      </section>
    </template>
    <template #fallback>
      <div>Hello</div>
    </template>
  </Suspense>

</template>

<script >
import ProductSite from '../components/ProductSite.vue';

export default {
  name: "home",
  components: { ProductSite },
  data() {
    return {
      sortDate:false
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    
    sortedItems: function() {
      return this.productList.sort((a, b) => new Date(a.date) - new Date(b.date))
    }
  },



};

</script>