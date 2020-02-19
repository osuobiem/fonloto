<template>
  <div>
    <!-- draw begin -->
    <Draw :show_more="false" tweak="margin: 30px 0;" />
    <!-- draw end -->
  </div>
</template>

<script>
import Draw from '@/components/Draw'

export default {
  components: {
    Draw
  },
  layout: 'blue-lay'
}
</script>
