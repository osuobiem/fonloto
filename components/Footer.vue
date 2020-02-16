<template>
  <!-- footer begin -->
  <div class="footer">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-xl-4 col-lg-4 col-md-5">
          <div class="footer-widget">
            <!-- Flutterwave and Paystack logos Here -->
          </div>
        </div>
        <div
          class="col-xl-2 col-lg-2 col-sm-4 col-md-2"
          style="width: fit-content"
        >
          <div class="footer-widget">
            <div class="link-widget">
              <h3>Quick Links</h3>
              <ul>
                <li v-for="(link, index) in links" :key="index">
                  <nuxt-link v-if="link.nuxt" :to="link.url">{{
                    link.name
                  }}</nuxt-link>
                  <a v-else :href="link.url">{{ link.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="col-xl-3 col-lg-3 col-sm-4 col-md-3"
          style="width: fit-content"
        >
          <div class="footer-widget">
            <div class="link-widget">
              <h3>Follow us on</h3>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- footer end -->
</template>

<script>
export default {
  props: ['links']
}
</script>
