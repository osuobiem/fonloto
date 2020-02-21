<template>
  <div class="col-xl-4 col-lg-8">
    <div class="winners-list">
      <h3>Latest Winners</h3>
      <div class="row">
        <div class="col-xl-12 col-lg-6">
          <div class="Vertical-Slider">
            <div class="single-winner mb-xl-2 mb-lg-0">
              <div class="part-img">
                <img src="~/assets/img/flag-1.jpg" class="flag" alt="" />
              </div>
              <div class="part-text">
                <span class="name">Mukta Marten</span>
                <span class="lottery-subject">Mega Millions / 30-10-2019</span>
                <span class="winning-prize">$299</span>
              </div>
            </div>
            <div class="single-winner">
              <div class="part-img">
                <img src="~/assets/img/flag-2.jpg" class="flag" alt="" />
              </div>
              <div class="part-text">
                <span class="name">John Tamim</span>
                <span class="lottery-subject">Mega Millions / 30-10-2019</span>
                <span class="winning-prize">$568</span>
              </div>
            </div>
            <div class="single-winner mb-xl-2 mb-lg-0">
              <div class="part-img">
                <img src="~/assets/img/flag-3.jpg" class="flag" alt="" />
              </div>
              <div class="part-text">
                <span class="name">Mukta Marten</span>
                <span class="lottery-subject">Mega Millions / 30-10-2019</span>
                <span class="winning-prize">$126</span>
              </div>
            </div>
            <div class="single-winner">
              <div class="part-img">
                <img src="~/assets/img/flag-4.jpg" class="flag" alt="" />
              </div>
              <div class="part-text">
                <span class="name">John Tamim</span>
                <span class="lottery-subject">Mega Millions / 30-10-2019</span>
                <span class="winning-prize">$974</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $('.Vertical-Slider').css('overflow', 'hidden')

    let thizHeight = '460px' //$('.get-thiz-height').height()

    $('.winners-list').css({
      height: thizHeight,
      overflow: 'hidden'
    })

    $('.Vertical-Slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: true,
      arrows: false,
      cssEase: 'linear',
      vertical: true,
      verticalSwiping: true
    })
  }
}
</script>
