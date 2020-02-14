<template>
  <v-container>
    <v-row align="center" justify="center" class="animated fadeIn">
      <v-col cols="10" class="d-lg-flex " align="center" justify="center"
        >
      <v-col
        cols="4"
        md="12"
        lg="4"
        xl="4"
        align="center"
        justify="center"
      >
        <SeatApp />
      </v-col>
      <v-col
        cols="4"
        md="12"
        lg="4"
        xl="4"        
        align="center"
        justify="center"
      >
        <Exchange />
      </v-col>
      <v-col
        cols="4"
        md="12"
        lg="4"
        xl="4"        
        align="center"
        justify="center"
      >
        <ArrayMethods />
      </v-col>
      </v-col>
    </v-row>

    <v-row  align="center" justify="center" class="animated fadeIn"> 
      <v-col cols="12" md="10" lg="12" xl="12">
        <Meal />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SeatApp from "@/components/SeatApp";
import Exchange from "@/components/Exchange";
import ArrayMethods from "@/components/ArrayMethod";
import Meal from "@/components/Meal";

export default {
  components: { SeatApp, Exchange, ArrayMethods, Meal }
};
</script>

<style scoped>

</style>
