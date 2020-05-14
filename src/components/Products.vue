<template>
  <div class="back">
    <v-container>
      <div class="content animated fadeIn">
        <div class="product_card">
          <v-col cols="6">
            <div class="left">
              <div class="recome1">
                <v-img src="../assets/recome1.png" aspect-ratio="2"></v-img>
              </div>
              <div class="recome1">
                <v-img src="../assets/recome2.png" aspect-ratio="2"></v-img>
              </div>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="right">
              <div class="title">
                <p>Recommen</p>
                <v-btn icon>
                  <a href="https://github.com/YAMAMOTO-S" target=”_blank”>
                      <i class="devicon-github-plain colored"></i>
                  </a>
                </v-btn>
              </div>
              <div class="gaiyou">
                <p class="head">アプリ概要</p>
                <p class="disc">自分のとっておきを全力で紹介したり、探すことの出来るアプリです。</p>
              </div>
              <div class="gizyutu">
                <p class="head">使用技術</p>
                <p class="disc">フロントエンド</p>
                <p class="disc">HTML, Sass, JavaScript, JQuery</p>
                <p class="disc">バックエンド</p>
                <p class="disc">Ruby, Ruby on rails</p>
                <p class="disc">本番環境</p>
                <p class="disc">AWS(VPC, EC2, RDS, S3)</p>
              </div>
              <div class="btn">
                <router-link to="/" class="link">
                  詳しく見る
                </router-link>
              </div>
            </div>
          </v-col>
        </div>

      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {}
};
</script>

<style scoped lang="scss">
  .back {
    background-color: #EDF2F7;
    height: 100%;
    .product_card {
      margin-top: 50px;
      border-top: 1px #677284 solid;
      display: flex;

      .left {
        margin-top: 50px;
      }

      .right {
        margin-top: 50px;
        margin-left: 20px;
        .title {
          display: flex;
          p {
            font-size: 25px;
            font-family: "Hiragino Sans", "Meiryo", "sans-serif";
            color: #454c50;
          }
          a {
            font-size: 25px;
            text-decoration: none;
          }
        }
        .gaiyou {
          .head {
            font-weight: bold;
            font-family: "Hiragino Sans", "Meiryo", "sans-serif";
            color: #454c50;
          }
          p {
            font-family: "ヒラギノ丸ゴ ProN", sans-serif;
            color: #677284;
          }
        }
        .gizyutu {
          .head {
            font-weight: bold;
            font-family: "Hiragino Sans", "Meiryo", "sans-serif";
            color: #454c50;
          }
          p {
            font-family: "ヒラギノ丸ゴ ProN", sans-serif;
            color: #677284;
          }
        }
        .btn {
          border: 1px white solid;
          display:inline-block;
          background-color: #677284;
          border-radius: 20px;
          margin-top: 50px;
          a {
            color: #EDF2F7;
            text-decoration: none;
            padding: 10px;
          }
        }

      }
    }
    .disc {
      margin-left: 15px;
    }   
  }
</style>
