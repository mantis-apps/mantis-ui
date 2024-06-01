import { WritableSignal, signal } from '@angular/core';
import { CardComponent } from './card.component';
import { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../../atoms/button/button.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { provideIcons, IconName } from '@ng-icons/core';
import { lucideUsers2 } from '@ng-icons/lucide';

type CardStory = CardComponent;

const meta: Meta<CardStory> = {
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, IconComponent],
      providers: [
        {
          provide: 'lucideIcons',
          useValue: {
            lucideUsers2,
          },
        },
        provideIcons({
          lucideUsers2,
        }),
      ],
    }),
  ],
  title: 'Molecules/Cards/Card with CTA',
  render: ({ ...args }) => ({
    props: args,
    template: `
      <mantis-card ${argsToTemplate(args)} [class]="'text-card-foreground shadow'">
        <ng-container CardBadge >
            <mantis-icon [name]="'lucideUsers2'" size="sm" class="text-muted"/>
        </ng-container>
        <ng-container CardTitle >Subscriptions</ng-container>
        <ng-container CardDescription>
          +2350
        </ng-container>
        <ng-container CardContent>
          +180.1% from last month
        </ng-container>
      </mantis-card>
    `,
  }),
};
export default meta;

type Story = StoryObj<CardStory>;



export const CardDefault: Story = {
  args: {
    containerClass: 'text-card-foreground shadow',
    headerClass: 'px-6 pt-6 pb-0',
    titleClass: 'text-xs font-medium',
    descriptionClass: 'text-4xl text-foreground font-bold p-0',
    contentClass: 'text-muted-foreground text-xs -mt-6',
    footerClass: 'h-0 p-0 m-0',
  },
};


