<template>
  <div id="home">
    <!-- banner begin -->
    <div class="banner" data-aos="fade-up" data-aos-duration="700">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-9 col-md-8">
            <div class="banner-content" style="padding: 70px 15px">
              <span v-html="header.tagline"></span>
              <span v-html="header.intro"></span>
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
    <Draw :show_more="true" tweak="" />
    <!-- draw end -->

    <!-- how to works begin -->
    <div class="how-to-works" data-aos="fade-up" data-aos-duration="1500" id="how-it-works">
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
                      Sign up and buy a ticket. This will give you an opportunity to win big.
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
                        <span class="title">Sign up</span>
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

    <!-- choosing reason begin -->
    <div class="choosing-reason" id="about-us" data-aos="fade-up" data-aos-duration="1500">
        <div class="container">
            <div class="row justify-content-xl-around justify-content-lg-around justify-content-start">
                <div class="col-xl-5 col-lg-5">
                    <div class="choosing-reason-list">
                        <div class="ill-shape-set">
                            <img src="~/assets/img/svg/circle-1.png" alt="">
                            <img src="~/assets/img/svg/circle-1.png" alt="">
                        </div>
                        <div class="row">
                            
                            <div class="col-xl-12 col-lg-12 col-sm-6">
                                <div class="single-reason">
                                    <div class="part-icon">
                                        <img src="~/assets/img/svg/money2.svg" alt="">
                                    </div>
                                    <div class="part-text">
                                        <h3>Instant Payment</h3>
                                        <p>You get paid the second you win. We pay our winners immediately after the draw.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-sm-6">
                                <div class="single-reason">
                                    <div class="part-icon">
                                        <img src="~/assets/img/svg/debit-card.svg" alt="">
                                    </div>
                                    <div class="part-text">
                                        <h3>Secure Payment</h3>
                                        <p>All payments are made using secure transfer and are protected by industry encryption.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-sm-6">
                                <div class="single-reason">
                                    <div class="part-icon">
                                        <img src="~/assets/img/svg/support.png" alt="">
                                    </div>
                                    <div class="part-text">
                                        <h3>24/7 Support</h3>
                                        <p>Dedicated customer service manager is always there for you, ready to answer any questions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-10 d-xl-flex d-lg-flex d-block align-items-center">
                    <div class="choosing-text">
                        <div class="ill-shape-set-2">
                            <img src="~/assets/img/svg/circle-1.png" alt="">
                            <img src="~/assets/img/svg/circle-1.png" alt="">
                        </div>
                        <h2>About Us</h2>
                        <p></p>
                         <span v-html="about_us"></span>
                        <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- choosing reason end -->

    <!-- contact us begin -->
    <Contact />
    <!-- contact us end -->
  </div>
</template>

<script>
import Draw from '@/components/Draw'
import Contact from '@/components/Contact'

export default {
  components: {
    Draw,
    Contact
  },
  layout: 'main-lay',
  computed: {
    header() {
      return this.$store.getters.home_header
    },
    about_us() {
      return this.$store.getters.about_us 
    }
  },
  mounted() {
    let html = document.getElementsByTagName('html')[0]
    html.setAttribute('style', 'scroll-behavior: smooth')
  },
  beforeDestroy() {
    let html = document.getElementsByTagName('html')[0]
    html.setAttribute('style', 'scroll-behavior: unset')
  }
}
</script>