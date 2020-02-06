<template>
  <v-container>
    <h1>This is Product page.</h1>
    <v-row cols="12" class="d-flex flex-row">
      <v-col cols="6">
        <SeatApp />
      </v-col>
      <v-col cols="6">
        <Exchange />
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
