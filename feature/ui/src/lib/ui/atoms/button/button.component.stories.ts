import { type Meta, type StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

type StoryArgs = ButtonComponent & { label: string };

const meta: Meta<StoryArgs> = {
  component: ButtonComponent,
  title: 'Atoms/Primitives/Button',
  decorators: [
    componentWrapperDecorator(ButtonComponent, ({ args }) => args),
  ],
  render: (args: StoryArgs) => ({ props: args, template: `${args.label}` }),
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Button works!',
  }

};

export const Heading: Story = {
  args: {
    label: 'Heading works!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button works!/gi)).toBeTruthy();
  },
};
