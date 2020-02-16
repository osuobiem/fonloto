<template>
  <div
    class="tab-pane fade"
    id="payment-info"
    role="tabpanel"
    aria-labelledby="payment-info-tab"
  >
    <div class="user-panel-title">
      <h3>Bank Info</h3>
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
              <td>Redeem Gift Subscription</td>
              <td><input type="text" placeholder="Enter Gift Code" /></td>
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
              <td>Monthly Recurring Total</td>
              <td colspan="2">$7.99/month</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
