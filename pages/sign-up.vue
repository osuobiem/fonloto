<template>
  <div>
    <Banner :page="page" :detail="detail" />

    <!-- register begin-->
    <div class="form style-2" style="padding: 50px 0 !important;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-6 col-md-8">
            <div class="section-title text-center">
              <h2>Sign Up to Play</h2>
              <p>Join <strong>Fonloto</strong>. Target success today!</p>
            </div>
          </div>
        </div>
        <div class="row" style="justify-content: center">
          <div class="col-xl-8 col-lg-8">
            <form>
              <div class="row">
                <div class="col-xl-12 col-lg-12">
                  <div class="form-group">
                    <label for="InputFirstname"
                      >Full Name<span class="requred">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="InputFullname"
                      placeholder="Fullname *"
                      required
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div class="form-group">
                    <label for="InputMail"
                      >E-mail<span class="requred">*</span></label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="InputMail"
                      placeholder="E-mail *"
                      required
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div class="form-group">
                    <label for="InputPhone"
                      >Phone<span class="requred">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="InputPhone"
                      placeholder="Phone Number *"
                      required
                    />
                  </div>
                </div>
                <div class="col-xl-12 col-lg-12">
                  <div class="form-group">
                    <label for="InputPassword"
                      >Password<span class="requred">*</span></label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="InputPassword"
                      placeholder="Password *"
                      required
                    />
                  </div>
                </div>

                <div class="col-xl-6 col-lg-6">
                  <button type="submit" class="submit-button">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- register end -->
  </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  data() {
    return {
      page: 'Sign Up',
      detail: 'First step to your win'
    }
  },
  components: {
    Banner
  },
  layout: 'alt-lay'
}
</script>
