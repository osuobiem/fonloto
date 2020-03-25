<template>
  <div>
    <!-- draw begin -->
    <Draw :show_more="false" tweak="margin: 30px 0;" />
    <!-- draw end -->

    <div class="lottery-result pt-0">
      <div class="container">
        <div class="row justify-content-center">
          <LatestWinners />
          <UpcomingDraws />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Draw from '@/components/Draw'
import UpcomingDraws from '@/components/Upcoming-Draws'
import LatestWinners from '@/components/Latest-Winners'

export default {
  components: {
    Draw,
    UpcomingDraws,
    LatestWinners
  },
  layout: 'blue-lay',
  mounted() {
    AOS.init()
  }
}
</script>
