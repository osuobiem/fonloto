<template>
  <div>
    <Banner :page="page" :detail="detail" />
    <SignUp />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import SignUp from '@/components/SignUp'

export default {
  data() {
    return {
      page: 'Sign Up',
      detail: 'First step to your win'
    }
  },
  components: {
    Banner,
    SignUp
  },
  layout: 'alt-lay'
}
</script>
