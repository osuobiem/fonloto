<template>
  <div>
    
    <!-- Header Area Start  -->
	<header class="header">
		<!-- Top Header Area Start -->
		<section class="top-header">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="content">
							<div class="left-content">
								<ul class="left-list">
									<li>
										<p>
											<i class="fas fa-headset"></i>	Support
										</p>
									</li>
									<li>
										<p>
											<i class="fas fa-envelope"></i>	info@Dooplo.com
										</p>
									</li>
									<li>
										<div class="language-selector">
											<select name="language" class="language">
												<option value="1">English</option>
												<option value="2">France</option>
												<option value="3">Japan</option>
											</select>
										</div>
									</li>
								</ul>
							</div>
							<div class="right-content">
								
									<ul class="right-list">
											<li>
												<div class="cart-icon tm-dropdown">
													<i class="fas fa-cart-arrow-down"></i>
													<span class="cart-count">10</span>
													<div class="tm-dropdown-menu">
														<ul class="list">
															<li class="list-item">
																	<div class="close">
																			<i class="fas fa-times"></i>
																	</div>
																<ul class="number-list">
																	<li>24</li>
																	<li>25</li>
																	<li>26</li>
																	<li>27</li>
																	<li>28</li>
																</ul>
															</li>
															<li class="list-item">
																	<div class="close">
																			<i class="fas fa-times"></i>
																	</div>
																<ul class="number-list">
																	<li>24</li>
																	<li>25</li>
																	<li>26</li>
																	<li>27</li>
																	<li>28</li>
																</ul>
															</li>
															<li class="list-item">
																	<div class="close">
																			<i class="fas fa-times"></i>
																	</div>
																<ul class="number-list">
																	<li>24</li>
																	<li>25</li>
																	<li>26</li>
																	<li>27</li>
																	<li>28</li>
																</ul>
															</li>
															<li class="list-item">
																<div class="close">
																		<i class="fas fa-times"></i>
																</div>
																<ul class="number-list">
																	<li>24</li>
																	<li>25</li>
																	<li>26</li>
																	<li>27</li>
																	<li>28</li>
																</ul>
															</li>
														</ul>
														<a href="cart.html" class="link-btn">Cart Page</a>
													</div>
												</div>
											</li>
											<li>
												<div class="notofication tm-dropdown">
													<i class="fas fa-bell"></i>
													<span class="count">11</span>
													<div class="tm-dropdown-menu">
															<ul class="list">
																<li>
																	<a href="#">
																		<i class="fas fa-bell"></i>
																		Invest Exchange
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i class="fas fa-bell"></i>
																		Invest Exchange
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i class="fas fa-bell"></i>
																		Invest Exchange
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i class="fas fa-bell"></i>
																		Invest Exchange
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i class="fas fa-bell"></i>
																		Invest Exchange
																	</a>
																</li>
															</ul>
														</div>
												</div>
											</li>
											<li>
												<a href="#" class="sign-in" data-toggle="modal" data-target="#login">
													<i class="fas fa-user"></i> Sign In
												</a>
											</li>
										</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Top Header Area End -->
		<!--Main-Menu Area Start-->
		<div class="mainmenu-area">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">                 
						<nav class="navbar navbar-expand-lg navbar-light">
							<nuxt-link class="navbar-brand" to="/" style="max-width: 20%">
								<img src="~/assets/images/logo.png" style="max-width: 65%" alt="">
							</nuxt-link>
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
								aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse fixed-height" id="main_menu">
								<ul class="navbar-nav ml-auto">
									<li class="nav-item dropdown">
										<a class="nav-link active dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">
											Home
										<div class="mr-hover-effect"></div>
										</a>
										<ul class="dropdown-menu" >
											<li><a class="dropdown-item" href="index.html"> <i class="fa fa-angle-double-right"></i>Home 1</a></li>
											<li><a class="dropdown-item" href="index2.html"> <i class="fa fa-angle-double-right"></i> Home 2</a></li>
										</ul>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="play.html">Play
												<div class="mr-hover-effect"></div></a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="lottery.html">lottery
												<div class="mr-hover-effect"></div></a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="tournaments.html">tournaments
												<div class="mr-hover-effect"></div></a>
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">
											Pages
											<div class="mr-hover-effect"></div>
										</a>
										<ul class="dropdown-menu" >
											<li><a class="dropdown-item" href="about.html"> <i class="fa fa-angle-double-right"></i>About</a></li>
											<li><a class="dropdown-item" href="affiliate.html"> <i class="fa fa-angle-double-right"></i>Affiliate</a></li>
											<li><a class="dropdown-item" href="awards.html"> <i class="fa fa-angle-double-right"></i>Awards</a></li>
											<li><a class="dropdown-item" href="bonus.html"> <i class="fa fa-angle-double-right"></i>Bonus</a></li>
											<li><a class="dropdown-item" href="cart.html"> <i class="fa fa-angle-double-right"></i>Cart</a></li>
											<li><a class="dropdown-item" href="faq.html"> <i class="fa fa-angle-double-right"></i>Faq</a></li>
											<li><a class="dropdown-item" href="how-it-work.html"> <i class="fa fa-angle-double-right"></i>How It Work</a></li>
											<li><a class="dropdown-item" href="terms-conditions.html"> <i class="fa fa-angle-double-right"></i>Terms & Condition</a></li>
											<li><a class="dropdown-item" href="terms-conditions-details.html"> <i class="fa fa-angle-double-right"></i>Condition Details</a></li>
											<li><a class="dropdown-item" href="404.html"> <i class="fa fa-angle-double-right"></i>404</a></li>
										</ul>
									</li>
									<li class="nav-item">
											<a class="nav-link" href="contact.html">Contact
													<div class="mr-hover-effect"></div></a>
										</li>
								</ul>
								<a href="#" class="mybtn1"  data-toggle="modal" data-target="#signin"> Join us</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<!--Main-Menu Area Start-->
	</header>
	<!-- Header Area End  -->

  </div>
</template>