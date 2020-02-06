<template>
   <v-container>
      <h1>This is Product page.</h1>
      <SeatApp/>
      <Exchange/>
      <ArrayMethods />
   </v-container>
</template>

<script>
import SeatApp from '@/components/SeatApp'
import Exchange from '@/components/Exchange'
import ArrayMethods from '@/components/ArrayMethod'

export default {
   components: {SeatApp, Exchange, ArrayMethods}
}
</script>