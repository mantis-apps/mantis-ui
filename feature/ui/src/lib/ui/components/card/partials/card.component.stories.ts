/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Meta, type StoryObj, argsToTemplate } from '@storybook/angular';
import { CardComponent } from './card.component';
type StoryArgs = CardComponent & {titleContent: string};

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  component: CardComponent,
  title: 'Components/Card/Partials/Card',
  argTypes: {
    class: { control: { type: 'text' }, name: 'Card Class' },
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
      <Card ${argsToTemplate(args)}>
        <!--
        // add CardHeader, CardDescription, etc. here
        -->
      </Card>
    `
  }),
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    class: 'w-[500px]'
  }
};
