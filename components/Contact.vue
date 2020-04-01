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
              <div
                class="alert alert-danger d-none"
                role="alert"
                id="conerr"
                style="text-align: center"
              ></div>
              <div
                class="alert alert-success d-none"
                role="alert"
                id="consuc"
                style="text-align: center"
              ></div>
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <span
                    id="subjecterr"
                    class="d-none"
                    style="font-size: 12px; color: red"
                  ></span>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    required
                    @change="update('subject')"
                    @focus="removeErr('subject')"
                  />

                  <span
                    id="nameerr"
                    class="d-none"
                    style="font-size: 12px; color: red"
                  ></span>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    required
                    @change="update('name')"
                    @focus="removeErr('name')"
                  />

                  <span
                    id="emailerr"
                    class="d-none"
                    style="font-size: 12px; color: red"
                  ></span>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    @change="update('email')"
                    @focus="removeErr('email')"
                  />
                </div>
                <div class="col-xl-6 col-lg-6">
                  <span
                    id="messageerr"
                    class="d-none"
                    style="font-size: 12px; color: red"
                  ></span>
                  <textarea
                    placeholder="Message here"
                    style="height: 225px"
                    id="message"
                    required
                    @change="update('message')"
                    @focus="removeErr('message')"
                  ></textarea>
                </div>
              </div>

              <button type="submit" style="margin-top: 15px" id="conbtn">
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
      this.load()
      this.$store
        .dispatch('saveContact', {
          data: this.contact
        })
        .then(res => {
          this.load(false)
          this.sent(res.message)
        })
        .catch(err => {
          this.load(false)
          this.error(err.message)
        })
    },
    update(el) {
      let value = $('#' + el).val()
      this.contact[el] = value
    },
    load(load = true) {
      if (load) {
        $('#conbtn').attr('disabled', true)
        $('#conloader').removeAttr('style')
      } else {
        $('#conloader').attr('style', 'display: none')
        $('#conbtn').removeAttr('disabled')
      }
    },
    error(message) {
      if (typeof message == 'string') {
        $('#conerr').html(message)
        $('#conerr').removeClass('d-none')

        setTimeout(() => {
          $('#conerr').addClass('d-none')
        }, 4000)
      } else {
        for (let err in message) {
          if (message[err].length > 1) {
            message[err].forEach(element => {
              $('#' + err + 'err').append(message[err] + '<br>')
            })
          } else {
            $('#' + err + 'err').html(message[err])
          }
          $('#' + err + 'err').removeClass('d-none')
        }
      }
    },
    removeErr(el) {
      $('#' + el + 'err').addClass('d-none')
    },
    sent(message) {
      $('#consuc').html(message)
      $('#consuc').removeClass('d-none')

      setTimeout(() => {
        $('#consuc').addClass('d-none')
      }, 3000)
    }
  }
}
</script>
