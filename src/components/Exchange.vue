<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="6">
        <v-card class="card">
          <br />
          <div class="mainimg">
            <v-img
              src="https://images-fe.ssl-images-amazon.com/images/I/41XvwpEmyPL.png"
            ></v-img>
          </div>
          <div class="title">
            <h1>Exchange App</h1>
            <p class="font-weight-light">Choose the currency and the amounts to get the exchange rate</p>
          </div>

          <br />
          <div class="exchangecon">
            <div class="currency">
              <select id="currency-one">
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="USD" selected>USD</option>
                <option value="UYU">UYU</option>
                <option value="VND">VND</option>
                <option value="ZAR">ZAR</option>
              </select>
              <input type="number" id="amount-one" placeholder="0" calue="1" />
            </div>

            <div class="swap">
              <v-btn class="btn" id="rate" depressed color="#AAD6EC" rounded
                >swap</v-btn
              >
              <div class="rate" id="rate"></div>
            </div>

            <div class="currency">
              <select id="currency-two">
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY" selected>JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="UYU">UYU</option>
                <option value="VND">VND</option>
                <option value="ZAR">ZAR</option>
              </select>
              <input type="number" id="amount-two" placeholder="0" calue="1" />
            </div>
          </div>
          <br />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.mainimg {
  max-width: 150px;
  margin: 10px auto;
}
.card {
  text-align: center;
}
.title h1 {
  text-align: center;
  color: #5b5b5b;
}
.title p {
  margin: 20px;
  text-align: center;
  color: #5b5b5b;
}
.exchangecon {
  align-items: center;
  justify-content: center;
}
.btn{
  margin: 10px;
  max-height: 30px;
  color: rgb(255, 255, 255);
}
.currency input{
  border-bottom: 2px solid  rgb(236, 236, 236);
  margin: 10px;
}
select:focus, input:focus{
  outline: 0;
}
</style>
