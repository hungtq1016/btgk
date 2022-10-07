<template>
  <div class="column is-3-desktop is-6-tablet">
    <div class="has-background-white pt-4 px-1 pb-10 is-relative">
      <span class="is-absolute is-top-0 is-left-0 ml-2 tag is-danger has-text-weight-bold">-10%</span>
      <a class="my-2 px-1 is-block" href="#">
        <img class="mx-auto mb-5 image" style="height: 224px; object-fit: contain;" src="https://bulma.io/images/placeholders/1280x960.png" alt="">
        <h5 class="title is-size-5 mb-2">{{product.name}}</h5>
        <p>
          <span class="has-text-info is-size-5 has-text-weight-bold">{{formatPrice(product.price)}} VNĐ</span>
          <span class="has-text-grey-dark is-size-7 has-text-weight-normal" style="text-decoration: line-through;">{{formatPrice(product.price)}} VNĐ</span>
        </p>
      </a>
      <router-link :to="{name: 'product-detail', params: {id : product.id}}" class="button is-success p-0 w-40 mr-2 ml-auto is-flex">
        Chi Tiết
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['product'],
        computed: {
            description() {
                return this.product.description.substring(0, 150)
            }
        },
      methods:{
        formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
      }
    }
</script>