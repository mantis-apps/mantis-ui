import { NgModule } from '@angular/core';

export * from './lib/ui/components/button/button.component';
export * from './lib/ui/components/icon/icon.component';
export * from './lib/ui/components/icon/icon-list/icon-list.component';

// Card Component
import { CardComponent } from './lib/ui/components/card/partials/card.component';
import { CardHeaderComponent } from './lib/ui/components/card/partials/card-header.component';
import { CardTitleComponent } from './lib/ui/components/card/partials/card-title.component';
import { CardDescriptionComponent } from './lib/ui/components/card/partials/card-description.component';
import { CardContentComponent } from './lib/ui/components/card/partials/card-content.component';
import { CardFooterComponent } from './lib/ui/components/card/partials/card-footer.component';

export * from './lib/ui/components/card/partials/card.component';
export * from './lib/ui/components/card/partials/card-header.component';
export * from './lib/ui/components/card/partials/card-title.component';
export * from './lib/ui/components/card/partials/card-description.component';
export * from './lib/ui/components/card/partials/card-content.component';
export * from './lib/ui/components/card/partials/card-footer.component';

export const CardComponentImports = [
  CardComponent,
  CardHeaderComponent,
  CardTitleComponent,
  CardDescriptionComponent,
  CardContentComponent,
  CardFooterComponent,
] as const;

@NgModule({
  imports: [...CardComponentImports],
  exports: [...CardComponentImports],
})
export class CardModule {}

export * from './lib/ui/components/accordion/partials/accordion.component';

export * from './lib/ui/components/accordion/partials/accordion-item.component';

export * from './lib/ui/components/accordion/partials/accordion-content.component';

export * from './lib/ui/components/accordion/partials/accordion-trigger.component';
