<template>
  <v-app :theme="themeName">
    <v-main>
      <v-container>
        <slot name="story"></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    themeName: String,
  },
};
</script>
