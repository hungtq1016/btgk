<template>
    <div class="container">
        <section class="section px-0">
            <h1 class="title uppercase">Sản phẩm mới</h1>
            <div class="columns">
                <ProductSite v-for="item in product" :key="id" />
              </div>
          </section>
    </div>
</template>

<script >
import ProductSite from '../components/ProductSite.vue';
import { productLoader } from "@/firebase";

export default{
    setup(){
        const product = productLoader();
        return {product};
    },
    name: "home",
    components: { ProductSite },
};

</script>