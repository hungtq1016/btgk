<template>
    <div class="navbar-item has-dropdown is-hoverable">
        <input type="search" v-model="search" class="px-2 border rounded" placeholder="Tìm tại đây..." />
        <div class="navbar-dropdown is-right" v-if="search.length > 0">
            <router-link :to="{name: 'product-detail', params: {id : product.id}}"
                v-for="product in filteredData.slice(0, 6)" :key="product.id" class="navbar-item"> {{product.name}}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        };
    },
    
    computed: {
        filteredData() {
            return this.products
                .filter(
                    ({ name }) => [name ]
                        .some(val => val.toLowerCase().includes(this.search))
                );
        },
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.$store.dispatch('getProducts');
    },
}
</script>

<style lang="scss" scoped>

</style>