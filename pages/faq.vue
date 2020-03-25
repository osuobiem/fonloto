<template>
  <div>
    <Banner :page="page" :detail="detail" />

    <FAQ />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import FAQ from '@/components/FAQ'

export default {
  data() {
    return {
      page: 'FAQ',
      detail: 'Frequently Asked Questions'
    }
  },
  components: {
    Banner,
    FAQ
  },
  layout: 'alt-lay',
  mounted() {
    AOS.init()
  }
}
</script>
