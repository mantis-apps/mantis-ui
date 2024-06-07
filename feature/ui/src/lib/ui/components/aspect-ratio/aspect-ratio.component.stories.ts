import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { AspectRatioComponent } from './aspect-ratio.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AspectRatioComponent> = {
  component: AspectRatioComponent,
  title: 'Components/AspectRatio/AspectRatio',
  parameters: {
    docs: {
      source: {
        transform: (src: string) => {
          const wrapperStriped = src.replace(/<div[^>]*>\s*([\s\S]*?)\s*<\/div>/gi, '$1');
          return wrapperStriped;
        },
      },
    },
  },
  render: (args: AspectRatioComponent) => ({
    props: args,
    template: `
      <AspectRatio ${argsToTemplate(args)}>
      <img src="./src/assets/1.jpg" />
      </AspectRatio>
    `
  })
};
export default meta;
type Story = StoryObj<AspectRatioComponent>;

export const Square: Story = {
  args: {
    ratio: '1 / 1',
  },
};

export const Landscape: Story = {
  args: {
    ratio: '16 / 9',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/aspect-ratio works!/gi)).toBeTruthy();
  },
};
