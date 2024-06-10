import type { Meta, StoryObj } from '@storybook/angular';
import { CarouselComponent } from './carousel.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CarouselComponent> = {
  component: CarouselComponent,
  title: 'Components/Carousel',
};
export default meta;
type Story = StoryObj<CarouselComponent>;

export const Primary: Story = {
  args: {
    carouselMaxWidthClass: 'max-w-xs',
    items: Array.from({ length: 5 }, (_, i) => i + 1),
    carouselContentClass: 'flex items-center justify-center p-6 aspect-square',
    carouselItemClass: 'text-4xl font-semibold',
  },
};

export const Heading: Story = {
  args: {
    carouselMaxWidthClass: 'max-w-xs',
    items: Array.from({ length: 5 }, (_, i) => i + 1),
    carouselContentClass: 'flex items-center justify-center p-6 aspect-square',
    carouselItemClass: 'text-4xl font-semibold',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/carousel works!/gi)).toBeTruthy();
  },
};
