<template>
  <div>
    <!-- copyright begin -->
    <div class="copyright">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-8">
            <p>Copyright © {{ year }}; All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
    <!-- copyright end -->
  </div>
</template>

<script>
export default {
  computed: {
    year: () => {
      let now = new Date()
      return now.getFullYear()
    }
  }
}
</script>
