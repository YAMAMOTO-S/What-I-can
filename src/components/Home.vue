<template>
   <div class="back">
      <v-container>
         <div class="contents animated fadeIn">

            <div class="user_image_desc">
               <div class="user_image">
                  <img src="@/assets/web.jpg">

                  <div class="twitter">
                     <v-btn icon>
                        <a href="https://twitter.com/home" target=”_blank”>
                           <i class="devicon-twitter-plain colored"></i>
                        </a>
                     </v-btn>
                     <v-btn icon>
                        <a href="https://github.com/YAMAMOTO-S" target=”_blank”>
                           <i class="devicon-github-plain colored"></i>
                        </a>
                     </v-btn>
                  </div>
               </div>

               <div class="user_desc">
                  <div class="name">
                     <p>名前: 山本隼也</p>
                     <br>
                     <p>年齢: 23</p>
                     <br>
                     <p>所在地: 京都市</p>
                     <br>
                     <p>学歴:</p>
                     <p class="disc">  2016.04.01 佛教大学 文学部 英米学科入学</p>
                     <p class="disc">  2020.03.13 佛教大学 文学部 英米学科卒業</p>
                     <br>
                     <p>学習歴: </p>
                     <p class="disc">  2020.02.17 TechExpert(現TechCamp)にてプログラミング学習スタート</p>
                     <p class="disc">  2020.04.24 TechCamp 卒業</p>
                     <br>
                     <p>資格:</p>
                     <p class="disc">  TOEIC L&Rテスト 780点 </p>
                     <br>
                     <p>学習言語:</p>

                     <p class="disc">フロントエンド:</p>
                     <div class="front">
                        <div class="language_card">
                        <i class="devicon-html5-plain-wordmark colored"></i>
                        <p>HTML5</p>
                        </div>
                        <div class="language_card">
                           <i class="devicon-css3-plain-wordmark colored"></i>
                           <p>CSS</p>
                        </div>
                        <div class="language_card">
                           <i class="devicon-sass-original colored"></i>
                           <p>SASS</p>
                        </div>
                     </div>

                     <div class="front">
                        <div class="language_card">
                        <i class="devicon-javascript-plain colored"></i>
                        <p>Javascript</p>
                     </div>
                     <div class="language_card">
                        <i class="devicon-jquery-plain-wordmark colored"></i>
                        <p>jQuery</p>
                     </div>
                     <div class="language_card">
                        <i class="devicon-vuejs-plain-wordmark colored"></i>
                        <p>Vue.js</p>
                     </div>
                     </div>

                     <p class="disc">サーバーサイド:</p>
                     <div class="side">
                        <div class="language_card">
                           <i class="devicon-ruby-plain-wordmark colored"></i>
                           <p>Ruby</p>
                        </div>
                        <div class="language_card">
                           <i class="devicon-rails-plain-wordmark colored"></i>
                           <p>Ruby on rails</p>
                        </div>
                        <div class="language_card">
                           <i class="devicon-amazonwebservices-plain-wordmark colored"></i>
                           <p>AWS</p>
                        </div>
                     </div>
                     
                  </div>
               </div>
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
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/devicon.min.css";

.back {
   background-color: #EDF2F7;
   height: 100%;

   .user_image_desc {
      display: flex;
      margin-top: 40px;
      margin-bottom: 100px;
      p {
         color: #677284;
      }
      .user_image {
         width: 400px;
         text-align: center;
         margin-left: 200px;
         img {
            width: 230px;
            height: 300px;
            margin-top: 130px;
         }
         .twitter {
            margin-top: 5px;
            i {
               font-size: 25px;
            }
            a {
               text-decoration: none;
            }
         }
      }
      .name {
         font-family: "ヒラギノ丸ゴ ProN",sans-serif;
         font-size: 16px;
         margin-left: 100px;
         .disc {
            margin-left: 20px;
         }
         .front {
            display: flex;
            margin-left: 20px;
            .language_card {
            display: flex;
            margin-left: 20px;
            width: 200px;
            i {
               font-size: 50px;
            }
            p{
               line-height: 50px;
            }
         }
         }
         .side {
            display: flex;
            margin-left: 20px;
            .language_card {
            display: flex;
            margin-left: 20px;
            width: 200px;
            i {
               font-size: 50px;
            }
            p{
               line-height: 50px;
            }
         }
         }
      }
   }
}
</style>
