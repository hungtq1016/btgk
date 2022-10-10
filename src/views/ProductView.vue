<template>
    <BreadcrumbCom target="Tất Cả Sản Phẩm"/>
    <div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <!-- Shop Sidebar Start -->
            <FilterCom/>
            <!-- Shop Sidebar End -->
            <!-- Shop Product Start -->
            <GridCom/>
            <!-- Shop Product End -->
        </div>
    </div>
</template>

<script>
import BreadcrumbCom from "../components/inc/BreadcrumbCom.vue";
import FilterCom from "../components/product/FilterCom.vue";
import GridCom from "../components/product/GridCom.vue";
    export default {
    components: { BreadcrumbCom, FilterCom, GridCom }
}
</script>

<style lang="scss" scoped>

</style>