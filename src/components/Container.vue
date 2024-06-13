<template>
  <v-container>
    <v-row class="container pa-5 d-flex justify-center align-center">
      <v-btn
        @click="$router.replace('/')"
        class="w-100 w-sm-auto"
        size="x-large"
        color="primary"
        variant="outlined"
        >Home</v-btn
      >
      <v-btn
        @click="$router.replace('/about')"
        class="w-100 w-sm-auto"
        size="x-large"
        color="success"
        variant="outlined"
        >About</v-btn
      >
      <v-btn
        @click="$router.replace('/app')"
        class="w-100 w-sm-auto"
        size="x-large"
        color="warning"
        variant="outlined"
        >App</v-btn
      >
      <v-btn
        @click="toggleTheme"
        class="w-100 w-sm-auto"
        size="x-large"
        color="teal-darken-2"
        variant="outlined"
        >Change Theme</v-btn
      >
    </v-row>
    <router-view />
  </v-container>
</template>
<script>
export default {
  name: "Container",
  methods: {
    toggleTheme() {
      this.$store.dispatch("changeTheme");
    },
  },
};
</script>
<style scoped>
.container {
  gap: 0.5rem;
}
</style>
