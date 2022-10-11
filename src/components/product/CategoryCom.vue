<template>
    <div class="container-fluid pt-5">
        <div class="row px-xl-5 pb-3">
            <CategoryItem v-for="category in categories" :key="category.id" :cate="category"/>
        </div>
    </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';
import axios from 'axios';
import { APIURL } from '../../constant';
export default {
    components: { CategoryItem },
    data(){
            return{
               categories:[] 
            }
        },
        async mounted() {
        await axios.get(`${APIURL}/categories`).then((response) => this.categories = response.data);
    },
}
</script>

<style lang="scss" scoped>

</style>