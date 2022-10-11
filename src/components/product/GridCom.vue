<template>
    <div class="col-lg-9 col-md-12">
        <div class="row">
            <div class="col pb-1">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Tìm theo tên..." v-model="search">
                            <div class="input-group-append">
                                <span class="input-group-text bg-transparent text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" width="24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            fill="white" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </form>
                    <div class="dropdown ml-4">
                        <button class="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Sort by
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                            <a class="dropdown-item" href="#">Latest</a>
                            <a class="dropdown-item" href="#">Popularity</a>
                            <a class="dropdown-item" href="#">Best Rating</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pb-3" v-if="search">
            <ProductItem v-for="product in searchList" :key="product.id" :product="product" class="col-lg-4 col-md-6 col-sm-12 pb-1"/>      
        </div>
        <div class="row pb-3" v-else>
            <ProductItem v-for="product in filteredProduct" :key="product.id" :product="product" class="col-lg-4 col-md-6 col-sm-12 pb-1"/>      
        </div>
        <div class="row">
            <PaginateCom :totalPages="5" :perPage="9" :currentPage="currentPage" @pagechanged="onPageChange" />
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import PaginateCom from './PaginateCom.vue';
export default {
    props: ['category'],
    data() {
        return {
            list: [],
            currentPage: 1,
            search: ''
        };
    },
    components: { ProductItem, PaginateCom },
    computed: {
        products() {
            return this.$store.state.products;
        },
        filteredProduct() {
            if (this.category) {
                return this.list.filter((item) => {
                    return item.category.match(this.category)
                })
            } else {
                return this.list
            }

        },
        searchList() {
            return this.filteredProduct.filter(item => {
                return item.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        onPageChange(page) {
            console.log(page)
            this.currentPage = page;
        }
    },
    filters: {
        search() {
            return this.filteredProduct.match(this.search)
        }

    },
    created() {
        this.list = this.products
    }
}
</script>

<style lang="scss" scoped>

</style>