
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { IconName } from '@ng-icons/core';
import { HlmCheckboxComponent } from '@mantistech/spartanui-pack/ui-checkbox-helm';
import { HlmLabelDirective } from '@mantistech/spartanui-pack/ui-label-helm';
@Component({
	selector: 'Checkbox',
	standalone: true,
	imports: [HlmLabelDirective, HlmCheckboxComponent, NgIf ],
	template: `
		<label class="flex items-center" hlmLabel>
      @if( iconName ){
			  <hlm-checkbox class="mr-2" [checkIconName]="iconName" />
      } @else {
        <hlm-checkbox class="mr-2" />
      }
			{{ checkboxLabel }}
		</label>
	`,
})
export class CheckboxComponent {
  @Input({ required: true }) checkboxLabel!: string;
  @Input() iconName!: IconName;
}
