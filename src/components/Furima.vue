<template>
  <div>
    <div class="back">
      <div class="content animated fadeIn">
        <v-card style="height: 380px; width: 750px;">
          <img src="../assets/hurima1.jpeg" style="height: 380px; width: 750px;">
        </v-card>
      </div>
    </div>

    <div class="back2 animated fadeIn">
      <div class="block">
        <div style="display: flex;">
          <a href="http://18.181.11.87/" target=”_blank”><h2 class="head">FURIMA</h2></a>
          <v-btn icon class="btn">
              <a href="https://github.com/YAMAMOTO-S/Recommen" target=”_blank”>
                  <i class="devicon-github-plain colored"></i>
              </a>
            </v-btn>
        </div>
        <div class="overview">
          <div><p class="overtitle">overview</p></div>
          <br>
          <p>人が本当にオススメするものを、ジャンル問わず閲覧するサイトがなかったので作成しました。</p>
          <br>
          <p>Github:<a href="https://github.com/YAMAMOTO-S/Recommen"> https://github.com/YAMAMOTO-S/Recommen</a></p>
          <p>サイトURL:<a href="http://18.181.11.87/"> http://18.181.11.87/</a></p>
          <p><v-icon>mdi-calendar</v-icon> | 2020/05 ~</p>
        </div>
        <div class="user">
          <p class="usertitle">ユーザー情報</p>
          <p class="desc">test@gmail.com<br>123456</p>
        </div>

        <div class="gaiyou">
          <p class="head">概要</p>
          <p class="desc">自分のとっておきを全力で紹介したり、探すことの出来るアプリです。</p>
        </div>
        <div class="why">
          <p class="head">なぜ作成したか？</p>
          <p class="desc">様々な投稿サイトでユーザー同士が自分のオススメの物を紹介しているが、<br>それに特化したサイトが無かったので、ジャンルを決めない状態で商品を探すのが非常に難しかった。<br>なのでオススメする事に特化したサイトを作れば商品と出会いやすくなり、ユーザーの生活の質が向上すると考えたから。</p>
        </div>
        <div class="gizyutu">
          <p class="head">使用技術一覧</p>
          <p class="desc">フロントエンド<br>
            ・HTML, Sass, JavaScript, JQuery<br>
            バックエンド<br>
            ・Ruby, Ruby on rails<br>
            本番環境<br>
            ・AWS(VPC, EC2, RDS, S3)
          </p>
        </div>
        <div class="kinou">
          <p class="head">機能一覧</p>
          <p class="desc">・ユーザー登録, ログイン, ログアウト, ユーザーの編集機能(devise使用)<br>
          ・記事投稿, 編集, 削除, 詳細表示機能<br>
          ・S3への画像アップロード機能(carrierwave使用)<br>
          ・記事のプレビュー機能<br>
          ・いいね機能(非同期)<br>
          ・コメント機能<br>
          ・カテゴリー登録, 編集, 削除機能<br>
          ・カテゴリー検索機能<br>
          ・フォロー, フォロワー機能<br>
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
