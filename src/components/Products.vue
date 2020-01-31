<template>
   <v-container>
      <h1>This is Product page.</h1>
      <SeatApp/>
      <VideoApp/>
   </v-container>
</template>

<script>
import SeatApp from '@/components/SeatApp'
import VideoApp from '@/components/Video'

export default {
   components: {SeatApp, VideoApp}
}
</script>