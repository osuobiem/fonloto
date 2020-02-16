<template>
  <!-- register begin-->
  <div class="form style-2" style="padding: 50px 0 !important;">
    <div class="container">
      <div class="row" style="justify-content: center">
        <div class="col-xl-6 col-lg-6">
          <form>
            <div class="row">
              <div class="col-xl-12 col-lg-12">
                <div class="form-group">
                  <label for="InputMail"
                    >E-mail or Phone<span class="requred">*</span></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="InputMail"
                    placeholder="E-mail or Phone Number *"
                    required
                  />
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
                    id="InputPassword"
                    placeholder="Password *"
                    required
                  />
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
