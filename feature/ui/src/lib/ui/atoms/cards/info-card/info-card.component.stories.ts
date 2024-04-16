
import { InfoCardComponent } from './info-card.component';
import { Meta, StoryObj } from '@storybook/angular';

export default {
  title: 'Molecules/Cards/InfoCard',
  component: InfoCardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' }, name: 'Card Title' },
    description: { control: { type: 'text' }, name: 'Card Description' },
  },
} as Meta;

type Story = StoryObj<InfoCardComponent>;

export const Primary: Story = {
  args: {
    title: 'Total Revenue',
    description: `Introducing Our Dynamic Orders Dashboard for Seamless Management
    and Insightful Analysis.`
  },
};

export const Secondary: Story = {
  args: {
    title: 'Subscriptions',
    description: 'This month'
  },
};

// Add more stories for different variations as needed
