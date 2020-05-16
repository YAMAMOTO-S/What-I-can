<template>
  <div>
    <div class="back">
      <div class="content animated fadeIn">
        <v-card style="height: 380px; width: 750px;">
          <img src="../assets/recome1.png" style="height: 380px; width: 750px;">
        </v-card>
      </div>
    </div>

    <div class="back2">
      <div class="block">
        <div style="display: flex;">
          <h2 class="head">Recommen</h2>
          <v-btn icon class="btn">
              <a href="https://github.com/YAMAMOTO-S/Recommen" target=”_blank”>
                  <i class="devicon-github-plain colored"></i>
              </a>
            </v-btn>
        </div>
        <div class="overview">
          <div><p class="overtitle">overview</p></div>
          <p>人が本当にオススメするものを、ジャンル問わず閲覧するサイトがなかったので作成しました。</p>
          <p><v-icon>mdi-calendar</v-icon> | 2020/05 ~</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";
  .back {
    background-color: #EDF2F7;
    height: 100%;
    .content {
      padding-top: 80px;
      padding-bottom: 80px;
      .v-card {
        margin: 0 auto;
      }
    }
  }
  
  .back2 {
    height: 1000px;
    .block {
      margin: 0 auto;
      width: 750px;
      max-width: 750px;
      .head {
        margin-top: 40px;
        font-family: "Hiragino Sans", "Meiryo", "sans-serif";
        color: #454c50;
        font-weight: bold;
        font-size: 35px;
      }
      .btn {
        margin-top: 50px;
        a {
          font-size: 30px;
          text-decoration: none;
          margin-left: 50px;
        }
        p {
        }
      }
      .overview {
        margin-top: 30px;
        border: 1px #677284 solid;
        border-radius: 10px;
        padding: 30px;
        .overtitle {
          font-weight: bold;
          font-family: "ヒラギノ丸ゴ ProN", sans-serif;
          color: #454c50;
          font-size: 20px;
        }
        p {
          font-family: "ヒラギノ丸ゴ ProN", sans-serif;
          color: #677284;
        }
      }
    }
  }
</style>
