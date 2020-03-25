<template>
  <div>
    <div class="breadcrumb-lotters">
      <div class="banner-shape">
        <img src="~/assets/img/svg/banner-shape-1.png" alt="" />
        <img src="~/assets/img/svg/banner-shape-2.png" alt="" />
      </div>
      <div class="container" style="margin-top: 15px">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-6">
            <div class="breadcrumb-content">
              <h2>
                404 <br />
                Page not found
              </h2>
              <ul>
                <li>
                  <nuxt-link to="/"
                    ><i class="fa fa-arrow-circle-left"></i> Go back
                    Home</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- breadcrumb end -->

    <!-- error begin -->
    <div class="error">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8">
            <div class="part-img">
              <img src="~/assets/img/error.png" alt="" />
            </div>
            <div class="part-text">
              <h2>Oops! Seems you're lost</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- error end -->
  </div>
</template>

<script>
export default {
  layout: 'alt-lay',
  mounted() {
    AOS.init()
  }
}
</script>
