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

          <div id="result" class="resulttitle"></div>
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
      mealsEl = document.getElementById("meals"),
      result = document.getElementById("result"),
      single_meal = document.getElementById("single-meal");

    // searchMeal APIから取ってくる
    function searchMeal(e) {
      e.preventDefault();

      // singeleMealを消す
      single_meal.innerHTML = "";
      // Search Name取得
      const term = search.value;

      // termに入った名前を検索と空白かどうか確認
      if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            result.innerHTML = `<h2>Search results for ${term}:</h2>`;

            // 空白なら注意を表示なければMAPを使って結果を表示
            if (data.meals == null) {
              result.innerHTML = `<p>There are no data. Please try again :)</p>`;
            } else {
              mealsEl.innerHTML = data.meals
                .map(
                  meal => `
                <div class="meal" style="justify-content: center; text-align: center;">
                  <img src="${meal.strMealThumb}" alt="${meal.strMeal}" 
                    style="height: 300px; width:300px; margin: 10px; />
                  <div class="meal-info" data-mealID = "${meal.idMeal}">
                    <h3 style="color: #5b5b5b; justify-content: center; text-align: center;">${meal.strMeal}</h3>
                  </div>
                </div>
              `
                )
                .join("");
            }
          });
        // search を綺麗にする
        search.value = "";
      } else {
        alert("Please enter some words.");
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
.resulttitle {
  text-align: center;
  justify-content: center;
  margin: 10px auto;
  color: #5b5b5b;
}
.meals {
  display: grid;
  grid-template-columns: repeat(3, 3fr); 

}

</style>
