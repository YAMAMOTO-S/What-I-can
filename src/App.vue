<template>
  <v-app>
    <div class="App">
      <div class="header">
        <h1 class="name animated fadeIn">Shunya Yamamoto</h1>
      </div>
      <div class="links">
        <router-link to="/" class="link"><v-icon>mdi-account</v-icon>自己紹介</router-link>
        <router-link to="/seatApp" class="link"><v-icon>mdi-clipboard-text-outline</v-icon>制作物</router-link>
      </div>

      <main>
        <router-view></router-view>
      </main>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App", 
  computed: {}
};
</script>

<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";

.header {
  height: 480px;
  max-height: 480px;
  background-image: url('../src/assets/text.jpeg');
  background-size: contain;
  background-size: cover;
  .name {
    text-align: center;
    line-height: 480px;
    font-family: "Hiragino Sans", "Meiryo", "sans-serif";
    font-weight: bold;
    color: #454C50;
  }
}
.links {
  font-size: 25px;
  text-align: center;
  justify-content: space-between;
  height: 200px;
  max-height: 200px;
  width: 100%;
  .link {
    color: #6E777C;
    font-family: "ヒラギノ丸ゴ ProN",sans-serif;
    margin-right: 30px;
    text-decoration: none;
    line-height: 200px;
  }
  .router-link-exact-active{
    color: #454C50;
    border-bottom: #454C50 1px solid;
  }
}

</style>
