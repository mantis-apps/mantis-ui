import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import {
  HlmCarouselComponent,
  HlmCarouselContentComponent,
  HlmCarouselItemComponent,
  HlmCarouselNextComponent,
  HlmCarouselPreviousComponent
} from '@spartan-ng/ui-carousel-helm';
import { CardComponent } from '../card/partials/card.component';
import { CardContentComponent } from '../card/partials/card-content.component';

@Component({
  selector: 'Carousel',
  standalone: true,
  imports: [
    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
    CardComponent,
    CardContentComponent
  ],
  template: `
  <div class="flex items-center justify-center w-full p-4">
    <hlm-carousel [class]="'w-full ' + carouselMaxWidthClass" >
      <hlm-carousel-content>
      @for (item of items; track item) {
        <hlm-carousel-item>
          <div class="p-1">
            <Card>
              <CardContent [class]="carouselContentClass">
                <div [class]="carouselItemClass">{{ item }}</div>
              </CardContent>
            </Card>
          </div>
        </hlm-carousel-item>
      } @empty {
        <p>No carousel items</p>
      }
      </hlm-carousel-content>
      <button hlm-carousel-previous></button>
      <button hlm-carousel-next></button>
    </hlm-carousel>
  </div>
  `,
})
export class CarouselComponent {
  /**
   * Tailwind CSS class to apply to the carousel max width
   */
  @Input() carouselMaxWidthClass = 'max-w-xs';
  /**
   * Array of items to display in the carousel
   */
  @Input() items: Array<unknown> = Array.from({ length: 5}, (_, i) => i + 1);
  /**
   * Tailwind CSS class to override the default carousel content class
   */
  @Input() carouselContentClass = 'flex items-center justify-center p-6 aspect-square';
  /**
   * Tailwind CSS class to override the default carousel item class
   */
  @Input() carouselItemClass = 'text-4xl font-semibold';
}
