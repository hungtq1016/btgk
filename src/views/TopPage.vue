<template>
  <Suspense>
    <template #default>

      <section class="section has-background-light is-clipped">
        <div class="container">
          <Banner />
        </div>
        <div class="container pt-10">
          <h2 class="title mb-16 mb-24-tablet">Sản phẩm mới</h2>
          <div class="mb-20 columns is-multiline">
            <ProductSite v-for="(item,i) in sortByDate.slice(0,8)" :key="i" :product="item" />
          </div>
          <div class="border-t-2 pb-5 mt-5"></div>
          <h2 class="title mb-16 mb-24-tablet">Đang khuyến mãi</h2>
          <div class="mb-20 columns is-multiline">
            <ProductSite v-for="(item,i) in sorBySale.slice(0,8)" :key="i" :product="item" />
          </div>
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
import Banner from '../components/Banner.vue';

export default {
  name: "home",
  components: { ProductSite, Banner },

  computed: {
    products() {
      return this.$store.state.products;
    },

    sortByDate() {
      return this.products.sort((a, b) => a['date'] < b['date'] ? -1 : 1)
    },
    sorBySale() {
      return this.products.sort((a, b) => a['discount'] > b['discount'] ? -1 : 1)
    }
  },

};

</script>