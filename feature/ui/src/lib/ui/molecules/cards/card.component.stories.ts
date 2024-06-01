import { CardComponent } from './card.component';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type CardStory = CardComponent;

const meta: Meta<CardStory> = {
  component: CardComponent,
  tags: ['autodocs'],
  title: 'Molecules/Cards/Card Default',
  render: ({ ...args }) => ({
    props: args,
    template: `
      <mantis-card ${argsToTemplate(args)}>
        <ng-container CardBadge >100+</ng-container>
        <ng-container CardTitle >Down the Rabbit Hole</ng-container>
        <ng-container CardDescription>
          Alice in Wonderland <small>— Lewis Carroll</small>
        </ng-container>
        <ng-container CardContent>
          Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice
          she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,
          ” thought Alice, “without pictures or conversations?”
        </ng-container>
      </mantis-card>
    `,
  }),
};
export default meta;

type Story = StoryObj<CardStory>;

export const CardDefault: Story = {
  args: {
    titleClass: 'text-4xl',
  },
};


