<template>
  <v-app>
    <div class="App">
      <!-- 認証されている場合 -->
      <v-toolbar
        class="elevation-0"
        extended
        extension-height=""
        prominent
        color="#AAD6EC"
      >
        <div>
          <h1 class="test">Shunya Yamamoto</h1>
        </div>
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text to="/" color="#EEF9FF">HOME</v-btn>
          <v-btn text to="/products" color="#EEF9FF">products</v-btn>
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
  name: "App", 
  computed: {}
};
</script>

<style>
.test {
  margin-top: 40px;
  color: #eef9ff;
}
v-toolbar {
  color: #aad6ec;
}
</style>
