<template>
    <div class="col-lg-9 col-md-12">
        <div class="row">
            <div class="col pb-1">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="dropdown ">
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
        <div class="row pb-3">
            <ProductItem v-for="product in productsBy" :key="product.id" :product="product"
                class="col-lg-4 col-md-6 col-sm-12 pb-1" />
        </div>
        <div class="row">
            <div class="col-12 pb-1">
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center mb-3">
        <li class="page-item">
          <button class="page-link" type="button" @click="onClickBtn(1)">
            First
          </button>
        </li>

        <li class="page-item">
          <button class="page-link" type="button" >
            Previous
          </button>
        </li>

        <!-- Visible Buttons Start -->

        <li class="page-item" v-for="i in totalPages" :key="i.id">
          <button class="page-link" type="button" @click="onClickBtn(i)">
            {{ i }}
          </button>
        </li>

        <!-- Visible Buttons End -->

        <li class="page-item">
          <button class="page-link" type="button" >
            Next
          </button>
        </li>

        <li class="page-item">
          <button class="page-link" type="button" @click="onClickBtn(totalPages)">
            Last
          </button>
        </li>
      </ul>
    </nav>
  </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { APIURL } from '../../constant';
import ProductItem from './ProductItem.vue';
import PaginateCom from './PaginateCom.vue';
export default {
    props: ['category'],
    data() {
        return {
            productsBy: [],
            req: '1',
        };
    },
    components: { ProductItem, PaginateCom },
    computed: {
        products(){
            return this.$store.state.products;
        },
        totalPages(){
            return parseInt(this.products.length/9)+1;
        }
    },
    async mounted() {
        if (this.category) {
            await axios.get(`${APIURL}/products?_page=${this.req}&_limit=9&category=${this.category}`).then((response) => this.productsBy = response.data);
        } else {
            await axios.get(`${APIURL}/products?_page=${this.req}&_limit=9`).then((response) => this.productsBy = response.data);
        }

    },
    methods:{
        async onClickBtn(value){
            await axios.get(`${APIURL}/products?_page=${value}&_limit=9`).then((response) => this.productsBy = response.data);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>