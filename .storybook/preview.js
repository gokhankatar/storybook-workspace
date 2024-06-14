import { setup } from '@storybook/vue3';
import { registerPlugins } from '../src/plugins';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';

setup((app) => {
  registerPlugins(app);
});

export const decorators = [withVuetifyTheme];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
      ],
      dynamicTitle: true,
    },
  },
};