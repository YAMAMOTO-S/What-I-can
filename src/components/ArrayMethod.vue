<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="card">
          <br />
          <div class="mainimg">
            <v-img
              src="https://codesquery.com/wp-content/uploads/2019/10/javascript-array-methods-list-1170x508.png"
            >
            </v-img>
          </div>
          <br />
          <div class="title">
            <h1>Array Methods</h1>
            <p class="font-weight-light">
              for reviewing the array methods by using API.
            </p>
          </div>
          <br />

          <!-- メイン部分           -->
          <div class="d-flex flex-row" cols="12">
            <v-col cols="6" class="mainbtn">
              <div>
                <v-btn id="add-user" depressed small class="btns"
                  >Add User</v-btn
                >
              </div>
              <div>
                <v-btn id="double" depressed small class="btns"
                  >Double money</v-btn
                >
              </div>
              <div>
                <v-btn id="millionaires" depressed small class="btns"
                  >Millionaires</v-btn
                >
              </div>
              <div>
                <v-btn id="sort" depressed small class="btns"
                  >Sort by Richest</v-btn
                >
              </div>
              <div>
                <v-btn id="wealth" depressed small class="btns"
                  >entire wealth</v-btn
                >
              </div>
            </v-col>

            <v-col cols="6">
              <div id="main" class="mainp">
                <h2 class="font-weight-light">Person</h2>
                <h2 class="font-weight-light">Wealth</h2>
              </div>
            </v-col>
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
  max-width: 300px;
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
/* .mainbtn{
  border-right: 1px solid #1111;
} */
.btns {
  width: 45%;
  margin: 5px;
}
.mainp {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  border-bottom: 2px solid #1111;
  padding: 0 20px;
}
.btns {
  justify-content: left;
}
</style>
