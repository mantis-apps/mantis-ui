import type { Meta, StoryObj } from '@storybook/angular';
import { CommandDialogComponent } from './command-dialog.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CommandDialogComponent> = {
  component: CommandDialogComponent,
  title: 'CommandDialogComponent',
};
export default meta;
type Story = StoryObj<CommandDialogComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/command-dialog works!/gi)).toBeTruthy();
  },
};
