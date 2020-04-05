<template>
  <!-- register begin-->
  <div
    class="form style-2"
    style="padding: 50px 0 !important;"
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <div class="container">
      <div class="row" style="justify-content: center">
        <div class="col-xl-6 col-lg-6 col-md-8">
          <form>
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
              <div class="col-xl-12 col-lg-12">
                <div class="form-group">
                  <label for="InputMail"
                    >E-mail or Phone<span class="requred">*</span></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="email_phone"
                    placeholder="E-mail or Phone Number *"
                    required
                    @change="update('email_phone')"
                  />
                  <span class="field-err d-none" id="email_phoneerr"></span>
                </div>
              </div>
              <div class="col-xl-12 col-lg-12">
                <div class="form-group">
                  <label for="InputPassword"
                    >Password<span class="requred">*</span></label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password *"
                    required
                    @change="update('password')"
                  />
                  <span class="field-err d-none" id="passworderr"></span>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12">
                <div class="form-group mb-0 checkbox">
                  <div class="form-check pl-0">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck1"
                    />
                    <label class="form-check-label" for="gridCheck1">
                      Remember Me
                    </label>
                  </div>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12">
                <div class="row d-flex">
                  <div class="col-xl-6 col-lg-6">
                    <button type="submit" class="login-button">Login</button>
                  </div>
                  <div class="col-xl-6 col-lg-6 d-flex align-items-center">
                    <a href="#" class="forgetting-password">Forgot Password?</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-6 col-md-8">
          <div class="section-title text-center">
            <p>
              Don't have an account?
              <nuxt-link to="/join/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- register end -->
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email_phone: '',
        password: ''
      }
    }
  },

  methods: {
    login() {
      this.load()
      this.$store
        .dispatch('login', {
          data: this.credentials
        })
        .then(res => {
          this.load(false)
          this.success(res.message)
        })
        .catch(err => {
          this.load(false)
          this.error(err.message)
        })
    },
    update(el) {
      let value = $('#' + el).val()
      this.credentials[el] = value
    },
    load(load = true) {
      if (load) {
        $('#logbtn').attr('disabled', true)
        $('#logloader').removeAttr('style')
      } else {
        $('#logloader').attr('style', 'display: none')
        $('#logbtn').removeAttr('disabled')
      }
    },
    error(message) {
      if (typeof message == 'string') {
        $('#logerr').html(message)
        $('#logerr').removeClass('d-none')
        $('#logerr').addClass('animated bounceInUp')

        setTimeout(() => {
          $('#logerr').addClass('d-none')
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
    success(message) {
      $('#logsuc').html(message)
      $('#logsuc').removeClass('d-none')
      $('#logsuc').addClass('animated fadeInDown')

      setTimeout(() => {
        $('#logsuc').addClass('d-none')
      }, 3000)
    }
  }
}
</script>
