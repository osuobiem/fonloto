<template>
  <div>
    <Banner :page="page" :detail="detail" />

    <!-- choosing reason begin -->
    <div
      class="choosing-reason"
      id="about-us"
      style="margin: 10px 0;"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div class="container">
        <div
          class="row justify-content-xl-around justify-content-lg-around justify-content-start"
        >
          <div class="col-xl-5 col-lg-5">
            <div class="choosing-reason-list">
              <div class="ill-shape-set">
                <img src="~/assets/img/svg/circle-1.png" alt="" />
                <img src="~/assets/img/svg/circle-1.png" alt="" />
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-sm-6">
                  <div class="single-reason">
                    <div class="part-icon">
                      <img src="~/assets/img/svg/money2.svg" alt="" />
                    </div>
                    <div class="part-text">
                      <h3>Instant Payment</h3>
                      <p>
                        You get paid the second you win. We pay our winners
                        immediately after the draw.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-sm-6">
                  <div class="single-reason">
                    <div class="part-icon">
                      <img src="~/assets/img/svg/debit-card.svg" alt="" />
                    </div>
                    <div class="part-text">
                      <h3>Secure Payment</h3>
                      <p>
                        All payments are made using secure transfer and are
                        protected by industry encryption.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-sm-6">
                  <div class="single-reason">
                    <div class="part-icon">
                      <img src="~/assets/img/svg/support.png" alt="" />
                    </div>
                    <div class="part-text">
                      <h3>24/7 Support</h3>
                      <p>
                        Dedicated customer service manager is always there for
                        you, ready to answer any questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xl-5 col-lg-5 col-md-10 d-xl-flex d-lg-flex d-block align-items-center"
          >
            <div class="choosing-text">
              <div class="ill-shape-set-2">
                <img src="~/assets/img/svg/circle-1.png" alt="" />
                <img src="~/assets/img/svg/circle-1.png" alt="" />
              </div>
              <h2>About Us</h2>
              <p></p>
              <p>
                <strong>Fonloto</strong> is a private enterprice that provides a
                platform that gives users the opportunity to make money weekly
                through lottery draws.<br />Each week one randomly selected user
                wins the prize money.
              </p>
              <p>Join us today and start winning!</p>
              <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- choosing reason end -->
  </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  data() {
    return {
      page: 'About Us',
      detail: 'Who we are'
    }
  },
  components: {
    Banner
  },
  layout: 'alt-lay',
  mounted() {
    AOS.init()
  }
}
</script>
