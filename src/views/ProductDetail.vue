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
                <div class="py-4">
                    <div
                        class=" is-flex is-align-items-center has-text-weight-bold justify-center w-24 border-2 rounded-md">
                        <button class="button is-ghost has-text-grey p-0">
                            <svg width="12" height="2" viewbox="0 0 12 2" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.35">
                                    <rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor">
                                    </rect>
                                </g>
                            </svg>
                        </button>
                        <input class="input px-2 py-4 has-text-centered"
                            style="width: 48px; border: none; box-shadow: none;" type="number" value="1">
                        <button class="button is-ghost has-text-grey p-0">
                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.35">
                                    <rect x="5" width="2" height="12" fill="currentColor"></rect>
                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)"
                                        fill="currentColor">
                                    </rect>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
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
import { mapMutations, mapGetters } from 'vuex';

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
    computed: {

    }
}
</script>

<style lang="scss" scoped>

</style>