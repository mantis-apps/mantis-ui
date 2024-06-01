import { type Meta, type StoryObj, argsToTemplate } from '@storybook/angular';
import { CardTitleComponent } from './card-title.component';
type StoryArgs = CardTitleComponent & {titleContent: string};

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  component: CardTitleComponent,
  title: 'Components/Card/Partials/CardTitle',
  argTypes: {
    titleClass: { control: { type: 'text' }, name: 'Title Class' },
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
      <CardTitle ${argsToTemplate(args)}>
        Down the Rabbit Hole
      </CardTitle>
    `
  }),
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    titleClass: ''
  }
};
