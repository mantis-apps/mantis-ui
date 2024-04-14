import { type Meta, type StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

type StoryArgs = ButtonComponent & { label: string };

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  component: ButtonComponent,
  title: 'Atoms/Primitives/Button',
  decorators: [
    componentWrapperDecorator(ButtonComponent, ({ args }) => args),
  ],
  argTypes: {
    variant: { control: { type: 'select' }, name: 'Button Variant', options: ['secondary', 'destructive', 'outline', 'ghost', 'link', 'default'] },
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
  render: (args: StoryArgs) => ({ props: args, template: `${args.label}` }),
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    label: 'Button works!',
    variant: 'default',
  }
};

export const Secondary: Story = {
  args: {
    label: 'Heading works!',
    variant: 'secondary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button works!/gi)).toBeTruthy();
  },
};

export const Destructive: Story = {
  args: {
    label: 'Destructive works!',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline works!',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost works!',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    label: 'Link works!',
    variant: 'link',
  },
};
