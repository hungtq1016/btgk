<template>
    <Suspense>
        <template #default>
            <section class="section has-background-light is-clipped">
                <div class="container">
                    
                    <h2 class="title mb-16 mb-24-tablet">Tất cả sản phẩm</h2>
                    <div class="buttons mb-2">
                        <button class="button is-info" @click="sortBy('name')">Theo Tên</button>
                        <button class="button is-success" @click="sortBy('category')">Theo NSX</button>
                        <button class="button is-warning" @click="sortBy('date')">Theo Ngày</button>
                        <button class="button is-danger" @click="sortDiscount()">Giảm Giá</button>
                        <button class="button is-link" @click="sortBy('id')">Mặc Định</button>
                      </div>
                    <div class="mb-20 columns is-multiline" v-if="show">
                        <ProductSite v-for="(item,i) in products.slice(0,12)" :key="i" :product="item" />
                    </div>
                    <div class="mb-20 columns is-multiline" v-else>
                        <ProductSite v-for="(item,i) in products" :key="i" :product="item" />
                    </div>
                    <div class="has-text-centered">
                        <button class="button is-primary" @click="show = !show" v-if="show">Show More</button>
                        <button class="button is-primary" @click="show = !show" v-else>Show Less</button>
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
export default {
    data() {
        return {
            show: true
        };
    },
    name: "product",
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    methods: {
        sortBy(key) {
            this.products.sort((a, b) => a[key] < b[key] ? -1 : 1);
        },
        sortDiscount() {
            this.products.sort((a, b) => a['discount'] > b['discount'] ? -1 : 1);
        }
    },
    components: { ProductSite }
};
</script>

<style lang="scss" scoped>

</style>