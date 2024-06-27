
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  BrnAlertDialogContentDirective,
  BrnAlertDialogTriggerDirective,
} from '@spartan-ng/ui-alertdialog-brain';
import {
  HlmAlertDialogActionButtonDirective,
  HlmAlertDialogCancelButtonDirective,
  HlmAlertDialogComponent,
  HlmAlertDialogContentComponent,
  HlmAlertDialogDescriptionDirective,
  HlmAlertDialogFooterComponent,
  HlmAlertDialogHeaderComponent,
  HlmAlertDialogOverlayDirective,
  HlmAlertDialogTitleDirective,
} from '@spartan-ng/ui-alertdialog-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'AlertDialog',
  standalone: true,
  imports: [
    BrnAlertDialogTriggerDirective,
    BrnAlertDialogContentDirective,

    HlmAlertDialogComponent,
    HlmAlertDialogOverlayDirective,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogTitleDirective,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogActionButtonDirective,
    HlmAlertDialogContentComponent,

    HlmButtonDirective,
  ],
  template: `
    <hlm-alert-dialog [class]="class">
      <button id="edit-profile" variant="outline" brnAlertDialogTrigger hlmBtn>Delete Account</button>
      <hlm-alert-dialog-content *brnAlertDialogContent="let ctx">
        <hlm-alert-dialog-header>
          <h3 hlmAlertDialogTitle>{{title}}</h3>
          <p hlmAlertDialogDescription>
            <ng-content />
          </p>
        </hlm-alert-dialog-header>
        <hlm-alert-dialog-footer>
          <button class="mr-2" hlmAlertDialogCancel (click)="emitEvent(ctx, 'cancel') ">{{cancelLabel}}</button>
          <button hlmAlertDialogAction (click)="emitEvent(ctx, 'confirm') ">{{confirmLabel}}</button>
        </hlm-alert-dialog-footer>
      </hlm-alert-dialog-content>
    </hlm-alert-dialog>
  `,
  styles: `
    :host {
      display: contents;
    }

  `,
})
export class AlertDialogComponent {
  @Input() class = '';
  @Input({ required: true}) title = 'Are you absolutely sure?';
  @Input({ required: true}) cancelLabel = 'Cancel';
  @Input({ required: true}) confirmLabel = 'Delete Account';
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();

  emitEvent(ctx: { close: () => void; }, event: 'confirm' | 'cancel') {
    const eventString = (event as 'confirm' | 'cancel').toUpperCase();
    this[event].emit({value: `ALERTDIALOG-${eventString}-CLICKED`});
    ctx.close();
  }
}
