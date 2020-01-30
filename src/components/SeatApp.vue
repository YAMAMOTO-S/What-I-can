<template>
  <v-container fluid>

    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="6">
        
        <v-card class="cards">
          <div class="test2">
            <h1>Seat App</h1>
          </div>
          <div class="movie-container">
            <label>
              Please Pick a movie: 
              <v-select
            :items="items"
            label="Standard"
            dense
            ></v-select>
            </label>
          </div>

          <ul class="showcase">
            <li>
              <div class="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div class="seat selected"></div>
              <small>selected</small>
            </li>
            <li>
              <div class="seat occupied"></div>
              <small>Occupied</small>
            </li>
            
          </ul>

          <div class="moviecontainer">
            <div class="screen"></div>
            <br><br>
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
          <br><br>
          <v-alert dense type="info" color="#AAD6EC">
            <div class="endtext">
              <p>
              You have selected 
              <span id="count"><strong>0</strong></span>  seats.
              Price is $
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
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
}
</script>

<style scoped>
.test2 h1{
  margin: 0px;
  text-align: center;
  color: #5B5B5B;
}
.movie-container{
  margin: 30px;
}
.seat {
  background-color: #5B5B5B;
  height: 15px;
  width: 20px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.seat.selected{
  background-color: #AAD6EC;
}
.seat.occupied{
  background-color: #FC9D9D;
}
.seat:nth-of-type(2){
  margin-right: 20px;
}
.seat:nth-last-of-type(2){
  margin-left: 20px;
}
/* occupedされていないseatはポインターにしてすこし拡大 */
.seat:not(.occupied):hover{
  cursor: pointer;
  transform: scale(1.4);
}
.showcase .seat:not(.occupied):hover{
  cursor: default;
  transform: scale(1);
}
.row{
  align-items: center;
  justify-content: center;
}
.showcase{
  background-color: rgb(236, 236, 236);
  color: #5B5B5B;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
}
.showcase li{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 30px;
}
.screen{
  background: #5B5B5B;
  height: 90px;
  width: 40%;
  margin: auto;
  box-shadow: 0 10px 10px rgb(187, 187, 187)
}
.endtext p{
  text-align: center;
}
.endtext{
  margin: 10px;

}
</style>