import { type Meta, type StoryObj, argsToTemplate } from '@storybook/angular';
import { CardComponent } from './card.component';
type StoryArgs = CardComponent & {titleContent: string};

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  component: CardComponent,
  title: 'Components/Card/Partials/Card',
  argTypes: {
    cardClass: { control: { type: 'text' }, name: ' Class' },
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
    cardClass: ''
  }
};
