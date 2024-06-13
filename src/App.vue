<template>
  <v-app :theme="$store.state.theme">
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
