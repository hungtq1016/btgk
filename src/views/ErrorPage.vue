<template>
    <section class="section is-medium">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column has-text-centered">
                    <h1 class="title">404 Page Not Found</h1>
                    <p class="subtitle">Không thể truy cập trang cần tìm. Vui lòng trở lại trang chủ</p>
                    <router-link to="/" class="button is-info">Trang Chủ</router-link>
                </div>
                <div class="column has-text-centered">
                    <img src="https://thanhbinhpc.com/wp-content/uploads/2019/03/sua-loi-404-tren-may-tinh.1PNG-1-768x461.png" />
                </div>
            </div>
        </div>
    </section>
</template>

<script >
    export default{
          name: 'error'  
    };
</script>

<style lang="scss" scoped>

</style>