<template>
  <!-- lottery ticket begin -->
  <div class="lottery-ticket" id="lottery-ticket" style="padding: 70px 0px">
    <div class="container">
      <div
        class="row justify-content-xl-between justify-content-lg-between justify-content-md-center"
      >
        <div class="col-xl-5 col-lg-4">
          <div class="part-img">
            <div class="ill-width">
              <div class="ill-shape-set">
                <img src="~/assets/img/svg/lottery-jackpot-icon.png" alt="" />
                <img src="~/assets/img/svg/lottery-jackpot-icon.png" alt="" />
                <img src="~/assets/img/svg/lottery-jackpot-icon.png" alt="" />
                <img src="~/assets/img/svg/lottery-jackpot-icon.png" alt="" />
              </div>
            </div>
            <img src="~/assets/img/lottery-jackpot-img.png" alt="" />
            <div class="draw-date">
              <span class="title">Next Draw</span>
              <span class="date">22 Feb</span>
            </div>
            <div class="clock">
              <img src="~/assets/img/clock.webp" alt="" />
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-lg-7 col-md-9">
          <div class="part-text">
            <h2>Buy Lottery Ticket to Enter ₦100,000 Raffle Draw</h2>
            <p>
              You're just ₦200 away from instantly winning ₦100,000 don't miss
              this chance.<br /><br />
              <strong>
                The more tickets you buy, the more your chances of winning.
              </strong>
            </p>
            <strong>
              The draw will start by 12:00 noon, 22nd February 2020.
            </strong>
            <div
              class="date-counter timer"
              data-date="22 February 2020 12:00:00 GMT+01:00"
            >
              <div class="single-counter">
                <div class="conter-content">
                  <span class="number day">26</span>
                  <span class="title">Days</span>
                </div>
              </div>
              <div class="single-counter">
                <div class="conter-content">
                  <span class="number hour">15</span>
                  <span class="title">Hours</span>
                </div>
              </div>
              <div class="single-counter">
                <div class="conter-content">
                  <span class="number minute">25</span>
                  <span class="title">Minutes</span>
                </div>
              </div>
              <div class="single-counter">
                <div class="conter-content">
                  <span class="number second">35</span>
                  <span class="title">Seconds</span>
                </div>
              </div>
            </div>
            <div class="buttons">
              <ul>
                <li>
                  <a href="#">Buy ₦200 Ticket</a>
                </li>
                <li>
                  <a href="#">More Draws</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- lottery ticket end -->
</template>
