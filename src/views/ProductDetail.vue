<template>
    <div class="container product-detail box" style="margin-top: 48px; ">
        <br>
        <div class="columns">
            <div class="column is-hidden-desktop is-1-tablet is-hidden-mobile"></div>
    
            <div class="column is-5-desktop is-5-tablet is-12-mobile">
                <img src="http://www.thebluediamondgallery.com/wooden-tile/images/product.jpg" alt="image"
                    style="max-height: 500px">
            </div>
    
            <div class="column is-7-desktop is-5-tablet is-12-mobile content-detail">
                <dt style="font-size:1.7em; text-transform:uppercase">{{product.name}}</dt>
                <dt style="font-size:1.2em; text-transform:uppercase">Category</dt>
                <hr>
                <div class="price">
                    <label for="price" class="font-bold">Giá: </label>
                    <span class="text-red-600">{{formatPrice(product.price)}} VNĐ</span>
                    <br><br>
                </div>
                <p style="font-size:1.2em;">{{product.desc}}</p>
                <hr>
                <h4>{{ product_total }}</h4>
                <button class="button is-full is-danger is-light">Yêu Thích</button>
                <button class="button is-full is-primary ml-2" @click.prevent="addToCart(this.product)">Thêm</button>
                <div class="column is-hidden-desktop is-1-tablet is-hidden-mobile"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { APIURL } from "../constant";
import { mapMutations,mapGetters } from 'vuex';

export default {
    data() {
        return {
            product: {}
        }
    },
    mounted() {
        axios.get(`${APIURL}/products/${this.$route.params.id}`).then((response) => this.product = response.data)
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        // addToCart() {
        //         this.$store.commit('addToCart', this.product)
        // },
        ...mapMutations(['addToCart'])
    },
    computed:{
        
        product_total() {
                return this.$store.getters.productQty(this.product)
            } 
    }
}
</script>

<style lang="scss" scoped>

</style>