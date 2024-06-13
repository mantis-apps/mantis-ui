import type { Meta, StoryObj } from '@storybook/angular';
import { ComboboxComponent } from './combobox.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ComboboxComponent> = {
  component: ComboboxComponent,
  title: 'ComboboxComponent',
};
export default meta;
type Story = StoryObj<ComboboxComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/combobox works!/gi)).toBeTruthy();
  },
};
