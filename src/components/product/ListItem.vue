<template>
    <div class="container-fluid pt-5">
        <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">{{title}}</span></h2>
        </div>
        <div class="row px-xl-5 pb-3">
            <ProductItem v-for="product in sortedProducts.slice(0,this.max)" :key="product.id" :product="product" class="col-lg-3 col-md-6 col-sm-12 pb-1"/>
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
    props: {
        isGreater: Boolean,
        title: String,
        view: String,
        max: Number
    },
    data() {
        return {};
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        sortedProducts() {
            return this.isGreater == true 
            ? this.products.sort((a, b) => a[this.view] > b[this.view] ? -1 : 1)
            : this.products.sort((a, b) => a[this.view] < b[this.view] ? -1 : 1);
        },
    },
    components: { ProductItem }
}
</script>

<style lang="scss" scoped>

</style>