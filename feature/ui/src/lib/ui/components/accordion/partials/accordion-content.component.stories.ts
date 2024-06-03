import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { AccordionContentComponent } from './accordion-content.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

type StoryArgs = AccordionContentComponent;

const meta: Meta<AccordionContentComponent> = {
  component: AccordionContentComponent,
  title: 'Components/Accordion/Partials/AccordionContent',
  render: (args: StoryArgs) => ({
    props: args,
    template: `
      <AccordionContent ${argsToTemplate(args)} >
        AccordionContent works!
      </AccordionContent>
    `,
  }),
};
export default meta;
type Story = StoryObj<AccordionContentComponent>;

export const Primary: Story = {
  args: {
    class: '',
    headerLabel: 'Accordion Item Primary Header',
  },
};

export const Heading: Story = {
  args: {
    class: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/accordion-content works!/gi)).toBeTruthy();
  },
};
