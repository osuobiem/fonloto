<template>
  <div>
    <div
      class="tab-pane fade show active"
      id="personal-info"
      role="tabpanel"
      aria-labelledby="personal-info-tab"
    >
      <div class="user-panel-title">
        <h3>Brian's Profile</h3>
      </div>
      <div class="player-profile">
        <div class="row no-gutters">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="player-card">
              <div class="part-pic">
                <img src="~/assets/img/player-user.jpg" alt="" />
              </div>
              <div class="social-link">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-messenger"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-lg-8 col-md-6">
            <div class="part-info">
              <span class="player-name">
                Brian Summerhoold
                <img src="~/assets/img/svg/medal.svg" alt="" />
              </span>
              <ul>
                <li>
                  <span class="property"
                    ><i class="fas fa-info-circle"></i> First Name :</span
                  >
                  <span class="value">Brian John </span>
                </li>
                <li>
                  <span class="property"
                    ><i class="fas fa-info-circle"></i> Last Name :</span
                  >
                  <span class="value">Summerhoold N</span>
                </li>
                <li>
                  <span class="property"
                    ><i class="fas fa-info-circle"></i> Email Address :</span
                  >
                  <span class="value">autworks2018@gmail.com</span>
                </li>
                <li>
                  <span class="property"
                    ><i class="fas fa-info-circle"></i> Phone Numbers :</span
                  >
                  <span class="value">+88 015 255 4365</span>
                </li>
                <li>
                  <span class="property"
                    ><i class="fas fa-info-circle"></i> Website :</span
                  >
                  <span class="value">http://themeforest.net</span>
                </li>
                <li>
                  <span class="property"
                    ><i class="fas fa-info-circle"></i> State :</span
                  >
                  <span class="value">United Kingdom</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="edit-profile text-center">
        <a href="#" class="edit-button">Edit Profile</a>
      </div>
    </div>
  </div>
</template>
