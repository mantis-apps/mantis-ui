
import { Component, Input } from '@angular/core';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from '@spartan-ng/ui-alert-helm';
import { IconComponent } from "../icon/icon.component";
import { IconName, provideIcons } from '@ng-icons/core';
import { lucideAlertTriangle } from '@ng-icons/lucide';


@Component({
  selector: 'Alert',
  standalone: true,
  imports: [
    HlmAlertDirective,
    HlmAlertDescriptionDirective,
    HlmAlertIconDirective,
    HlmAlertTitleDirective,
    IconComponent
  ],
  providers: [provideIcons({ lucideAlertTriangle })],
  styles: [`
    :host {
      display: contents;
    }
  `],
  template: `
    <div hlmAlert [variant]="variant" [class]="'p-4 flex ' + class" >
      <Icon [name]="alertIconName" size="sm" />
      <div class="px-4">
        <h4 hlmAlertTitle>{{alertTitle}}</h4>
        <div hlmAlertDescription>
          <ng-content />
        </div>
      </div>
    </div>
  `,
})
export class AlertComponent {
  @Input() class = '';
  @Input() variant: 'default' | 'destructive' = 'default';
  @Input({required: true}) alertTitle!: string;
  @Input() alertIconName: IconName = 'lucideAlertTriangle';
}
