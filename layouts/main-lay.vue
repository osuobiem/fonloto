<template>
  <div>
    <!-- <Preloader /> -->
    <AppHeader />

    <nuxt />

    <AppFooter :links="links" />
    <Copyright />
    <MobileNav />

    <VueInjectJs src="js/jquery.js" />
    <VueInjectJs src="js/popper.min.js" />
    <VueInjectJs src="js/bootstrap.min.js" />
    <VueInjectJs src="js/jquery-modal-video.min.js" />
    <VueInjectJs src="js/waypoints.min.js" />
    <VueInjectJs src="js/wow.min.js" />
    <VueInjectJs src="js/jquery.nicescroll.min.js" />
    <VueInjectJs src="js/owl.carousel.min.js" />
    <VueInjectJs src="js/main.js" />
    <VueInjectJs src="js/custom/index.js" />
  </div>
</template>

<script>
import VueInjectJs from 'vue-inject-js'

import AppHeader from '@/components/Header'
import MobileNav from '@/components/Mobile-Nav'
import Copyright from '@/components/Copyright'
import AppFooter from '@/components/Footer'

export default {
  data() {
    return {
      links: [
        { name: 'Home', nuxt: true, url: '/' },
        { name: 'Draws', nuxt: false, url: '/draws' },
        { name: 'About Us', nuxt: false, url: '/#about-us' },
        { name: 'F.A.Q', nuxt: false, url: '/faq' },
        { name: 'Contact Us', nuxt: false, url: '/#contact-us' },
        { name: 'Deposit', nuxt: false, url: '/deposit' }
      ]
    }
  },
  components: {
    AppHeader,
    VueInjectJs,
    MobileNav,
    Copyright,
    AppFooter
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
