import type { Meta, StoryObj } from '@storybook/angular';
import { CollapsibleComponent } from './collapsible.component';

const meta: Meta<CollapsibleComponent> = {
  component: CollapsibleComponent,
  title: 'Components/Collapsible',
};
export default meta;
type Story = StoryObj<CollapsibleComponent>;

export const Primary: Story = {
  args: {
    class: '',
    collapsibleTitle: '@peduarte starred 3 repositories',
    collapsibleTriggerText: '@radix-ui/primitives',
    collapsibleContent: [
      { text: '@radix-ui/colors' },
      { text: '@stitches/react' }
    ],
  },
};
