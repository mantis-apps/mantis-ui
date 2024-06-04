import { type Meta, type StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { AlertComponent } from './alert.component';
import { IconComponent } from '../icon/icon.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

type StoryArgs = AlertComponent;

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  component: AlertComponent,
  title: 'Components/Alert/Alert',

  argTypes: {
    variant: { control: { type: 'select' }, name: 'Alert Variant', options: ['default', 'destructive'] },
    alertTitle: { control: { type: 'text' }, name: 'Alert Title', placeholder: 'add alert title' },
  },

  parameters: {
    docs: {
      source: {
        transform: (src: string) => {
          const wrapperStriped = src.replace(/<div[^>]*>\s*([\s\S]*?)\s*<\/div>/gi, '$1');
          return wrapperStriped
        }
      }
    }
  },
  render: (args: StoryArgs) => ({
    props: args,
    template: `
    <Alert ${argsToTemplate(args)}>
        <p>You can now add nice and sleek components to your UI in a cinch</p>
    </Alert>
    `
  }),
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    alertTitle: 'Alert works!',
    variant: 'default',
  }
};


export const Destructive: Story = {
  args: {
    alertTitle: 'Destructive works!',
    variant: 'destructive'
  },
};



