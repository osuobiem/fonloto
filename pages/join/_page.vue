<template>
  <div>
    <Banner :page="page" :detail="detail" />
    <Login v-if="!register" />
    <Register v-else />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Register from '@/components/Register'
import Login from '@/components/Login'

export default {
  data() {
    return {
      page: this.$route.params.page == 'register' ? 'Register' : 'Login',
      detail:
        this.$route.params.page == 'register'
          ? 'First step to your win'
          : 'Login and continue winning',
      register: this.$route.params.page == 'register' ? true : false
    }
  },
  components: {
    Banner,
    Register,
    Login
  },
  layout: 'alt-lay'
}
</script>
