<template>
  <div>
    <!-- banner begin -->
    <div class="banner">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-9 col-md-8">
            <div class="banner-content" style="padding: 70px 15px">
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

    <!-- draw begin -->
    <Draw />
    <!-- draw end -->

    <!-- how to works begin -->
    <div class="how-to-works">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-4">
            <div class="part-img">
              <img src="~/assets/img/how-to-works-bg.png" alt="" />
              <div class="ill-shape">
                <img src="~/assets/img/how-to-works-shape.png" alt="" />
              </div>
            </div>
          </div>
          <div
            class="col-xl-7 col-lg-8 d-xl-flex d-lg-flex d-block align-items-center"
          >
            <div class="working-list">
              <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-10 col-md-8">
                  <div class="section-title text-center">
                    <h2>How It Works</h2>
                    <p>
                      Sign up/in and buy a ticket. You will know if you've won
                      after the raffle draw.
                    </p>
                  </div>
                </div>
              </div>
              <div class="working-list-content">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 col-sm-6">
                    <div class="single-system">
                      <div class="system-content">
                        <div class="number">01</div>
                        <span class="title">Sign up/in</span>
                      </div>
                      <div class="hover-content">
                        <p>
                          Create an account or login to your already existing
                          account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-sm-6">
                    <div class="single-system">
                      <div class="system-content">
                        <div class="number">02</div>
                        <span class="title">Buy Ticket</span>
                      </div>
                      <div class="hover-content">
                        <p>Buy a ticket to qualify for the raffle draw.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-sm-6">
                    <div class="single-system">
                      <div class="system-content">
                        <div class="number">03</div>
                        <span class="title">Win Lottery</span>
                      </div>
                      <div class="hover-content">
                        <p>
                          We will notify you by e-mail or phone if you win. You
                          will receive your winnings immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- how to works end -->
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
