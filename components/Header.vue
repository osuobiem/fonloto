<template>
  <div>
    
   <!-- header begin -->
        <div class="header">
            <div class="container">
                <div class="menu-bar">
                    <div class="row">
                        <div class="col-xl-3 col-lg-3 d-xl-flex d-lg-flex d-block align-items-center">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-7">
                                    <div class="logo">
                                        <nuxt-link to="/">
                                            <img src="~/assets/img/logo.png" alt="">
                                        </nuxt-link>
                                    </div>
                                </div>
                                <div class="d-xl-none d-lg-none d-block col-5">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-9 for-lottery">
                            <div class="mainmenu">
                                <nav class="navbar navbar-expand-lg for-lottery">

                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav ml-auto">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link" href="#" id="homepage" role="button" aria-haspopup="true" aria-expanded="false">
                                                    Home
                                                </a>
                                            </li>
                                            <li class="nav-item dropdown for-lottery-btn">
                                                <a class="nav-link dropdown-toggle" href="#" id="all-lotteries" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    In-Play
                                                </a>
                                                <div class="dropdown-menu for-specific">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                                <div class="all-lotteries d-xl-block d-lg-block d-none">
                                                    <div class="single-lottery">
                                                        
                                                        <h3 class="title">EuroMillions</h3>
                                                        <div class="part-icon">
                                                            <img src="assets/img/svg/euro-million.png" alt="">
                                                        </div>
                                                        <a href="pick-number.html">Play Game</a>
                                                        <div class="draw-time">
                                                            <ul class="date-counter timer" data-date="30 November 2019 9:56:00 GMT+01:00">
                                                                <li>
                                                                    <span class="number day">15</span>
                                                                    <span class="text">Day</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number hour">15</span>
                                                                    <span class="text">Hou</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number minute">25</span>
                                                                    <span class="text">Min</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number second">35</span>
                                                                    <span class="text">Sec</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="single-lottery">
                                                        
                                                        <h3 class="title">EuroJackpot</h3>
                                                        <div class="part-icon">
                                                            <img src="assets/img/svg/euro-jackpot.png" alt="">
                                                        </div>
                                                        <a href="pick-number.html">Play Game</a>
                                                        <div class="draw-time">
                                                            <ul class="date-counter timer" data-date="30 November 2019 9:56:00 GMT+01:00">
                                                                <li>
                                                                    <span class="number day">15</span>
                                                                    <span class="text">Day</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number hour">15</span>
                                                                    <span class="text">Hou</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number minute">25</span>
                                                                    <span class="text">Min</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number second">35</span>
                                                                    <span class="text">Sec</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="single-lottery">
                                                    
                                                        <h3 class="title">Powerball</h3>
                                                        <div class="part-icon">
                                                            <img src="assets/img/svg/powerball.png" alt="">
                                                        </div>
                                                        <a href="pick-number.html">Play Game</a>
                                                        <div class="draw-time">
                                                            <ul class="date-counter timer" data-date="30 November 2019 9:56:00 GMT+01:00">
                                                                <li>
                                                                    <span class="number day">15</span>
                                                                    <span class="text">Day</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number hour">15</span>
                                                                    <span class="text">Hou</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number minute">25</span>
                                                                    <span class="text">Min</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number second">35</span>
                                                                    <span class="text">Sec</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="single-lottery">
                                                        <h3 class="title">UK Lottery</h3>
                                                        <div class="part-icon">
                                                            <img src="assets/img/svg/uk-lottery.png" alt="">
                                                        </div>
                                                        <a href="pick-number.html">Play Game</a>
                                                        <div class="draw-time">
                                                            <ul class="date-counter timer" data-date="30 November 2019 9:56:00 GMT+01:00">
                                                                <li>
                                                                    <span class="number day">15</span>
                                                                    <span class="text">Day</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number hour">15</span>
                                                                    <span class="text">Hou</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number minute">25</span>
                                                                    <span class="text">Min</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number second">35</span>
                                                                    <span class="text">Sec</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="single-lottery">
                                                        
                                                        <h3 class="title">MegaMillions</h3>
                                                        <div class="part-icon">
                                                            <img src="assets/img/svg/mega.png" alt="">
                                                        </div>
                                                        <a href="pick-number.html">Play Game</a>
                                                        <div class="draw-time">
                                                            <ul class="date-counter timer" data-date="30 November 2019 9:56:00 GMT+01:00">
                                                                <li>
                                                                    <span class="number day">15</span>
                                                                    <span class="text">Day</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number hour">15</span>
                                                                    <span class="text">Hou</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number minute">25</span>
                                                                    <span class="text">Min</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number second">35</span>
                                                                    <span class="text">Sec</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="single-lottery">
                                                    
                                                        <h3 class="title">EnaLotto</h3>
                                                        <div class="part-icon">
                                                            <img src="assets/img/svg/enalotto.png" alt="">
                                                        </div>
                                                        <a href="pick-number.html">Play Game</a>
                                                        <div class="draw-time">
                                                            <ul class="date-counter timer" data-date="30 November 2019 9:56:00 GMT+01:00">
                                                                <li>
                                                                    <span class="number day">15</span>
                                                                    <span class="text">Day</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number hour">15</span>
                                                                    <span class="text">Hou</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number minute">25</span>
                                                                    <span class="text">Min</span>
                                                                </li>
                                                                <li>
                                                                    <span class="number second">35</span>
                                                                    <span class="text">Sec</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="lottery-result-menu">
                                                        <a href="lottery-results.html">See The All Lottery Result</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Pages
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="pages" data-ss-container>
                                                    <a class="dropdown-item" href="about.html">About Us</a>
                                                    <a class="dropdown-item" href="affiliate.html">Affiliate</a>
                                                    <a class="dropdown-item" href="all-lotteries.html">All Lotteries</a>
                                                    <a class="dropdown-item" href="lottery-results.html">Lottery Result</a>
                                                    <a class="dropdown-item" href="buy-ticket-online.html">Buy Ticket Online</a>
                                                    <a class="dropdown-item" href="error.html">Error 404</a>
                                                    <a class="dropdown-item" href="faq.html">Faq</a>
                                                    <a class="dropdown-item" href="how-it-works.html">How It Works</a>
                                                    <a class="dropdown-item" href="login.html">Login I</a>
                                                    <a class="dropdown-item" href="login-2.html">Login II</a>
                                                    <a class="dropdown-item" href="pick-number.html">Pick Number</a>
                                                    <a class="dropdown-item" href="register.html">Register I</a>
                                                    <a class="dropdown-item" href="register-2.html">Register II</a>
                                                    <a class="dropdown-item" href="team.html">Team I</a>
                                                    <a class="dropdown-item" href="team-2.html">Team II</a>
                                                    <a class="dropdown-item" href="testimonial.html">Testimonial I</a>
                                                    <a class="dropdown-item" href="testimonial-2.html">Testimonial II</a>
                                                    <a class="dropdown-item" href="why-choose-us.html">Why Choose Us</a>
                                                    <a class="dropdown-item" href="winner.html">Winner</a>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="blog" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Blog
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="blog">
                                                    <a class="dropdown-item" href="blog.html">Blog Posts</a>
                                                    <a class="dropdown-item" href="blog-details.html">Blog Details</a>
                                                    <a class="dropdown-item" href="blog-left-sidebar.html">Blog L-Sidebar</a>
                                                    <a class="dropdown-item" href="blog-right-sidebar.html">Blog R-Sidebar</a>
                                                   
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="dashboard" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Dashboard
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dashboard">
                                                    <a class="dropdown-item" href="user-panel/index.html">Dashboard</a>
                                                    <a class="dropdown-item" href="user-panel/profile.html">Profile</a>
                                                    <a class="dropdown-item" href="user-panel/cart.html">My Cart</a>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="contact.html">Contact</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link sign-up" href="register.html">Sign Up</a>
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

  </div>
</template>