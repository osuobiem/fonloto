<template>
  <!-- header begin -->
  <div class="header style-4 user-panel">
    <div class="container">
      <div class="menu-bar">
        <div class="container">
          <div class="menubar-relative">
            <div class="row justify-content-between">
              <div
                class="col-xl-2 col-lg-2 d-xl-flex d-lg-flex d-block align-items-center"
              >
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-7">
                    <div class="logo">
                      <a href="index.html">
                        <img src="../assets/img/logo.png" alt="" />
                      </a>
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
              <div class="col-xl-7 col-lg-7 for-lottery">
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
                          <nuxt-link class="nav-link" to="/">Draws</nuxt-link>
                        </li>
                        <li class="nav-item">
                          <nuxt-link class="nav-link" to="/about-us"
                            >About Us</nuxt-link
                          >
                        </li>
                        <li class="nav-item">
                          <nuxt-link class="nav-link" to="/faq"
                            >F.A.Q</nuxt-link
                          >
                        </li>
                        <li class="nav-item">
                          <nuxt-link class="nav-link" to="/contact"
                            >Contact Us</nuxt-link
                          >
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div
                class="col-xl-2 col-lg-3 d-xl-flex d-lg-flex d-none d-lg-block align-items-center"
              >
                <div class="nav-item nav-profile">
                  <div class="profile-bar">
                    <span class="part-name">
                      Firstname
                    </span>
                    <span class="part-pic">
                      <img src="~/assets/img/testi-user-2.jpg" alt="" />
                    </span>
                  </div>
                  <div class="user-menu">
                    <ul>
                      <li>
                        <a href="profile.html"> Profile</a>
                      </li>
                      <li>
                        <a href="#">
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- header end -->
</template>
