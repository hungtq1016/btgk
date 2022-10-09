<template>
    <div class="container">
      <nav class="navbar my-2" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item" ><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/></router-link>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>              
              Trang chủ
            </router-link>
            <router-link to="/about" class="navbar-item">About</router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <router-link to="/products" class="navbar-link">Tất cả sản phẩm</router-link>
              <div class="navbar-dropdown is-right" >
                  <router-link to="/product" class="navbar-item">Thêm sản phẩm</router-link>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <search></search>
            <div class="navbar-item has-dropdown is-hoverable">
              <router-link to="/cart" class="navbar-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Giỏ Hàng <span class="ml-2 text-lg">({{countItem}})</span>
              </router-link>
      
              <div class="navbar-dropdown is-right" v-if="countItem">
                <mini-cart v-for="item in listCart" :key="item.id" :item="item"/>
              </div>
              <div class="navbar-dropdown is-right" v-else>
                  <router-link to="/" class="navbar-item">Chưa có hàng trong giỏ! Đặt hàng ngay</router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
import MiniCart from './MiniCart.vue';
import Search from './Search.vue';
    export default{
    computed: {
        countItem() {
            return this.$store.getters.getListCarts.length;
        },
        listCart() {
            return this.$store.getters.getListCarts;
        }, 
    },
    components: { MiniCart, Search }
}
</script>

<style lang="scss" scoped>

</style>