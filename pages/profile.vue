<template>
  <div>
    <!-- profile begin -->
    <div class="profile">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-3 col-lg-3">
            <div class="accont-tab">
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <nuxt-link
                  class="nav-link active"
                  id="personal-info-tab"
                  data-toggle="pill"
                  to="/profile"
                  role="tab"
                  aria-selected="true"
                  ><i class="far fa-user"></i> Personal Info</nuxt-link
                >
                <nuxt-link
                  class="nav-link"
                  id="payment-info-tab"
                  data-toggle="pill"
                  to="/profile/bank"
                  role="tab"
                  aria-selected="false"
                  ><i class="fa fa-credit-card"></i> Bank Info</nuxt-link
                >
                <nuxt-link
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  to="/profile/wallet"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                  ><i class="fas fa-tasks"></i> My Wallet</nuxt-link
                >
                <nuxt-link
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  to="/profile/settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                  ><i class="fas fa-cog"></i> Account Settings</nuxt-link
                >
                <nuxt-link
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  to="/profile"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                  ><i class="fas fa-cog"></i> Logout</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-lg-8">
            <div class="tab-content" id="v-pills-tabContent">
              <!-- Child Page -->
              <nuxt-child />
              <!-- End Child Page -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- profile end -->
  </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  layout: 'blue-lay'
}
</script>
