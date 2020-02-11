<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="11" lg="10" xl="10">
        <v-card class="card">
          <br />
          <div class="mainimg">
            <v-img src="@/assets/meal.png"> </v-img>
          </div>
          <div class="title">
            <h1>Meal Finder</h1>
            <p class="font-weight-light">
              Meal name by using meal API.
            </p>
          </div>

          <div>
            <form id="submit" class="mainsearch">
              <v-text-field label="Meal name here" id="search"></v-text-field>
              <v-btn
                class="mainbtn"
                type="submit"
                depressed
                color="#AAD6EC"
                rounded
              >
                <v-icon color="white">mdi-magnify</v-icon>
              </v-btn>
            </form>
          </div>

          <div class="result"></div>
          <div id="meals" class="meals"></div>
          <div id="single-meal"></div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    const search = document.getElementById("search"),
      submit = document.getElementById("submit"),
      // mealsEl = document.getElementById('meals'),
      // result = document.getElementById('result'),
      single_meal = document.getElementById("single-meal");

    // searchMeal APIから取ってくる
    function searchMeal(e) {
      e.preventDefault();

      // singeleMealを消す
      single_meal.innerHTML = "";
      // Search Name取得
      const term = search.value;

      // termに入った名前を検索と空白かどうか確認
      if(term.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
      } else {
        alert('Please enter some words.')
      }

    }

    // イベントリスナー
    submit.addEventListener("submit", searchMeal);
  }
};
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
  text-align: center;
  color: #5b5b5b;
}
.mainsearch {
  max-width: 500px;
  justify-content: center;
  margin: 10px auto;
  display: flex;
}
.mainbtn {
  margin-top: 10px;
  margin-left: 10px;
}
</style>
