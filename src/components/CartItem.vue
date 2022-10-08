<template>
    <div class="columns is-vcentered is-multiline">
        <div class="column is-6-desktop is-7-tablet">
            <div class="columns is-vcentered is-multiline">
                <div class="column is-4-tablet">
                    <div class="is-flex has-background-light is-justify-content-center is-align-items-center">
                        <img class="image is-fullwidth" style="object-fit: contain;"
                            src="https://wabisabiproject.com/wp-content/uploads/woocommerce-placeholder.png" alt="">
                    </div>
                </div>
                <div class="column is-8">
                    <h3 class="subtitle mb-2 has-text-weight-bold">{{value.name}}</h3>
                    <p class="mb-0 has-text-grey truncate ">{{value.desc}}</p>
                </div>
            </div>
        </div>
        <div class="column is-2 is-hidden-touch">
            <p class="subtitle has-text-info mb-0 has-text-weight-bold">{{formatPrice(value.price)}} VNĐ</p>
            <!-- <span class="has-text-grey" style="text-decoration: line-through;">0</span> -->
        </div>
        <div class="column is-2-desktop is-3-tablet">
            <div class=" is-flex is-align-items-center has-text-weight-bold justify-center w-24 mx-auto border-2 rounded-md">
                <button class="button is-ghost has-text-grey p-0">
                    <svg width="12" height="2" viewbox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.35">
                            <rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect>
                        </g>
                    </svg>
                </button>
                <input class="input px-2 py-4 has-text-centered" style="width: 48px; border: none; box-shadow: none;" type="number"
                    :value=value.quantity>
                <button class="button is-ghost has-text-grey p-0">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.35">
                            <rect x="5" width="2" height="12" fill="currentColor"></rect>
                            <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor">
                            </rect>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <div class="column is-2">
            <p class="subtitle has-text-info has-text-weight-bold has-text-danger">{{formatPrice(totalPrice())}} VNĐ</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        totalPrice(){
            return this.value.price * this.value.quantity;
        }

    }
}
</script>

<style lang="scss" scoped>

</style>