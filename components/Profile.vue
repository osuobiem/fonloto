<template>
  
  <!-- profile begin -->
        <div class="profile">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-3 col-lg-3">
                        <div class="accont-tab">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="personal-info-tab" data-toggle="pill" href="#personal-info" role="tab" aria-selected="true"><i class="far fa-user"></i> Personal Info</a>
                                <a class="nav-link" id="payment-info-tab" data-toggle="pill" href="#payment-info" role="tab" aria-selected="false"><i class="fas fa-credit-card"></i> Payment Info</a>
                                <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-tasks"></i> Privacy Settings</a>
                                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fas fa-cog"></i> Account Settings</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-8">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                                <div class="user-panel-title">
                                    <h3>Brian's Profile</h3>
                                </div>
                                <div class="player-profile">
                                    <div class="row no-gutters">
                                        <div class="col-xl-4 col-lg-4 col-md-6">
                                            <div class="player-card">  
                                                <div class="part-pic">
                                                    <img src="../assets/img/player-user.jpg" alt="">
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
                                                    <img src="../assets/img/svg/medal.svg" alt="">
                                                </span>
                                                <ul>
                                                    <li>
                                                        <span class="property"><i class="fas fa-info-circle"></i> First Name :</span>   
                                                        <span class="value">Brian John </span>   
                                                    </li>
                                                    <li>
                                                        <span class="property"><i class="fas fa-info-circle"></i> Last Name :</span>   
                                                        <span class="value">Summerhoold N</span>   
                                                    </li>
                                                    <li>
                                                        <span class="property"><i class="fas fa-info-circle"></i> Email Address :</span>   
                                                        <span class="value">autworks2018@gmail.com</span>   
                                                    </li>
                                                    <li>
                                                        <span class="property"><i class="fas fa-info-circle"></i> Phone Numbers :</span>   
                                                        <span class="value">+88 015 255 4365</span>   
                                                    </li>
                                                    <li>
                                                        <span class="property"><i class="fas fa-info-circle"></i> Website :</span>   
                                                        <span class="value">http://themeforest.net</span>   
                                                    </li>
                                                    <li>
                                                        <span class="property"><i class="fas fa-info-circle"></i> State :</span>   
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
                            <div class="tab-pane fade" id="payment-info" role="tabpanel" aria-labelledby="payment-info-tab">
                                <div class="user-panel-title">
                                    <h3>Payment Info</h3>
                                </div>
                                <div class="payment-info">
                                    <div class="responsive">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Payment Method</td>
                                                    <td>Mastercard •••• •••• •••• 0000</td>
                                                    <td><a href="#" class="payment-info-button">Upadte</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Billing Address</td>
                                                    <td>1234 Example Ave | Seattle, WA</td>
                                                    <td><a href="#" class="payment-info-button">change</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Zipcode</td>
                                                    <td>999000</td>
                                                    <td><a href="#" class="payment-info-button">Edit</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Billing History</td>
                                                    <td>2018</td>
                                                    <td><a href="#" class="payment-info-button">View</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Redeem Gift Subscription </td>
                                                    <td><input type="text" placeholder="Enter Gift Code"></td>
                                                    <td><a href="#" class="payment-info-button">Redeem</a></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Payment Date</td>
                                                    <td>05-15-2018</td>
                                                    <td><a href="#" class="payment-info-button">pay now</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Your Next Charge</td>
                                                    <td colspan="2">$8.48<small>(includes tax)</small></td>
                                                </tr>
                                                <tr>
                                                    <td>Lotters Base Plan</td>
                                                    <td>Limited Commercials</td>
                                                    <td><a href="#" class="payment-info-button">change plan</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Add-ons</td>
                                                    <td>None</td>
                                                    <td><a href="#" class="payment-info-button">manage</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Monthly Recurring Total </td>
                                                    <td colspan="2">$7.99/month</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div class="user-panel-title">
                                    <h3>Privacy Settings</h3>
                                </div>
                                <div class="privacy-settings">
                                    <div class="responsive">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Manage Email Notifications</td> 
                                                    <td><a href="#" class="payment-info-button">Manage</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Manage Privacy Settings</td> 
                                                    <td><a href="#" class="payment-info-button">Manage</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Personalize Ad Experience</td>
                                                    <td><a href="#" class="payment-info-button">Update</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Protect Your Account </td>
                                                    <td><a href="#" class="payment-info-button">Protect</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div class="account-settings">
                                    <div class="user-panel-title">
                                        <h3>Account Settings</h3>
                                    </div>
                                    <div class="responsive">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Sync Watchlist to My Stuff</td> 
                                                    <td><a href="#" class="payment-info-button">Sync</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Hold Your Subscription</td> 
                                                    <td><a href="#" class="payment-info-button">Hold</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Cancel Your Subscription</td>
                                                    <td><a href="#" class="payment-info-button">Cancel</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Your Devices  </td>
                                                    <td><a href="#" class="payment-info-button">Manage</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Referrals  </td>
                                                    <td><a href="#" class="payment-info-button">Get $10</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- profile end -->

</template>