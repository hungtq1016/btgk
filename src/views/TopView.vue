<template>
    <BannerCom />
    <CategoryCom />
    <ListItem title="Thịnh Hành" view="date" :isGreater="false" :max="8"/>
    <EmailCom />
    <ListItem title="Giảm Giá" view="discount" :isGreater="true" :max="8"/>
</template>

<script>
import BannerCom from '../components/inc/BannerCom.vue';
import CategoryCom from '../components/product/CategoryCom.vue';
import ListItem from '../components/product/ListItem.vue';
import EmailCom from '../components/inc/EmailCom.vue';
export default {
    components: { BannerCom, CategoryCom, ListItem, EmailCom },
}
</script>

<style lang="scss" scoped>

</style>