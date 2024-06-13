<template>
  <v-row class="container pa-5 d-flex justify-center align-center">
    <v-btn @click="$router.replace('/')" size="x-large" color="primary" variant="outlined"
      >Home</v-btn
    >
    <v-btn
      @click="$router.replace('/about')"
      size="x-large"
      color="success"
      variant="outlined"
      >About</v-btn
    >
    <v-btn
      @click="$router.replace('/app')"
      size="x-large"
      color="warning"
      variant="outlined"
      >App</v-btn
    >
  </v-row>
  <router-view />
</template>
<script>
export default {
  name: "Container",
};
</script>
<style scoped>
.container {
  gap: 0.5rem;
}
</style>
