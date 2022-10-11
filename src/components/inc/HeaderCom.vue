<template>
    <header>
        <div class="container-fluid">
            <div class="row align-items-center py-3 px-xl-5">
                <div class="col-lg-3 d-none d-lg-block">
                    <router-link to="/" class="text-decoration-none">
                        <h1 class="m-0 display-5 font-weight-semi-bold"><span
                                class="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </router-link>
                </div>
                <SearchCom />
                <div class="col-lg-3 col-6 text-right">
                    <a href="" class="btn border">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <span class="badge">0</span>
                    </a>
                    <router-link to="/carts" class="btn border">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span class="badge">{{countItem}}</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="container-fluid mb-5">
            <div class="row border-top px-xl-5">
                <div class="col">
                    <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <router-link to="/" class="text-decoration-none d-block d-lg-none">
                            <h1 class="m-0 display-5 font-weight-semi-bold"><span
                                    class="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </router-link>
                        <button type="button" class="navbar-toggler" data-toggle="collapse"
                            data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0">
                                <router-link to="/" class="nav-item nav-link active">Trang Chủ</router-link>
                                <router-link to="/products" class="nav-item nav-link">Sản Phẩm</router-link>
                                <router-link to="/about" class="nav-item nav-link">Thông Tin </router-link>
                            </div>

                            <div class="navbar-nav ml-auto py-0" v-if="userCookie.length != 0">
                                <div class="nav-item nav-link"><b>Xin chào: </b>{{userCookie.username}}</div>
                                <a @click="logout" class="nav-item nav-link">Đăng Xuất</a>
                            </div>
                            <div class="navbar-nav ml-auto py-0" v-else>
                                <router-link to="/login" class="nav-item nav-link">Đăng Nhập</router-link>
                                <router-link to="/register" class="nav-item nav-link">Đăng Ký</router-link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import SearchCom from './SearchCom.vue';
export default {
    data() {
        return {
            userCookie: []
        }
    },
    computed: {
        countItem() {
            return this.$store.getters.getListCarts.length;
        },
        test() {
            return this.$store.state.user
        }
    },
    mounted() {
        this.$store.dispatch("getProducts");
    },
    created() {
        if (this.$cookies.get('user')) {
            this.userCookie = this.$cookies.get('user')
        }

    },
    methods: {
        logout() {
            this.$cookies.remove("user");
            this.$router.push('login')
        }
    },
    components: { SearchCom }
}
</script>

<style lang="css" scoped>

</style>