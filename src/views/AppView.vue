<template>
  <v-row class="my-5 d-flex justify-center align-center">
    <h3 class="text-h5 text-md-h3 text-warning">There is app page</h3>
  </v-row>
  <Card />

</template>
<script>
import Card from '../components/Card.vue';
export default {
  name: "AppVue",
  components: { Card }
};
</script>
<style scoped></style>
