import type { Meta, StoryObj } from '@storybook/angular';
import { CommandComponent, CommandData } from './command.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
};
export default meta;
type Story = StoryObj<CommandComponent>;

export const Primary: Story = {
  args: {
    class: '',
    commandEmptyText: 'No results found',
    commandData: CommandDataMock,
  },
};


