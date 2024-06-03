import type { Meta, StoryObj } from '@storybook/angular';
import { AccordionItemComponent } from './accordion-item.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AccordionItemComponent> = {
  component: AccordionItemComponent,
  title: 'Components/Accordion/Partials/AccordionItem',
};
export default meta;
type Story = StoryObj<AccordionItemComponent>;

export const Primary: Story = {
  args: {
    class: '',
  },
};

export const Heading: Story = {
  args: {
    class: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/accordion-item works!/gi)).toBeTruthy();
  },
};
