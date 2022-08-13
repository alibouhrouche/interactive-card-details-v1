import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardBack } from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CardBack',
  component: CardBack,
} as ComponentMeta<typeof CardBack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardBack> = (args) => <CardBack {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  cvc: '123'
};

