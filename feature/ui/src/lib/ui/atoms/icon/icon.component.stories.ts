import { type Meta, type StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';


import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<IconComponent> = {
  component: IconComponent,
  title: 'Atoms/Primitives/Icon',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<IconComponent>;

export const Primary: Story = {
  args: {
    name: 'lucideMail',
    size: 'base',
  },
};

export const Heading: Story = {
  args: {
    name: 'lucideUser2',
    size: 'base',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/icon works!/gi)).toBeTruthy();
  },
}
