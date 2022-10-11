<template>
    <BreadcrumbCom :target="this.$route.params.id" v-if="this.$route.params.id"/>
    <BreadcrumbCom target="Tất Cả Sản Phẩm" v-else/>
    <div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <!-- Shop Sidebar Start -->
            <FilterCom/>
            <!-- Shop Sidebar End -->
            <!-- Shop Product Start -->
            <GridCom :category="this.$route.params.id"/>
            <!-- Shop Product End -->
        </div>
    </div>
</template>

<script>
import BreadcrumbCom from "../components/inc/BreadcrumbCom.vue";
import FilterCom from "../components/product/FilterCom.vue";
import GridCom from "../components/product/GridCom.vue";
    export default {
    components: { BreadcrumbCom, FilterCom, GridCom },
    
}
</script>

<style lang="scss" scoped>

</style>