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
          <a href="http://54.64.129.213/" target=”_blank”><h2 class="head">FURIMA</h2></a>
          <v-btn icon class="btn">
              <a href="https://github.com/YAMAMOTO-S/freemarket_sample_72e" target=”_blank”>
                  <i class="devicon-github-plain colored"></i>
              </a>
            </v-btn>
        </div>
        <div class="overview">
          <div><p class="overtitle">overview</p></div>
          <br>
          <p>TechExpert(現TechCamp)での学習において作成したフリマアプリです。
                  <br>5人でチームを組み、アジャイル開発(スクラム)で開発を進めました。初めの1週間はオフラインで集まり開発をしていましたが、新型コロナウイルスでそれ以降は完全リモートでの作業となりました。ローカルとリーモート、両方経験できたのは良い経験になりました。</p>
          <br>
          <p>Github:<a href="https://github.com/YAMAMOTO-S/freemarket_sample_72e" target=”_blank”> https://github.com/YAMAMOTO-S/freemarket_sample_72e</a></p>
          <p>サイトURL:<a href="http://54.64.129.213/" target=”_blank”> http://54.64.129.213/</a></p>
          <p><v-icon>mdi-calendar</v-icon> | 2020/04 ~</p>
        </div>
        <div class="user">
          <p class="usertitle">ユーザー情報</p>
          <p class="desc">hoge<br>1234</p>
        </div>

        <div class="gaiyou">
          <p class="head">概要</p>
          <p class="desc">TechExpert(現TechCamp)での学習において作成したフリマアプリです。
                  <br>5人でチームを組み、アジャイル開発(スクラム)で開発を進めました。初めの1週間はオフラインで集まり開発をしていましたが、新型コロナウイルスでそれ以降は完全リモートでの作業となりました。ローカルとリーモート、両方経験できたのは良い経験になりました。</p>
        </div>
        
        <div class="why">
          <p class="head">担当箇所</p>
          <p class="desc">
            ・DB設計<br>
            ・ウィザード形式でのユーザー登録、ログイン機能(バックエンド)<br>
            ・ユーザー登録ページ（フロントエンド）<br>
            ・商品出品機能（バックエンド）<br>
            ・商品情報編集機能（バックエンド）<br>
            ・デプロイ時のエラー解消<br>
          </p>
        </div>

        <div class="gizyutu">
          <p class="head">使用技術一覧</p>
          <p class="desc">フロントエンド<br>
            ・Haml, Sass, JavaScript, JQuery<br>
            バックエンド<br>
            ・Ruby, Ruby on rails<br>
            本番環境<br>
            ・AWS(VPC, EC2, S3)
          </p>
        </div>
        <div class="kinou">
          <p class="head">機能一覧</p>
          <p class="desc">・ユーザー登録, ログイン, ログアウト, ユーザーの編集機能(devise使用)<br>
          ・商品出品, 編集, 削除, 詳細表示機能<br>
          ・S3への画像アップロード機能(carrierwave使用)<br>
          ・いいね機能(非同期)<br>
          ・コメント機能<br>
          ・多階層カテゴリー登録, 編集, 削除機能<br>
          ・クレジットカードの登録、削除、購入機能
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
