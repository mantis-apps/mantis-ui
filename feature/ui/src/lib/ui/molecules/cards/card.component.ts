import { Component, Input, WritableSignal, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
  HlmCardDescriptionDirective,
  HlmCardContentDirective,
  HlmCardFooterDirective,
} from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'mantis-card',
  standalone: true,
  imports: [
    CommonModule,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective,
    HlmCardFooterDirective,
  ],
  template: `
    <section hlmCard [class]="this._containerClass() + ' relative '">
      <div class="absolute top-6 right-12 text-sm">
        <ng-content select="[CardBadge]"></ng-content>
      </div>
      <div hlmCardHeader [class]="headerClass">
        <h3 hlmCardTitle [class]="titleClass">
          <ng-content select="[CardTitle]"></ng-content>
        </h3>
        <p hlmCardDescription [class]="descriptionClass">
          <ng-content select="[CardDescription]"></ng-content>
        </p>
      </div>
      <div hlmCardContent [class]="contentClass" >
        <ng-content select="[CardContent]"></ng-content>
      </div>
      <div hlmCardFooter [class]="footerClass">
        <ng-content select="[CardFooter]"></ng-content>
      </div>
    </section>
  `,
  styles: ``,
})
export class CardComponent {
  protected _containerClass: WritableSignal<string> = signal<string>('');

  @Input()
  set containerClass(value: string) {
    this._containerClass = signal(value);
  }
  @Input() headerClass = '';
  @Input() titleClass = '';
  @Input() descriptionClass = '';
  @Input() contentClass = '';
  @Input() footerClass = '';
}
