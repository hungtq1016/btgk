<template>
  <div class="column is-3-desktop is-6-tablet">
    <div class="has-background-white pt-4 px-1 pb-10 is-relative">
      <!-- <span class="is-absolute is-top-0 is-left-0 ml-2 tag is-danger has-text-weight-bold">-10%</span> -->
      <a class="my-2 px-1 is-block" href="#">
        <img class="mx-auto mb-5 image" style="height: 224px; object-fit: contain;"
          src="https://bulma.io/images/placeholders/1280x960.png" alt="">
        <h5 class="title is-size-5 mb-2">{{product.name}}</h5>
        <p>
          <span class="has-text-info is-size-5 has-text-weight-bold">{{formatPrice(product.price)}} VNĐ</span>
          <span class="has-text-grey-dark is-size-7 has-text-weight-normal line-through">{{formatPrice(product.price)}}
            VNĐ</span>
        </p>
      </a>
      <router-link :to="{name: 'product-detail', params: {id : product.id}}" v-if="product.qty>0"
        class="button is-outlined is-info p-0 ml-auto is-flex mr-4" href="#" style="width: 48px; height: 48px;">
        <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" width="2" height="12" fill="currentColor"></rect>
          <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect>
        </svg>
      </router-link>
      <a  v-else disable
        class="button is-danger is-outlined p-0 ml-auto is-flex mr-4" href="#" style="width: 48px; height: 48px;">
        <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" width="2" height="12" fill="currentColor"></rect>
          <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect>
        </svg>
      </a>
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
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>