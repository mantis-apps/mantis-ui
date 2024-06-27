import { Component, Input } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'Badge',
  standalone: true,
  imports: [HlmBadgeDirective, NgIf, RouterLink],
  template: `
    <div hlmBadge [variant]="badgeVariant" [size]="badgeSize">
      @if( badgeRouterLinkUrl && !badgeLinkUrl) {
        <a routerLink="{{badgeRouterLinkUrl}}">{{badgeText}}</a>
      }
      @if( badgeLinkUrl && !badgeRouterLinkUrl) {
        <a href="{{badgeLinkUrl}}" target="{{badgeLinkTarget}}">{{badgeText}}</a>
      }
      @if( !badgeLinkUrl && !badgeRouterLinkUrl) {
        <span>{{badgeText}}</span>
      }
    </div>
  `,
})
export class BadgeComponent {
  /**
   * text to be displayed in the badge
   */
  @Input({required: true}) badgeText! : string;
  /**
   * variant of the badge
   */
  @Input() badgeVariant: 'default' | 'secondary' | 'outline' | 'destructive' = 'default';
  /**
   * size for the badge
   */
  @Input() badgeSize: 'default' | 'lg' = 'default';
  /**
   * html link to navigate to - great for external links
   */
  @Input() badgeLinkUrl! : string;
  /**
   * link if wanting to use angular router
   */
  @Input() badgeRouterLinkUrl! : string;
  /**
   * target attribute value for the badgeLinkUrl
   */
  @Input() badgeLinkTarget : '_blank' | '_self' | '_parent' | '_top' = '_blank';
}
