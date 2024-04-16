import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
  HlmCardDescriptionDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { ClassValue } from 'clsx';

@Component({
  selector: 'mantis-info-card',
  standalone: true,
  imports: [
    NgIf,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmBadgeDirective,
    HlmButtonDirective,
  ],
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ],
  template: `
    <!-- <section hlmCard class="p-4">
      <div hlmCardHeader class="pb-2">
        <h3 hlmCardTitle>{{ title }}</h3>
        <p *ngIf="description" hlmCardDescription>{{ description }}</p>
      </div>
      <p hlmCardContent>
        {{ value }}
        <span *ngIf="badgeText" hlmBadge [variant]="badgeVariant">{{ badgeText }}</span>
      </p>
    </section> -->
    <section hlmCard [class]="this.class">
      <div hlmCardHeader [class]="this.headerClass" >
        <h3 hlmCardTitle [class]="this.titleClass" >{{title}}</h3>
        <p hlmCardDescription [class]="this.descriptionClass">
          {{description}}
        </p>
      </div>
      <!-- <div hlmCardContent class="px-6 flex">
        <h2 hlmCardTitle class="text-4xl mr-2">{{ value }}</h2>
        <span *ngIf="badgeText" hlmBadge [variant]="badgeVariant">{{ badgeText }}</span>
      </div> -->
      <div hlmCardFooter>
        <ng-content></ng-content>
      </div>
    </section>
  `,
})
export class InfoCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  /**
   * Use Tailwind classes to specify your own rules for the card container.
   * e.g. `sm:col-span-2` will span the card across 2 columns on small screens.
   */
  @Input() class = '';
  @Input() headerClass = '';
  @Input() titleClass = '';
  @Input() descriptionClass = '';
  @Input() footerClass = '';
}
