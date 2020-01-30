<template>
  <v-container fluid>

    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="6">
        <v-card>

          <div class="test2">
            Seet App
          </div>
          <div class="movie-container">
            <label>
              Please Pick a movie: 
            </label>
            <v-select
            :items="items"
            label="Standard"
            dense
            ></v-select>
          </div>

          <ul class="showcase">
            <li>
              <div class="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div class="seat serected"></div>
              <small>selected</small>
            </li>
            <li>
              <div class="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>

          <div class="container">
            <div class="screen"></div>

            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </div>
            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
            </div>
            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </div>
            <div class="row">
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </div>
            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </div>
            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </div>
          </div>

          <p class="text">
            You have selected 
            <span id="count">0</span>seats.
            Price is $
            <span id="total">0</span>
          </p>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
}
</script>

<style>
.test2 {
  text-align: center;
  font-size: 30px;
}
</style>