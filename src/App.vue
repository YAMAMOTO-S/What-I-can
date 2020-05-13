<template>
  <v-app>
    <div class="App">
      <div class="header">
        <h1 class="name animated fadeIn">Shunya Yamamoto</h1>
      </div>
      <div class="links">
        <router-link to="/" class="link">自己紹介</router-link>
        <router-link to="/seatApp" class="link">制作物</router-link>
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
  height: 440px;
  max-height: 440px;
  background-image: url('https://images.unsplash.com/photo-1469735139965-2d27590468a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3264&q=80');
  background-size: contain;
  background-size: cover;
  .name {
    text-align: center;
    line-height: 440px;
    font-family: "ヒラギノ丸ゴ ProN",sans-serif;
    color: white
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
