<template>
  <!-- contact begin -->
  <div class="contact" id="contact-us">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-10 col-md-12">
          <div class="contact-form">
            <h2>Get In Touch</h2>
            <p>
              If you have any questions or queries our helpful support <br />
              team will be more than happy to assist.
            </p>
            <form
              id="contact-form"
              method="POST"
              @submit.prevent="sendMessage()"
            >
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    @change="update('subject')"
                  />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    @change="update('name')"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    @change="update('email')"
                  />
                </div>
                <div class="col-xl-6 col-lg-6">
                  <textarea
                    placeholder="Message here"
                    style="height: 225px"
                    name="message"
                    id="message"
                    required
                    @change="update('message')"
                  ></textarea>
                </div>
              </div>

              <button type="submit" style="margin-top: 15px">
                Send Message
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                  id="conloader"
                  style="display: none"
                ></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    sendMessage() {
      this.$store
        .dispatch('saveContact', {
          data: this.contact
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    update(el) {
      let value = $('#' + el).val()
      this.contact[el] = value
    }
  }
}
</script>
