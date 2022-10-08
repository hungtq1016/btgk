<template>
    <router-link :to="{name: 'product-detail', params: {id : item.id}}" class="navbar-item">
        <span class="font-bold ">{{item.name}}</span> - <span>Số lượng: {{productTotal}}</span>
    </router-link>
</template>

<script>
    export default {
        props: ['item'],
        computed:{
            productTotal() {
                return this.$store.getters.productQty(this.item)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>