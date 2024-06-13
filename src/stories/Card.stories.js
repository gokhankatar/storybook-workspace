import { ArgTypes } from '@storybook/blocks';
import Card from '../components/Card.vue';

export default {
    component: { Card },
    title: 'Card',
    ArgTypes: {
        theme: { control: 'color' }
    }
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
        theme: 'purple',
        cardTitle: 'Card Title',
        cardSubtitle: 'There is subtitle',
        cardMsg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias aut blanditiis incidunt accusamus quas fugit nesciunt provident! Illum beatae dolore numquam quia nisi eaque perferendis aliquam quas labore hic.'
    },
};