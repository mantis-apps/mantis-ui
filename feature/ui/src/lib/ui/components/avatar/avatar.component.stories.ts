import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  title: 'Components/Avatar/Avatar',
};
export default meta;
type Story = StoryObj<AvatarComponent>;

export const Primary: Story = {
  args: {
    variant: 'small',
    imgSrc: '/avatar.png',
    imgAltText: 'avatar image description',
    fallbackText: 'MU',
    fallbackBgColor: '#FD005B',
  },
};

export const Heading: Story = {
  args: {
    variant: 'small',
    imgSrc: '/avatar.png',
    imgAltText: 'avatar image description',
    fallbackText: 'MU',
    fallbackBgColor: '#FD005B',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/avatar works!/gi)).toBeTruthy();
  },
};
