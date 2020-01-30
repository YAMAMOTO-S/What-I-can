<template>
  <v-app>
    <div class="App">

<!-- 認証されている場合 -->
      <v-toolbar class="elevation-0" extended extension-height="" prominent color="blue lighten-3">
            <div>
              <h1 class="test">Shunya Yamamoto</h1>
            </div>
            <v-spacer></v-spacer>
            
            <v-toolbar-items>
              <v-btn text to="/" color="#EEF9FF">HOME</v-btn>
              <v-btn text to="/meetups" color="#EEF9FF">products</v-btn>
            </v-toolbar-items>
      </v-toolbar>

      <main>
        <router-view></router-view>
      </main>
          
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      menuItems: [
        {title: 'Home', link: '/'},
        { icon: 'mdi-face', title: 'Meetups', link: '/meetups'},
        { icon: 'mdi-account-box-multiple', title: 'create', link: '/create'},
        {title: 'chat', link:'/chat'},
        { icon: 'mdi-account-badge-horizontal-outline', title: 'Profile', link: '/profile'},
        { icon: 'mdi-emoticon-neutral-outline', title: 'Sign up', link: '/signup'},
        { icon: 'mdi-account-card-details-outline', title: 'Login', link: '/login'},
      ],
      homelink: '/'
    }
  },
  computed: {
    
  }
};
</script>

<style>
.test{
  margin-top: 40px;
  color: #EEF9FF
}
v-toolbar{
  color: #AAD6EC
}

</style>
