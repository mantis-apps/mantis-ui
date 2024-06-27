import { type Meta, type StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { CardFooterComponent } from './card-footer.component';
import { ButtonComponent } from '../../button/button.component';
type StoryArgs = CardFooterComponent & {footerFooter: string};

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  component: CardFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent]
    })
  ],
  title: 'Components/Card/Partials/CardFooter',
  argTypes: {
    footerClass: { control: { type: 'text' }, name: 'Footer Class', placeholder: 'add css classes' },
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
      <CardFooter ${argsToTemplate(args)}>
        <Button size="lg">Add to bookmarks</Button>
      </CardFooter>
    `
  }),
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    footerClass: ''
  }
};
