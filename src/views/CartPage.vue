<template>
    <section class="section has-background-light is-clipped">
        <div class="container">
            <div class="has-background-white p-8 p-20-desktop">
                <h2 class="title mb-8 mb-20-tablet">Giỏ Hàng Của Bạn</h2>
                <div class="columns is-multiline is-vcentered">
                    <div class="column is-12 mb-8 mb-0-widescreen">
                        <div class="is-hidden-touch columns is-multiline" style="border-bottom: 1px solid grey;">
                            <div class="column is-6">
                                <h4 class="has-text-grey has-text-weight-bold mb-6" style="font-size: 16px;">Thông tin
                                </h4>
                            </div>
                            <div class="column is-2">
                                <h4 class="has-text-grey has-text-weight-bold mb-6" style="font-size: 16px;">Đơn giá</h4>
                            </div>
                            <div class="column is-2 has-text-centered">
                                <h4 class="has-text-grey has-text-weight-bold mb-6" style="font-size: 16px;">Số lượng
                                </h4>
                            </div>
                            <div class="column is-2">
                                <h4 class="has-text-grey has-text-weight-bold mb-6" style="font-size: 16px;">Tạm tính
                                </h4>
                            </div>
                        </div>
                        <div v-if="countItem">
                            <CartItem v-for="value in listCart" :key="value.id" :value="value" class="border-b"/>
                        </div>
                        <div class="mb-12 py-6" v-else>
                            Chưa có sản phẩm vui lòng thêm vào giỏ hàng
                        </div>
                    </div>
                    <div class="column is-6-widescreen-only"></div>
                    <div class="column is-12 is-6-widescreen is-right">
                        <div class="has-background-info p-6 p-16-desktop">
                            <h3 class="title is-size-3 has-text-white mb-6">Thông Tin</h3>
                            <div class="mb-8 pb-5 is-flex is-justify-content-space-between is-align-items-center"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.3);">
                                <span class="has-text-light">Tổng tiền</span>
                                <span class="subtitle has-text-white has-text-weight-bold">{{formatPrice(getTotal)}} VNĐ</span>
                            </div>
                            <a class="button is-primary is-fullwidth">Thanh  Toán</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import CartItem from '../components/CartItem.vue';
export default {
    components: { CartItem },
    computed:{
        listCart() {
            return this.$store.getters.getListCarts;
        }, 
        countItem() {
            return this.$store.getters.getListCarts.length;
        },
        getTotal() {
                return this.$store.getters.getListCarts.reduce((a, b) => a + (b.price * b.quantity), 0)
        }
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
}
</script>

<style lang="scss" scoped>

</style>