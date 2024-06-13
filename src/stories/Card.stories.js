import { ArgTypes } from "@storybook/blocks";
import Card from "../components/Card.vue";

export default {
  component: { Card },
  title: "Card",
  ArgTypes: {
    theme: { control: "color" },
  },
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card :="args" />',
});

export const Theme = {
  render: Template,
  args: {
    theme: "warning",
    activity: "Paris Conference (France)",
    time: "12/05/2024",
    projectLogoUrl:
      "https://www.pngfind.com/pngs/m/493-4934627_storybook-icon-ddf01037-storybook-js-hd-png-download.png",
    projectName: "Storybook Corporation",
    activityMsg:
      "Storybook company will hold a conference in Paris on May 12 at 09:30. Participants will be given a certificate.",
    btnPrimaryText: "browse",
    btnSecondaryText: "details",
    vote: 85,
    percentage: 92,
    releaseTime: "06 Jun 2024",
  },
};
