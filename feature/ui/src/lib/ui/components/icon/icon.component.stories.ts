import { type Meta, type StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { IconComponent } from './icon.component';
import { lucideMail, lucideUser2, lucideUsers2, lucideActivity, lucideTruck, lucideTrain } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';


import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<IconComponent> = {
  component: IconComponent,
  decorators: [
    moduleMetadata({
      providers: [
        provideIcons({
          lucideMail,
          lucideUser2,
          lucideUsers2,
          lucideActivity,
          lucideTruck,
          lucideTrain,
        }),
      ],
    }),
  ],
  title: 'Components/Icon',
  tags: ['autodocs'],
  argTypes: {
    name: { control: { type: 'select' }, name: 'Icon Name', options: ['lucideMail', 'lucideUser2', 'lucideUsers2', 'lucideActivity', 'lucideTruck', 'lucideTrain', 'lucideShieldQuestion' ] },
    size: { control: { type: 'select' }, name: 'Icon Size', options: ['sm', 'base', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Primary: Story = {
  args: {
    size: 'base',
  },
};

// export const Heading: Story = {
//   args: {
//     name: 'lucideUser2',
//     size: 'base',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/icon works!/gi)).toBeTruthy();
//   },
// }
