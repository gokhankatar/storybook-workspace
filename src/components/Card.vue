<template>
  <div class="card-wrapper">
    <div
      class="card"
      :style="{
        boxShadow: `0 0 1.2rem ${theme}`,
        color: theme,
      }"
    >
      <h2 class="card-title">{{ cardTitle }}</h2>
      <h4 class="card-subtitle">{{ cardSubtitle }}</h4>
      <p class="card-message">{{ cardMsg }}</p>
    </div>
    <div
      class="card"
      :style="{
        boxShadow: `0 0 1.2rem ${theme}`,
        color: theme,
      }"
    >
      <h2 class="card-title">{{ cardTitle }}</h2>
      <h4 class="card-subtitle">{{ cardSubtitle }}</h4>
      <p class="card-message">{{ cardMsg }}</p>
    </div>
    <div
      class="card"
      :style="{
        boxShadow: `0 0 1.2rem ${theme}`,
        color: theme,
      }"
    >
      <h2 class="card-title">{{ cardTitle }}</h2>
      <h4 class="card-subtitle">{{ cardSubtitle }}</h4>
      <p class="card-message">{{ cardMsg }}</p>
    </div>
    <div
      class="card"
      :style="{
        boxShadow: `0 0 1.2rem ${theme}`,
        color: theme,
      }"
    >
      <h2 class="card-title">{{ cardTitle }}</h2>
      <h4 class="card-subtitle">{{ cardSubtitle }}</h4>
      <p class="card-message">{{ cardMsg }}</p>
    </div>
    <div
      class="card"
      :style="{
        boxShadow: `0 0 1.2rem ${theme}`,
        color: theme,
      }"
    >
      <h2 class="card-title">{{ cardTitle }}</h2>
      <h4 class="card-subtitle">{{ cardSubtitle }}</h4>
      <p class="card-message">{{ cardMsg }}</p>
    </div>
    <div
      class="card"
      :style="{
        boxShadow: `0 0 1.2rem ${theme}`,
        color: theme,
      }"
    >
      <h2 class="card-title">{{ cardTitle }}</h2>
      <h4 class="card-subtitle">{{ cardSubtitle }}</h4>
      <p class="card-message">{{ cardMsg }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardVue",
  props: {
    theme: {
      type: String,
      default: "purple",
    },
    cardTitle: {
      type: String,
      default: "Card Title",
    },
    cardSubtitle: {
      type: String,
      default: "There is a subtitle",
    },
    cardMsg: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci vel assumenda corporis ratione nemo aliquid. Odit illum facilis itaque corporis magnam consequatur tenetur, veniam, reprehenderit reiciendis id libero? Dicta.",
    },
  },
};
</script>
<style scoped>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.9rem;

  padding: 1rem;
  margin: 2rem 0;
}
.card {
  flex: 0 30%;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  padding: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 0.5rem;
  letter-spacing: 1px;
}
.card:hover {
  scale: 1.1;
}
.card h4 {
  text-transform: capitalize;
}
.card p {
  font-size: 0.9rem;
}
</style>
