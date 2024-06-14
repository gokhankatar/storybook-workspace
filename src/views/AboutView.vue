<template>
  <v-row class="my-5 d-flex justify-center align-center">
    <h3 class="text-h5 text-md-h3 text-success">Technologies</h3>
  </v-row>
  <v-row class="btn-container pa-5 d-flex flex-wrap justify-center align-center">
    <v-btn variant="outlined" rounded="xl" color="green">Vue3</v-btn>
    <v-btn variant="outlined" rounded="xl" color="green">Vue Router</v-btn>
    <v-btn variant="outlined" rounded="xl" color="green">Vuex</v-btn>
    <v-btn variant="outlined" rounded="xl" color="green">Vuetify</v-btn>
    <v-btn variant="outlined" rounded="xl" color="green">Vite</v-btn>
    <v-btn variant="outlined" rounded="xl" color="green">Storybook</v-btn>
  </v-row>
</template>
<script>
export default {
  name: "AboutView",
};
</script>
<style scoped>
.btn-container {
  gap: 0.8rem;
}
</style>
