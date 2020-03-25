<template>
  <div>
    <Banner :page="page" :detail="detail" />
    <Contact />
  </div>
</template>

<script>
import Contact from '@/components/Contact'
import Banner from '@/components/Banner'

export default {
  data() {
    return {
      page: 'Contact Us',
      detail: 'Get in touch with us'
    }
  },
  components: {
    Contact,
    Banner
  },
  layout: 'alt-lay',
  mounted() {
    AOS.init()
  }
}
</script>
