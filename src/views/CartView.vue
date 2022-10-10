<template>
    <BreadcrumbCom target="Giỏ Hàng"/>
    <div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <div class="col-12 table-responsive mb-5">
                <table class="table table-bordered text-center mb-0">
                    <thead class="bg-secondary text-dark">
                        <tr>
                            <th>Sản Phẩm</th>
                            <th>Đơn Giá</th>
                            <th>Số Lượng</th>
                            <th style="width:300px">Thành Tiền</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody class="align-middle">"
                        <CartItem v-for="item in listCart" :key="item.id" :cart="item"/>
                    </tbody>
                </table>
            </div>
        </div>
        <TotalPrice :total="getTotal"/>
    </div>
</template>

<script>
import CartItem from "../components/cart/CartItem.vue";
import TotalPrice from "../components/cart/TotalPrice.vue";
import BreadcrumbCom from "../components/inc/BreadcrumbCom.vue";
    export default {
    components: { CartItem, TotalPrice, BreadcrumbCom },
    computed:{
        listCart() {
            return this.$store.getters.getListCarts;
        }, 
        getTotal() {
                return this.$store.getters.getListCarts.reduce((a, b) => a + (b.price * b.quantity), 0)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>