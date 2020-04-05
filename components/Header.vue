<template>
  <!-- header begin -->
  <div class="header" id="header" style="margin-top: 15px">
    <div class="container">
      <div class="menu-bar">
        <div class="row">
          <div
            class="col-xl-3 col-lg-3 d-xl-flex d-lg-flex d-block align-items-center"
          >
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-7">
                <div class="logo">
                  <nuxt-link to="/">
                    <img
                      style="max-width: 85%"
                      src="~/assets/img/logo.png"
                      alt=""
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="d-xl-none d-lg-none d-block col-5">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                ></button>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 for-lottery">
            <div class="mainmenu">
              <nav class="navbar navbar-expand-lg for-lottery">
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/draws">Draws</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#how-it-works">How It Works</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#about-us">About Us</a>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/faq">F.A.Q</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#contact-us">Contact Us</a>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link sign-up" to="/join/login"
                        >Login</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- header end -->
</template>
