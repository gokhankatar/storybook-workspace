import Button from "../components/Button.vue";

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    bgColor: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button :="args" />',
});

export const Large = {
  render: Template,
  args: {
    text: 'Click me',
    size: 'large',
    bgColor: 'transparent',
  },
};

export const Medium = {
  render: Template,
  args: {
    text: 'Click me',
    size: 'medium',
    bgColor: 'transparent',
  },
};

export const Small = {
  render: Template,
  args: {
    text: 'Click me',
    size: 'small',
    bgColor: 'transparent',
  },
};
