<template>
  <div>
    <Preloader />
    <AppHeader />
    <nuxt />

    <VueInjectJs src="js/jquery.js" />
    <VueInjectJs src="js/popper.min.js" />
    <VueInjectJs src="js/bootstrap.min.js" />
    <VueInjectJs src="js/bootstrap.min.js" />
    <VueInjectJs src="js/plugin.js" />
    <VueInjectJs src="js/TweenMax.js" />
    <VueInjectJs src="js/mousemoveparallax.js" />
    <VueInjectJs src="js/main.js" />
  </div>
</template>

<script>
import VueInjectJs from 'vue-inject-js'

import AppHeader from '@/components/Header'
import Preloader from '@/components/Preloader'

export default {
  components: {
    AppHeader,
    Preloader,
    VueInjectJs
  }
}
</script>

<style>
@import url('~/assets/css/style.css');
@import url('~/assets/css/bootstrap.min.css');
/* @import url('~/assets/css/plugin.css'); */
@import url('~/assets/css/style.css');
@import url('~/assets/css/responsive.css');
</style>
