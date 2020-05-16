<template>
  <div>
    <div class="back">
      <div class="content animated fadeIn">
        <v-card style="height: 380px; width: 750px;">
          <img src="../assets/geo1.png" style="height: 380px; width: 750px;">
        </v-card>
      </div>
    </div>

    <div class="back2 animated fadeIn">
      <div class="block">
        <div style="display: flex;">
          <a href="https://geo-app-60123.web.app/login" target=”_blank”><h2 class="head">Geo-App</h2></a>
          <v-btn icon class="btn">
              <a href="https://github.com/YAMAMOTO-S/Geo-App" target=”_blank”>
                  <i class="devicon-github-plain colored"></i>
              </a>
            </v-btn>
        </div>
        <div class="overview">
          <div><p class="overtitle">overview</p></div>
          <br>
          <p>ここ数年勢いが出てきたVue.js とFirebase を個人的に興味があり勉強の為に作成しました。<br>
            Google Map API を利用したユーザーの位置の表示と、マイページでの非同期チャットが可能です。</p>
          <br>
          <p>Github:<a href="https://github.com/YAMAMOTO-S/Geo-App"> https://github.com/YAMAMOTO-S/Geo-App</a></p>
          <p>サイトURL:<a href="https://geo-app-60123.web.app/"> https://geo-app-60123.web.app/</a></p>
          <p><v-icon>mdi-calendar</v-icon> | 2019/10 ~</p>
        </div>
        <div class="user">
          <p class="usertitle">ユーザー情報</p>
          <p class="desc">1@gmail.com<br>123456</p>
        </div>

        <div class="gaiyou">
          <p class="head">概要</p>
          <p class="desc">Google Map API を利用したユーザーの位置の表示と、マイページでの非同期チャットが可能です。</p>
        </div>
        <div class="why">
          <p class="head">なぜ作成したか？</p>
          <p class="desc">ここ数年勢いが出てきているFirebase ,Firebase realtime Database, Firebase hostng, Vue.js に個人的に興味があり、勉強のアウトプットの為に作成しました。
            <br>このアプリを作成したお陰でSPAについてやAPIについて、深く理解することができました。</p>
        </div>
        <div class="gizyutu">
          <p class="head">使用技術一覧</p>
          <p class="desc">フロントエンド<br>
            ・Javascript , Vue.js , html、css<br>
            バックエンド<br>
            ・Firebase Database<br>
            本番環境<br>
            ・Firebase Hosting
          </p>
        </div>
        <div class="kinou">
          <p class="head">機能一覧</p>
          <p class="desc">・ユーザー登録, ログイン, ログアウト, ユーザーの編集機能<br>
          ・Google Map APIを用いた現在地の表示とピン差し<br>
          ・ピンを刺すとユーザーページが作成され、その中で非同期でのチャットができる。
          </p>
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
      .desc {
        font-family: "ヒラギノ丸ゴ ProN", sans-serif;
          color: #677284;
      }
      a {
        text-decoration: none;
      }
      .btn {
        margin-top: 50px;
        a {
          font-size: 30px;
          text-decoration: none;
          margin-left: 50px;
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
      .gaiyou {
        margin-top: 100px;
      }
      .why {
        margin-top: 100px;
      }
      .gizyutu {
        margin-top: 100px;
      }
      .kinou {
        margin-top: 100px;
        margin-bottom: 100px;
      }
      .user {
        border: 1px #677284 solid;
        border-radius: 10px;
        padding: 30px;
        margin-top: 20px;
        .usertitle {
          font-weight: bold;
          font-family: "ヒラギノ丸ゴ ProN", sans-serif;
          color: #454c50;
          font-size: 20px;
        }
      }
    }
  }
</style>
