<template>
  <div>
    <Preloader />
    <AppHeader />
    <nuxt />

    <Copyright />
    <MobileNav />

    <VueInjectJs src="js/jquery.js" />
    <VueInjectJs src="js/popper.min.js" />
    <VueInjectJs src="js/bootstrap.min.js" />
    <VueInjectJs src="js/jquery-modal-video.min.js" />
    <VueInjectJs src="js/waypoints.min.js" />
    <VueInjectJs src="js/waypoints.min.js" />
    <VueInjectJs src="js/wow.min.js" />
    <VueInjectJs src="js/jquery.nicescroll.min.js" />
    <VueInjectJs src="js/owl.carousel.min.js" />
    <VueInjectJs src="js/main.js" />
  </div>
</template>

<script>
import VueInjectJs from 'vue-inject-js'

import AppHeader from '@/components/Header'
import Preloader from '@/components/Preloader'
import MobileNav from '@/components/Mobile-Nav'
import Copyright from '@/components/Copyright'

export default {
  components: {
    AppHeader,
    Preloader,
    VueInjectJs,
    MobileNav,
    Copyright
  }
}
</script>

<style>
@import url('~/assets/css/style.css');
@import url('~/assets/css/bootstrap.min.css');
@import url('~/assets/css/animate.css');
@import url('~/assets/css/responsive.css');
@import url('~/assets/css/jquery-jvectormap-2.0.3.css');
@import url('~/assets/css/simple-scrollbar.css');
</style>
