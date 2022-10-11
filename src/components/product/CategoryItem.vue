<template>
    <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4">
            <p class="text-right">{{this.array.length}} Sản phẩm</p>
            <router-link :to="{name: 'category', params: {id : cate.title}}"
                class="cat-img position-relative overflow-hidden mb-3">
                <img class="img-fluid" src="http://127.0.0.1:5173/src/assets/img/cat-1.jpg" alt="">
            </router-link>
            <h5 class="font-weight-semi-bold m-0">{{cate.title}}</h5>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { APIURL } from '../../constant';

export default {
    props: ['cate'],
    data() {
        return {
            array: []
        }
    },
    async mounted() {

        await axios.get(`${APIURL}/products?category=${this.cate.title}`).then((response) => this.array = response.data);

    },
}
</script>

<style lang="scss" scoped>

</style>