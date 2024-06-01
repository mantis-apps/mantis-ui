import { type Meta, type StoryObj, argsToTemplate } from '@storybook/angular';
import { CardDescriptionComponent } from './card-description.component';
type StoryArgs = CardDescriptionComponent & {descriptionContent: string};

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  component: CardDescriptionComponent,
  title: 'Components/Card/Partials/CardDescription',
  argTypes: {
    descriptionClass: { control: { type: 'text' }, name: 'Description Class', placeholder: 'add css classes' },
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
      <CardDescription ${argsToTemplate(args)}>
      Alice in Wonderland
      <small>— Lewis Carroll</small>
      </CardDescription>
    `
  }),
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    descriptionClass: ''
  }
};
