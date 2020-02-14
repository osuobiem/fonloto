<template>
  <div>
    <Banner :page="page" :detail="detail" />
  </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  data() {
    return {
      page: 'FAQ',
      detail: 'Frequently Asked Questions'
    }
  },
  components: {
    Banner
  },
  layout: 'alt-lay'
}
</script>
