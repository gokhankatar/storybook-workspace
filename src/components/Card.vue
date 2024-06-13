<template>
  <v-row class="my-5 d-flex flex-wrap justify-center align-center">
    <v-col v-for="(card, index) of cards" :key="index" cols="12" sm="5" md="4" lg="3">
      <v-card elevation="15" class="card-container pa-4 d-flex flex-column text-center">
        <div class="d-flex justify-space-between align-center">
          <div>
            <v-icon
              class="cursor-pointer"
              color="green"
              icon="mdi-checkbox-marked-circle"
            ></v-icon>
            <v-icon
              :color="theme"
              class="mx-1 cursor-pointer"
              icon="mdi-calendar"
            ></v-icon>
          </div>

          <div class="d-flex justify-center align-center">
            <img
              style="border-radius: 1rem"
              width="40"
              :src="projectLogoUrl"
              alt="project-logo"
            />
          </div>

          <div>
            <v-icon class="cursor-pointer" color="primary" icon="mdi-clock"></v-icon>
            <v-icon color="error" class="mx-1 cursor-pointer" icon="mdi-gavel"></v-icon>
          </div>
        </div>

        <div :class="`text-${theme}`">
          <h5 class="text-subtitle-1">{{ activity }}</h5>
          <p class="text-caption font-weight-bold">{{ time }}</p>
          <h4 class="text-h4">{{ projectName }}</h4>
        </div>

        <div>
          <p class="text-subtitle">{{ activityMsg }}</p>
        </div>

        <div class="btn-container d-flex justify-center">
          <v-btn :class="`text-${theme}`" :style="buttonStyle" rounded="xl">{{
            btnPrimaryText
          }}</v-btn>
          <v-btn :class="`text-${theme}`" :style="buttonStyle" rounded="xl">{{
            btnSecondaryText
          }}</v-btn>
        </div>

        <div>
          <div class="d-flex justify-space-between">
            <span class="text-caption-1 font-weight-bold">{{ percentage }}%</span>
            <span class="text-caption-1 font-weight-bold">{{ vote }} votes</span>
          </div>
          <hr class="my-1" :color="theme" />
        </div>

        <div v-if="!isVote" class="d-flex justify-space-between">
          <v-btn @click="showVoteMsg" size="large" prepend-icon="mdi-thumb-up"
            >Good</v-btn
          >
          <v-btn @click="showVoteMsg" size="large" prepend-icon="mdi-thumb-down"
            >Bad</v-btn
          >
        </div>

        <div v-if="isVote" :class="`text-subtitle text-${theme}`">
          <p>Thanks for your vote!</p>
        </div>

        <div class="pa-1">
          <p class="text-caption">Released {{ releaseTime }}</p>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "CardVue",
  props: {
    activity: {
      type: String,
      default: "Paris Conference (France)",
    },
    time: {
      type: String,
      default: "12/05/2024",
    },
    projectLogoUrl: {
      type: String,
      default:
        "https://www.pngfind.com/pngs/m/493-4934627_storybook-icon-ddf01037-storybook-js-hd-png-download.png",
    },
    projectName: {
      type: String,
      default: "Storybook Corporation",
    },
    activityMsg: {
      type: String,
      default:
        "Storybook company will hold a conference in Paris on May 12 at 09:30. Participants will be given a certificate.",
    },
    btnPrimaryText: {
      type: String,
      default: "browse",
    },
    btnSecondaryText: {
      type: String,
      default: "details",
    },
    theme: {
      type: String,
      default: "warning",
    },
    vote: {
      type: Number,
      default: Math.floor(Math.random() * 100),
    },
    percentage: {
      type: Number,
      default: Math.floor(Math.random() * 100),
    },
    releaseTime: {
      type: String,
      default: "06 Jun 2024",
    },
  },
  data() {
    return {
      isVote: false,
      cards: Array(16),
    };
  },
  methods: {
    showVoteMsg() {
      this.isVote = true;
      setTimeout(() => {
        this.isVote = false;
      }, 2000);
    },
  },
  computed: {
    buttonStyle() {
      return {
        border: "1px solid",
        boxShadow: "0 0 .5rem",
      };
    },
  },
};
</script>
<style scoped>
.card-container {
  gap: 0.9rem;
  line-height: 1.8;
}

.btn-container {
  gap: 0.7rem;
}
</style>
