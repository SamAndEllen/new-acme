<template>
  <v-app>
    <v-app-bar app
      dark
      src="@/assets/toolbar.jpg"
    >
      <v-btn v-if="requireBackNav" icon @click="backMove">
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
      <v-card flat class="fill-height">
        <router-view />
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      requireBackNav: 'requireBackNav',
    })
  },
  methods: {
    backMove () {
      this.$router.go(-1);
    }
  },
};
</script>
<style scoped>
  .toolbar__title {
    width: 100%;
    text-align: center;
  }
</style>
