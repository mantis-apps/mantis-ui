import { type Meta, type StoryObj, componentWrapperDecorator, argsToTemplate } from '@storybook/angular';
import { CardHeaderComponent } from './card-header.component';

type StoryArgs = CardHeaderComponent;

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  component: CardHeaderComponent,
  title: 'Components/Card/Partials/CardHeader',
  argTypes: {
    headerClass: { control: { type: 'text' }, name: 'Header Class' },
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
      <CardHeader ${argsToTemplate(args)}>
        <!-- <CardTitle>Add title</CardTitle> -->
        <!-- <CardDescription>Add descriptio</CardDescription> -->
      </CardHeader>
    `
  }),
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    headerClass: 'border border-dotted border-gray-300',
  }
};
