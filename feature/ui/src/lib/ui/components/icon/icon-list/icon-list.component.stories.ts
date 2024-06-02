import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { IconListComponent } from './icon-list.component';
import { CommonModule } from '@angular/common';

type Story = StoryObj<IconListComponent>;

const meta: Meta<IconListComponent> = {
  title: 'Components/Icon/Icons List',
  tags: ['autodocs'],
  component: IconListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

export default meta;


export const Default: Story = {
  args: {
    icons: [
      'lucideMail',
      'lucideUser2',
      'lucideActivity',
      'lucideAccessibility',
      'lucideBackpack',
      'lucideApple',
      'lucideAlarmCheck',
      'lucideAlarmClock',
      'lucideTrain',
      'lucideTrash',
      'lucideTornado',
      'lucideTruck',
      'lucideTv',
      'lucideTrophy',
      'lucidePlane',
      'lucideShield',
      'lucideShip',
      'lucideShoppingCart',
      'lucideShoppingBag',
      'lucideSettings',
      'lucideSearch',
      'lucideScissors',
      'lucideBarChart',
      'lucideBattery',
      'lucideDatabase',
      'lucideCloud',
      'lucideCamera',
      'lucideCalendar',
      'lucideBook',
      'lucideBell',
      'lucideLasso',
      'lucideTicket',
      'lucideThumbsUp',
      'lucideTrees',
      'lucideWrench'
    ]
  },
};
