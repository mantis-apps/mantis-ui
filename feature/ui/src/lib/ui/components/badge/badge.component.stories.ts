import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import { moduleMetadata } from '@storybook/angular';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ActivatedRoute } from '@angular/router';

const meta: Meta<BadgeComponent> = {
  component: BadgeComponent,
  title: 'Components/Badge',
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        }
      ]
    }),
  ],
};
export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    badgeText: 'This is coolness. This is MANTIS  ',
    badgeVariant: 'default',
    badgeSize: 'default',
    badgeLinkUrl: '',
    badgeRouterLinkUrl: '',
    badgeLinkTarget: '_blank',
  },
};

export const Link: Story = {
  args: {
    badgeText: 'Time to build full stack Angular apps!',
    badgeVariant: 'outline',
    badgeLinkUrl: 'https://mantistech.io/',
  }
};

export const RouterLink: Story = {
  args: {
    badgeText: 'Navigate to Home',
    badgeVariant: 'default',
    badgeRouterLinkUrl: '/home',
  }
};
