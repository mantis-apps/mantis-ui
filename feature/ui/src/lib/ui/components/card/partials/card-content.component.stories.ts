import { type Meta, type StoryObj, argsToTemplate } from '@storybook/angular';
import { CardContentComponent } from './card-content.component';
type StoryArgs = CardContentComponent & {contentContent: string};

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  component: CardContentComponent,
  title: 'Components/Card/Partials/CardContent',
  argTypes: {
    contentClass: { control: { type: 'text' }, name: 'Content Class', placeholder: 'add css classes' },
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
      <CardContent ${argsToTemplate(args)}>
        <p>
          Alice was beginning to get very tired of sitting by her sister on the
          bank, and of having nothing to do: once or twice she had peeped into the
          book her sister was reading, but it had no pictures or conversations in
          it, “and what is the use of a book, ” thought Alice, “without pictures or
          conversations?”
        </p>
      </CardContent>
    `
  }),
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    contentClass: ''
  }
};
