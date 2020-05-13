<template>
   <div class="back">
      <v-container>
         <div class="contents animated fadeIn">

            <div class="user_image_desc">
               <div class="user_image">
                  <img src="@/assets/web.jpg">
               </div>

               <div class="user_desc">
                  <div class="name">
                     <p>名前: 山本隼也</p>
                     <br>
                     <p>年齢: 23</p>
                     <br>
                     <p>所在地: 京都</p>
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
                  </div>
               </div>
            </div>
            <div class="skill">
               <p>学習言語</p>
               <div class="language_card">
                  <p><i class = "devicon-amazonwebservices-original "></i>aaa</p>
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
   height: 800px;

   .user_image_desc {
      display: flex;
      margin-top: 40px;
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
      }
      .name {
         font-family: "ヒラギノ丸ゴ ProN",sans-serif;
         font-size: 16px;
         margin-left: 100px;
         .disc {
            margin-left: 20px;
         }
      }
   }

   .skill {
      border-top: #677284 1px solid;
      margin-top: 40px;
   }
}
</style>
