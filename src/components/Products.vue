<template>
  <v-container fluid>
    <h1>This is Product page.</h1>
    <v-row>
      <!-- <v-col cols="12" class="d-flex flex-row" align="center" justify="center"> -->
      <v-col
        cols="4"
        md="6"
        lg="4"
        xl="4"
        class="d-flex flex-row"
        align="center"
        justify="center"
      >
        <SeatApp />
      </v-col>
      <v-col
        cols="4"
        md="6"
        lg="4"
        xl="4"
        class="d-flex flex-row"
        align="center"
        justify="center"
      >
        <Exchange />
      </v-col>
      <v-col
        cols="4"
        md="6"
        lg="4"
        xl="4"
        class="d-flex flex-row"
        align="center"
        justify="center"
      >
        <ArrayMethods />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="10" lg="12" xl="12" align="center" justify="center">
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
