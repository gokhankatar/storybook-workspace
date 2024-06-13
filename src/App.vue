<template>
  <v-app>
    <v-main>
      <Container />
    </v-main>
  </v-app>
</template>

<script>
import Container from "./components/Container.vue";

export default {
  name: "App",
  components: { Container },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
