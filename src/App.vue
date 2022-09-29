<template>
  <Navbar/>
  <router-view />
  <FooterSite/>
</template>

<script >
import { RouterView } from 'vue-router';
import Navbar from './components/NavigationSite.vue';
import FooterSite from './components/FooterSite.vue';

export default{
  name : 'App',
  components: { Navbar, FooterSite }
}
</script>

<style lang="scss" scoped>

</style>