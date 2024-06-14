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
  render:Template,
  args:{
    theme:"purple",
    activity:"Miami Conference (USA)",
    time:"12/05/2024",
    projectLogoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
    projectName:"Nakamoto Corporation",
    activityMsg:
      "Satoshi Nakamoto company will hold a conference in Paris on May 12 at 09:30. Participants will be given a certificate.",
    btnPrimaryText:"browse",
    btnSecondaryText:"details",
    vote:85,
    percentage:92,
    releaseTime:"06 Jun 2024",
  },
};
