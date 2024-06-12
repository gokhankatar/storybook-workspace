<template>
  <div class="container">
    <button :class="sizeClass" :style="{ backgroundColor: bgColor }">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "ButtonVue",
  props: {
    text: {
      type: String,
      default: "Click Me",
    },
    bgColor: String,
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
  },
  computed: {
    sizeClass() {
      return `btn-${this.size}`;
    },
  },
};
</script>
<style scoped>
button {
  border: 1px solid purple;
  border-radius: 2.5rem;
  color: purple;
  background: transparent;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  cursor: pointer;
}
button:hover {
  background-color: purple !important;
  color: #fff !important;
}
.btn-small {
  font-size: 0.8rem;
  padding: 1rem;
}

.btn-medium {
  font-size: 0.9rem;
  padding: 1.5rem;
  letter-spacing: 1px;
}

.btn-large {
  letter-spacing: 2px;
  font-size: 1.2rem;
  padding: 1.8rem;
}
</style>
