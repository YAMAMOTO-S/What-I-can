<template>
  <div class="back">
    <v-container>
      <div class="content animated fadeIn">

        <div class="product_card">
          <v-col cols="6">
            <div class="left">
              <v-card>
                <div class="recome1">
                  <v-img src="../assets/recome1.png" aspect-ratio="2" class="image1"></v-img>
                </div>
              </v-card>
              <v-card>
                <div class="recome1">
                  <v-img src="../assets/recome2.png" aspect-ratio="2"></v-img>
                </div>
              </v-card>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="right">
              <div class="title">
                <a href="http://18.181.11.87/" target=”_blank”><p>Recommen</p></a>
                <v-btn icon>
                  <a href="https://github.com/YAMAMOTO-S/Recommen" target=”_blank”>
                      <i class="devicon-github-plain colored"></i>
                  </a>
                </v-btn>
              </div>
              <div class="gaiyou">
                <p class="head">アプリ概要</p>
                <p class="disc">自分のとっておきを全力で紹介したり、探すことの出来るアプリです。<br>様々な投稿サイトで皆さん自分のオススメの物を紹介しているが、それに特化したサイトが無かったので、ジャンルを決めずに商品を探すのが非常に難しかった。なのでオススメする事に特化したサイトを作れば商品と出会いやすくなり、ユーザーの生活の質が向上すると考えたので作成しました。</p>
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
                <router-link to="/recommen" class="link">
                  詳しく見る
                </router-link>
              </div>
            </div>
          </v-col>
        </div>

<!-- Geo-App -->
        <div class="product_card">
          <v-col cols="6">
            <div class="left">
              <v-card>
                <div class="recome1">
                  <v-img src="../assets/geo1.png" aspect-ratio="2" class="image1"></v-img>
                </div>
              </v-card>
              <v-card>
                <div class="recome1">
                  <v-img src="../assets/geo2.png" aspect-ratio="2"></v-img>
                </div>
              </v-card>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="right">
              <div class="title">
                <a href="https://geo-app-60123.web.app/" target=”_blank”><p>Geo-App</p></a>
                <v-btn icon>
                  <a href="https://github.com/YAMAMOTO-S/Geo-App" target=”_blank”>
                      <i class="devicon-github-plain colored"></i>
                  </a>
                </v-btn>
              </div>
              <div class="gaiyou">
                <p class="head">アプリ概要</p>
                <p class="disc">Google Map API を利用したユーザーの位置の表示と、マイページでの非同期チャットが可能。なSPAです。
                  <br>ここ数年勢いが出てきたVue.js とFirebase が個人的に興味があり勉強の為に作成しました。
                    またAPI を使用してみたかったのでGoogle Map API を使用しました。</p>
              </div>
              <div class="gizyutu">
                <p class="head">使用技術</p>
                <p class="disc">フロントエンド</p>
                <p class="disc">HTML, Javascript, Vue.js</p>
                <p class="disc">バックエンド, データベース</p>
                <p class="disc">Firebase Database</p>
                <p class="disc">本番環境</p>
                <p class="disc">Firebase Hosting</p>
              </div>
              <div class="btn">
                <router-link to="/geo-app" class="link">
                  詳しく見る
                </router-link>
              </div>
            </div>
          </v-col>
        </div>

<!-- ここからFURIMA -->
        <div class="product_card">
          <v-col cols="6">
            <div class="left">
              <v-card>
                <div class="recome1">
                  <v-img src="../assets/hurima1.jpeg" aspect-ratio="2" class="image1"></v-img>
                </div>
              </v-card>
              <v-card>
                <div class="recome1">
                  <v-img src="../assets/hurima2.png" aspect-ratio="2"></v-img>
                </div>
              </v-card>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="right">
              <div class="title">
                <a href="http://54.64.129.213/" target=”_blank”><p>FURIMA</p></a>
                <v-btn icon>
                  <a href="https://github.com/YAMAMOTO-S/freemarket_sample_72e" target=”_blank”>
                      <i class="devicon-github-plain colored"></i>
                  </a>
                </v-btn>
              </div>
              <div class="gaiyou">
                <p class="head">アプリ概要</p>
                <p class="disc">TechExpert(現TechCamp)での学習において作成したフリマアプリです。
                  <br>5人でチームを組み、アジャイル開発(スクラム)で開発を進めました。初めの1週間はオフラインで集まり開発をしていましたが、新型コロナウイルスでそれ以降は完全リモートでの作業となりました。ローカルとリーモート、両方経験できたのは良い経験になりました。</p>
              </div>
              <div class="gizyutu">
                <p class="head">使用技術</p>
                <p class="disc">フロントエンド</p>
                <p class="disc">Haml, Sass, JavaScript, JQuery</p>
                <p class="disc">バックエンド</p>
                <p class="disc">Ruby, Ruby on rails</p>
                <p class="disc">本番環境</p>
                <p class="disc">AWS(VPC, EC2, S3)</p>
              </div>
              <div class="btn">
                <router-link to="/furima" class="link">
                  詳しく見る
                </router-link>
              </div>
            </div>
          </v-col>
        </div>

<!-- ここからmeal -->
        <div class="product_card">
          <v-col cols="6">
            <div class="left">
              <v-card>
                <div class="recome1">
                  <v-img src="../assets/meal1.png" aspect-ratio="2" class="image1"></v-img>
                </div>
              </v-card>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="right">
              <div class="title">
                <p>MealFinder</p>
              </div>
              <div class="gaiyou">
                <p class="head">アプリ概要</p>
                <p class="disc">
                  Meal APIを使用して料理名(英語)で検索すると料理を表示するというもの。<br>
                  どうも自分はライブラリに頼りすぎていると感じたので、素のJavascriptを学習するためにアウトプットの一つとして作成しました。<br>
                </p>
              </div>
              <div class="gizyutu">
                <p class="head">使用技術</p>
                <p class="disc">HTML, css, Javascript</p>
              </div>
              <div class="btn">
                <router-link to="/meal" class="link">
                  詳しく見る
                </router-link>
              </div>
            </div>
          </v-col>
        </div>


<!-- ここからportfolio -->
        <div class="product_card">
          <v-col cols="6">
            <div class="left">
              <v-card>
                <div class="recome1">
                  <v-img src="../assets/port1.png" aspect-ratio="2" class="image1"></v-img>
                </div>
              </v-card>
              <v-card>
                <div class="recome1">
                  <v-img src="../assets/port2.png" aspect-ratio="2"></v-img>
                </div>
              </v-card>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="right">
              <div class="title">
                <p>Portfolio</p>
                <v-btn icon>
                  <a href="https://github.com/YAMAMOTO-S/What-I-can" target=”_blank”>
                      <i class="devicon-github-plain colored"></i>
                  </a>
                </v-btn>
              </div>
              <div class="gaiyou">
                <p class="head">アプリ概要</p>
                <p class="disc">ご覧いただいているポートフォリオサイトです。
                  <br>Vue.jsのVueRouter を使用してSPA化しています。
                  <br>なるべく堅い雰囲気にならないように、しかし緩すぎるのは駄目とデザインが一番難しかったです。
                </p>
              </div>
              <div class="gizyutu">
                <p class="head">使用技術</p>
                <p class="disc">フロントエンド</p>
                <p class="disc">HTML, Javascript, Vue.js</p>
                <p class="disc">バックエンド, データベース</p>
                <p class="disc">Firebase Database</p>
                <p class="disc">本番環境</p>
                <p class="disc">Firebase Hosting</p>
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
      width: 900px;
      max-width: 850px;
      margin: 0 auto;

      .left {
        margin-top: 100px;
        .image1 {
          margin-bottom: 30px;
        } 
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
          margin-top: 10px;
          margin-bottom: 50px;
          a {
            color: white;
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
