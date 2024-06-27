import { IconName } from '@ng-icons/core'

export interface CommandItem {
  commandItemLabel: string;
  commandItemSlug?: string;
  commandItemIcon: IconName;
  commandItemShortcut?: string;
}

export interface CommandGroup {
  commandGroupLabel: string;
  commandItems: CommandItem[];
}

export interface CommandData {
  commandInputPlaceholder: string;
  commandEmptyText: string;
  commandGroups?: CommandGroup[];
  commandItems?: CommandItem[];
}
