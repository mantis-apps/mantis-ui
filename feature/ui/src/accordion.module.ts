import { NgModule } from '@angular/core';

import { AccordionComponent } from './lib/ui/components/accordion/accordion.component';
import { AccordionItemComponent } from './lib/ui/components/accordion/partials/accordion-item.component';
import { AccordionContentComponent } from './lib/ui/components/accordion/partials/accordion-content.component';

export * from './lib/ui/components/accordion/accordion.component';
export * from './lib/ui/components/accordion/partials/accordion-item.component';
export * from './lib/ui/components/accordion/partials/accordion-content.component';

export const AccordionComponentImports = [
  AccordionComponent,
  AccordionItemComponent,
  AccordionContentComponent,
] as const;

@NgModule({
  imports: [...AccordionComponentImports],
  exports: [...AccordionComponentImports],
})
export class AccordionModule {}
