<template>
   <v-container>
      <h1>This is Product page.</h1>
      <SeatApp/>
      <Exchange/>
   </v-container>
</template>

<script>
import SeatApp from '@/components/SeatApp'
import Exchange from '@/components/Exchange'

export default {
   components: {SeatApp, Exchange}
}
</script>