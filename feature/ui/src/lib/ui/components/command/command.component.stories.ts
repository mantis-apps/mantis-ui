import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, argsToTemplate } from '@storybook/angular';
import { CommandComponent, CommandData } from './command.component';
import { CommandListComponent } from './partials/command-list.component';
import { CommandListData } from './command.models';
import { provideIcons } from '@ng-icons/core';
import { lucideSearch, lucideCalendar, lucideSmile, lucidePlus, lucideUser, lucideWallet, lucideCog } from '@ng-icons/lucide';

const CommandDataMock: CommandListData = {
  commandInputPlaceholder: 'Type a command or search...',
  commandEmptyText: 'No results found.',
  commandGroups: [
    {
      commandGroupLabel: 'Suggestions',
      commandItems: [
        {
          commandItemLabel: 'Calendar',
          commandItemIcon: 'lucideCalendar',
        },
        {
          commandItemLabel: 'Search Emoji',
          commandItemIcon: 'lucideSmile',
        },
        {
          commandItemLabel: 'Calculator',
          commandItemIcon: 'lucidePlus',
        },
      ],
    },
    {
      commandGroupLabel: 'Settings',
      commandItems: [
        {
          commandItemLabel: 'Profile',
          commandItemIcon: 'lucideUser',
          commandItemShortcut: '⌘P',
        },
        {
          commandItemLabel: 'Billing',
          commandItemIcon: 'lucideWallet',
          commandItemShortcut: '⌘B',
        },
        {
          commandItemLabel: 'Settings',
          commandItemIcon: 'lucideCog',
          commandItemShortcut: '⌘S',
        },
      ],
    },
  ]
}

type StoryArgs =  CommandComponent;

const meta: Meta<CommandComponent> = {
  component: CommandComponent,
  title: 'Components/Command',
  decorators: [
    moduleMetadata({
      providers: [
        provideIcons({ lucideSearch, lucideCalendar, lucideSmile, lucidePlus, lucideUser, lucideWallet, lucideCog }),
      ],
      imports: [ CommandListComponent],
    }),
  ],
  render: (args: StoryArgs) => ({
    props: args,
    template: `
    <Command ${argsToTemplate(args)}>
        <CommandList [commandListData]="commandData"></CommandList>
    </Command>
    `
  }),

};
export default meta;
type Story = StoryObj<CommandComponent>;

export const Primary: Story = {
  args: {
    class: '',
    commandEmptyText: 'No results found',
    commandData: CommandDataMock
  },
};


