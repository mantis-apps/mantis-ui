import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { moduleMetadata } from '@storybook/angular';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideIcons } from '@ng-icons/core';
import { lucideMoon } from '@ng-icons/lucide';

const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'Components/Checkbox',
  decorators: [
    moduleMetadata({
      providers: [
        provideIcons({
          lucideMoon,
        }),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Primary: Story = {
  args: {
    checkboxLabel: 'Accept terms and conditions',
  },
};

export const CustomIcon: Story = {
  args: {
    checkboxLabel: 'Accept terms and conditions',
    iconName: 'lucideMoon',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/checkbox works!/gi)).toBeTruthy();
  },
};
