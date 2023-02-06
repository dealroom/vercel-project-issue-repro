import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Test } from './test';

const Story: ComponentMeta<typeof Test> = {
  component: Test,
  title: 'Test',
};
export default Story;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
