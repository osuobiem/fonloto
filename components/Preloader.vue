<template>
  <!-- preloader begin -->
  <div class="preloader" v-if="show">
    <div id="nest1"></div>
  </div>
  <!-- preloader end -->
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    start() {
      this.show = true
    },
    finish() {
      this.show = false
    }
  }
}
</script>
