<template>
  <HeaderCom/>
  <RouterView :key="$route.path"/>
  <FooterCom/>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderCom from './components/inc/HeaderCom.vue';
import FooterCom from './components/inc/FooterCom.vue';

</script>
<style scoped>
</style>
