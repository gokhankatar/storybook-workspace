<template>
  <v-row class="my-5 d-flex justify-center align-center">
    <h3 class="text-h5 text-md-h3 text-primary">Home Page</h3>
  </v-row>
  <v-row class="ma-5">
    <v-sheet
      class="container pa-5 my-5 mx-auto"
      rounded="xl"
      max-width="400"
      color="primary"
    >
      <p class="text-subtitle-1 text-justify">
        The purpose of this project is to create a card component, design it with vuetify,
        and then change the design of the card component without making any changes to the
        actual component on the storybook side.
      </p>
    </v-sheet>
  </v-row>
</template>
<script>
export default {
  name: "HomeView",
};
</script>
<style scoped>
.container {
  box-shadow: 0 0 3rem #2196f3;
}
</style>
