<template>
  <v-row class="back">
    <v-col cols=12 sm=12 md=12 lg=12>
      <div class="product-info">
        <div class="left">
          <v-img src="../assets/recome1.png" aspect-ratio="2" class="image1"></v-img>
        </div>
        <div class="right">
          <p>Recommen</p>
          <p>使用技術</p>
        </div>
      </div>
    </v-col>
  </v-row>
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
    .product-info {
      display: flex;
      .left {
        width: 300px;
        height: 300px;
      }
    }
}
</style>