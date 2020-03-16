<template>
  <div>
    <AppHeader />

    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
      duration="500"
    >
      <nuxt />
    </transition>

    <AppFooter :links="links" />
    <Copyright />
    <MobileNav />
  </div>
</template>

<script>
import AppHeader from '@/components/Blue-Header'
import MobileNav from '@/components/Mobile-Nav'
import Copyright from '@/components/Copyright'
import AppFooter from '@/components/Footer'

export default {
  data() {
    return {
      links: [
        { name: 'Home', nuxt: true, url: '/' },
        { name: 'Draws', nuxt: false, url: '/draws' },
        { name: 'About Us', nuxt: true, url: '/about-us' },
        { name: 'F.A.Q', nuxt: true, url: '/faq' },
        { name: 'Contact Us', nuxt: true, url: '/contact' },
        { name: 'Deposit', nuxt: false, url: '/deposit' }
      ]
    }
  },
  components: {
    AppHeader,
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
