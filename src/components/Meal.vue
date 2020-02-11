<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="12" lg="12" xl="12">
        <v-card class="card">
          <br />
          <div class="mainimg">
            <v-img src="@/assets/meal.png"> </v-img>
          </div>
          <div class="title">
            <h1>Meal Finder</h1>
            <p class="font-weight-light">
              can find meals by using meal API.
            </p>
          </div>

          <div class="mainsearch">
            <v-form>
              <v-text-field label="enter the meal name"></v-text-field>
            </v-form>
            <v-btn class="mainbtn" depressed color="#AAD6EC" rounded>
              <v-icon color="white">mdi-magnify</v-icon>
            </v-btn>
          </div>
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
.title h1 {
  text-align: center;
  color: #5b5b5b;
}
.title p {
  margin: 20px;
  text-align: center;
  color: #5b5b5b;
}
.mainsearch {
  justify-content: center;
  margin: 0 auto;
  display: flex;
}
.mainbtn{
  margin-top: 10px;
  margin-left: 10px; 
}
</style>
