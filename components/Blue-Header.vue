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
                class="col-xl-2 col-lg-3 d-xl-flex d-lg-flex d-block align-items-center"
              >
                <div class="nav-item nav-profile">
                  <div class="profile-bar">
                    <span class="part-name">
                      Hi, Ubaidah
                    </span>
                    <span class="part-pic">
                      <img src="../assets/img/testi-user-2.jpg" alt="" />
                    </span>
                  </div>
                  <div class="user-menu">
                    <ul>
                      <li>
                        <a href="profile.html">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fal"
                            data-icon="user-circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            class="svg-inline--fa fa-user-circle fa-w-16 fa-fw fa-2x"
                          >
                            <path
                              fill="currentColor"
                              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"
                              class=""
                            ></path>
                          </svg>
                          Profile</a
                        >
                      </li>
                      <li>
                        <a href="index.html">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fal"
                            data-icon="steering-wheel"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            class="svg-inline--fa fa-steering-wheel fa-w-16 fa-fw fa-2x"
                          >
                            <path
                              fill="currentColor"
                              d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 32c119.1 0 215.99 96.89 216 215.98H358.38C350.94 219.52 318.64 192 280 192h-64c-38.64 0-70.94 27.52-78.38 63.98H32C32.01 136.89 128.9 40 248 40zm-5.66 299.7l-67.5-67.48c-4.62-4.62-5.94-11.6-3.55-17.68 7-17.86 24.41-30.54 44.71-30.54h64c20.3 0 37.71 12.68 44.71 30.54 2.39 6.09 1.07 13.06-3.55 17.68l-67.5 67.48a7.997 7.997 0 0 1-11.32 0zm-207.7-51.72h110.72L232 374.61v96.58c-100.94-7.46-182.6-84.45-197.36-183.21zM264 471.19v-96.58l86.64-86.63h110.72C446.6 386.74 364.94 463.73 264 471.19z"
                              class=""
                            ></path>
                          </svg>
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="shopping-cart"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            class="svg-inline--fa fa-shopping-cart fa-w-18 fa-fw fa-2x"
                          >
                            <path
                              fill="currentColor"
                              d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                              class=""
                            ></path>
                          </svg>
                          My Cart
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Log Out
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="sign-out"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="svg-inline--fa fa-sign-out fa-w-16 fa-fw fa-2x"
                          >
                            <path
                              fill="currentColor"
                              d="M96 64h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-53 0-96-43-96-96V160c0-53 43-96 96-96zm231.1 19.5l-19.6 19.6c-4.8 4.8-4.7 12.5.2 17.1L420.8 230H172c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h248.8L307.7 391.7c-4.8 4.7-4.9 12.4-.2 17.1l19.6 19.6c4.7 4.7 12.3 4.7 17 0l164.4-164c4.7-4.7 4.7-12.3 0-17l-164.4-164c-4.7-4.6-12.3-4.6-17 .1z"
                              class=""
                            ></path>
                          </svg>
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
