<template>
  <!-- breadcrumb begin -->
  <div class="breadcrumb-lotters">
    <div class="banner-shape">
      <img src="~/assets/img/svg/banner-shape-1.png" alt="" />
      <img src="~/assets/img/svg/banner-shape-2.png" alt="" />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-6">
          <div class="breadcrumb-content">
            <h2>{{ page }}</h2>
            <ul>
              <li>
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- breadcrumb end -->
</template>

<script>
export default {
  props: ['page', 'detail']
}
</script>
