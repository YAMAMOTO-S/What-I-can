<template>
  <v-container fluid>
    <h1>This is Product page.</h1>
    <v-row>
      <v-col cols="12" class="d-flex flex-row" md="12" lg="12" xl="12" align="center" justify="center">
        <v-col cols="4">
          <SeatApp />
        </v-col>
        <v-col cols="4">
          <Exchange />
        </v-col>
        <v-col cols="4">
          <ArrayMethods />
        </v-col>
      </v-col>
    </v-row>
    <ArrayMethods />
  </v-container>
</template>

<script>
import SeatApp from "@/components/SeatApp";
import Exchange from "@/components/Exchange";
import ArrayMethods from "@/components/ArrayMethod";

export default {
  components: { SeatApp, Exchange, ArrayMethods }
};
</script>
