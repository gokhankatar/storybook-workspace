import { h } from 'vue';
import StoryWrapper from './StoryWrapper.vue';

export const DEFAULT_THEME = 'dark';

export const withVuetifyTheme = (storyFn, context) => {
    const themeName = context.globals.theme || DEFAULT_THEME;
    const story = storyFn();

    return () => {
        return h(
            StoryWrapper,
            { themeName },
            {
                story: () => h(story, { ...context.args }),
            }
        );
    };
};