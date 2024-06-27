import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { HoverCardComponent } from './hover-card.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { lucideCalendar } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';

const meta: Meta<HoverCardComponent> = {
  component: HoverCardComponent,
  title: 'Components/HoverCard',
  decorators: [
    moduleMetadata({
      imports: [AvatarComponent, ButtonComponent, IconComponent],
      providers: [provideIcons({ lucideCalendar })]
    })
  ],
  render: (args: HoverCardComponent) => ({
    props: args,
    template: `
    <h4 class="text-xl font-semibold mb-2">HoverCard with simple content</h4>
    <HoverCard ${argsToTemplate(args)} class="w-full flex">
      <Button hoverTrigger variant="link" class="px-2 ml-0">mantistech.io</Button>
      <div hoverContent class="flex justify-between space-x-4">
        <p>Zero to Angular full-stack and multi platform deployment</p>
      </div>
    </HoverCard>
    <br />
    <hr class="my-4">
    <br />
    <h4 class="text-xl font-semibold mb-2">HoverCard with extensive content</h4>
    <HoverCard ${argsToTemplate(args)} class="w-full flex">
    <p hoverTrigger>best meta framework:<Button variant="outline" class="px-2 ml-0">&#64;analogjs</Button></p>
    <div hoverContent class="flex justify-between space-x-4">
      <Avatar variant="small" id="avatar-small"
        imgSrc="https://analogjs.org/img/logos/analog-logo.svg"
        imgAltText="AnalogLogo"
        fallbackText="AN"
        fallbackBgColor="bg-red-600"
      />
      <div class="space-y-1">
        <h4 class="text-sm font-semibold">&#64;analogjs</h4>
        <p class="text-sm">The Angular meta-framework – build Angular applications faster.</p>
        <div class="flex items-center pt-2">
          <Icon name="lucideCalendar" class="w-4 h-4 mr-2 opacity-70" />
          <span class="text-xs text-muted-foreground">Joined December 2021</span>
        </div>
      </div>
    </div>
  </HoverCard>
    `
  }),
};
export default meta;
type Story = StoryObj<HoverCardComponent>;

export const Primary: Story = {
};
