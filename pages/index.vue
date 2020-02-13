<template>
  <div>
    <!-- banner begin -->
    <div class="banner">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-9 col-md-8">
            <div class="banner-content">
              <h1>
                Play Now,<br />
                Laugh Forever!
              </h1>
              <p>
                Give yourself the gift of a dream.<br />Buy a ticket today and
                stand a chance to win big.<br />
                <strong>Give us the opportunity to change your life.</strong>
              </p>
              <a href="#" class="banner-button">Play Now</a>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 d-xl-flex d-xl-flex align-items-center">
            <div class="part-img">
              <img src="~/assets/img/banner-img.png" alt="" />
              <div class="ill-shape-set">
                <img src="~/assets/img/svg/ill-1.png" alt="" />
                <img src="~/assets/img/svg/ill-2.png" alt="" />
                <img src="~/assets/img/svg/ill-3.png" alt="" />
                <img src="~/assets/img/svg/ill-4.png" alt="" />
              </div>
              <div class="ill-shape-set-2">
                <img src="~/assets/img/svg/ill-1.png" alt="" />
                <img src="~/assets/img/svg/ill-2.png" alt="" />
                <img src="~/assets/img/svg/ill-3.png" alt="" />
                <img src="~/assets/img/svg/ill-4.png" alt="" />
              </div>
              <div class="ill-shape-1">
                <img src="~/assets/img/svg/ill-5.png" alt="" />
              </div>
              <div class="ill-shape-2">
                <img src="~/assets/img/svg/ill-5.png" alt="" />
              </div>
              <div class="ill-shape-3">
                <img src="~/assets/img/svg/ill-5.png" alt="" />
              </div>
              <div class="ill-shape-4">
                <img src="~/assets/img/svg/ill-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- banner end -->

    <Draw />
  </div>
</template>

<script>
import Draw from '@/components/Draw'

export default {
  components: {
    Draw
  },
  layout: 'main-lay'
}
</script>
