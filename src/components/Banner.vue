<template>
    <vueper-slides fade :touchable="false">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :title="slide.title"
          :content="slide.content" />
      </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
    export default {
        data(){
            return{
                slides: [
                {
                    title: '',
                    content: '',
                    image: 'https://antoniandre.github.io/vueper-slides/images/crater-lake-oregon-usa.jpg'
                },
                {
                    title: '',
                    content: '',
                    image: 'https://antoniandre.github.io/vueper-slides/images/el-teide-volcano-spain.jpg'
                },
                ]
            }
        },
        components: { VueperSlides, VueperSlide },
    }
</script>

<style lang="scss" scoped>

</style>