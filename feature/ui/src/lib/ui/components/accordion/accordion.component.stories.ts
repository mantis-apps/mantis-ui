import type { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AccordionComponent> = {
  component: AccordionComponent,
  title: 'Components/Accordion/Accordion',
};
export default meta;
type Story = StoryObj<AccordionComponent>;

export const Primary: Story = {
  args: {
    class: '',
    items: [
      {
        triggerText: 'Is it accessible?',
        content: `Yes. It adheres to the WAI-ARIA design pattern.`,
      },
      {
        triggerText: 'Is it styled?',
        content: `Yes. It comes with default styles that match the other components' aesthetics.`,
      },
      {
        triggerText: 'Is it animated?',
        content: `Yes. It's animated by default, but you can disable it if you prefer.`,
      },
    ],
  },
};

