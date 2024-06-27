import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommandComponent } from './command.component';
import { CommandData } from './command.models'
import { provideIcons } from '@ng-icons/core';
import { lucideSearch, lucideCalendar, lucideSmile, lucidePlus, lucideUser, lucideWallet, lucideCog } from '@ng-icons/lucide';

const CommandDataMock: CommandData = {
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

const meta: Meta<CommandComponent> = {
  component: CommandComponent,
  title: 'Components/Command',
  decorators: [
    moduleMetadata({
      providers: [
        provideIcons({ lucideSearch, lucideCalendar, lucideSmile, lucidePlus, lucideUser, lucideWallet, lucideCog }),
      ],
    }),
  ],
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


