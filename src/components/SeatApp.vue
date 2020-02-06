/* eslint-disable no-unused-vars */ /* eslint-disable no-unused-vars */ /*
eslint-disable no-unused-vars */ /* eslint-disable no-unused-vars */
<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="cards">
          <br>
          <div class="test2">
            <h1>Seat App</h1>
            <p class="font-weight-light">
              Choose the movie and check the price :)
            </p>
          </div>
          <div class="movie-container">
            <label>Pick a movie:</label>
            <select id="movie">
              <option value="10">Avengers: Endgame ($10)</option>
              <option value="12">Joker ($12)</option>
              <option value="8">Toy Story 4 ($8)</option>
              <option value="9">The Lion King ($9)</option>
            </select>
          </div>

          <ul class="showcase">
            <li>
              <div class="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div class="seat selected2"></div>
              <small>selected</small>
            </li>
            <li>
              <div class="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>

          <div class="moviecontainer">
            <div class="screen"></div>
            <br /><br />
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

          <br /><br />

          <v-alert dense type="info" color="#AAD6EC">
            <div class="endtext">
              <p>
                You have selected
                <span id="count"><strong>0</strong></span> seats. Price is $
                <span id="total">0</span>
              </p>
            </div>
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    const container = document.querySelector(".moviecontainer");
    // eslint-disable-next-line no-unused-vars
    const seats = document.querySelectorAll(".row.seat:not(.occupied)");
    const count = document.getElementById("count");
    const total = document.getElementById("total");
    const movieSelect = document.getElementById("movie");
    let ticketPrice = +movieSelect.value;

    // 合計金額を変更する
    function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll(".row .seat.selected");
      const selectedSeatsCount = selectedSeats.length;
      // countとtotalにinnerTextを使い数値が変わるように
      count.innerText = selectedSeatsCount;
      total.innerText = selectedSeatsCount * ticketPrice;
    }

    // 映画を変更しても値段が反映されるようにする。
    movieSelect.addEventListener("change", e => {
      ticketPrice = e.target.value;
      updateSelectedCount();
    });

    // seatのclickevent
    container.addEventListener("click", e => {
      // seatがクリックされた時のみ反応
      if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")
      ) {
        // toggleを使ってselectedとseatを変えられるように
        e.target.classList.toggle("selected");

        updateSelectedCount();
      }
    });
  }
};
</script>

<style scoped>
.test2 h1 {
  text-align: center;
  color: #5b5b5b;
}
.test2 p {
  margin: 20px;
  text-align: center;
  color: #5b5b5b;
}
.movie-container {
  margin: 30px;
}
.movie-container select {
  background-color: rgb(236, 236, 236);
  border-radius: 5px;
  font-size: 14px;
  margin-left: 10px;
  padding: 5px 15px 5px 15px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.seat {
  background-color: #5b5b5b;
  height: 15px;
  width: 20px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.seat.selected {
  background-color: #aad6ec;
}
.seat.selected2 {
  background-color: #aad6ec;
}
.seat.occupied {
  background-color: #fc9d9d;
}
.seat:nth-of-type(2) {
  margin-right: 20px;
}
.seat:nth-last-of-type(2) {
  margin-left: 20px;
}
/* occupedされていないseatはポインターにしてすこし拡大 */
.seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1.4);
}
.showcase .seat:not(.occupied):hover {
  cursor: default;
  transform: scale(1);
}
.row {
  align-items: center;
  justify-content: center;
}
.showcase {
  background-color: rgb(236, 236, 236);
  color: #5b5b5b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
}
.showcase li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 30px;
}
.screen {
  background: #5b5b5b;
  height: 90px;
  width: 40%;
  margin: auto;
  box-shadow: 0 10px 10px rgb(187, 187, 187);
}
.endtext p {
  text-align: center;
}
.endtext {
  margin: 10px;
}
</style>
