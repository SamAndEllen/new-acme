<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="headline text-uppercase toolbar__title">
        <span>SOFTWARE</span>
        <span class="font-weight-light">300</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <v-card flat class="pa-3 fill-height">
        <router-view />
      </v-card>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style scoped>
  .toolbar__title {
    width: 100%;
    text-align: center;
  }
</style>
