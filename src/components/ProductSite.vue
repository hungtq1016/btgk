<template>
  <div class="column is-one-quarter is-multiline is-mobile">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{product.name}}</p>
            <p class="subtitle is-6">{{formatPrice(product.price)}} VNĐ</p>
          </div>
        </div>
        <div class="content">
          {{product.desc}}
          <div>
            {{product.rate}}
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item button is-danger is-light">Yêu Thích</a>
        <router-link :to="{name: 'product-detail', params: {id : product.id}}" class="card-footer-item button is-success">Thêm</router-link>
      </footer>
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