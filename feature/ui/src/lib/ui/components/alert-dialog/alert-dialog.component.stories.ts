import { type Meta, type StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { AlertDialogComponent } from './alert-dialog.component';

const meta: Meta<AlertDialogComponent> = {
  tags: ['autodocs'],
  component: AlertDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  title: 'Components/Alert Dialog',
  argTypes: {
    title: { control: { type: 'text' }, name: 'Title', placeholder: 'Title' },
    cancelLabel: { control: { type: 'text' }, name: 'Cancel Label', placeholder: 'Cancel' },
    confirmLabel: { control: { type: 'text' }, name: 'Confirm Label', placeholder: 'add css classes' },
  },
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
  render: (args: AlertDialogComponent) => ({
    props: args,
    template: `
      <AlertDialog ${argsToTemplate(args)} (ALERTDIALOG-CONFIRM-CLICKED)="alert('alert button clicked')">
      This action cannot be undone. This will permanently delete your account and remove your data from our
      servers.
      </AlertDialog>
    `,
  }),
};

export default meta;

type Story = StoryObj<AlertDialogComponent>;

export const Default: Story = {
  args: {
    title: 'Alert Dialog',
    cancelLabel: 'Cancel',
    confirmLabel: 'Close Account',
  },
};

