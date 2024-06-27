/* eslint-disable @angular-eslint/component-selector */
import { Component, inject, OnInit, signal, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  lucidePanelLeft,
  lucideSearch,
  lucideImage,
  lucideMoreVertical,
  lucideMenu,
  lucideUser,
  lucideMoon,
  lucideSun,
  lucidePalette
} from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import {
  HlmSheetComponent,
  HlmSheetContentComponent
} from '@spartan-ng/ui-sheet-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/ui-sheet-brain';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemDirective,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
} from '@spartan-ng/ui-menu-helm';

import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';

import { AvatarComponent } from '@mantistech/ui';

import { ThemeService, Theme, ModeSwitchService, Mode } from '@mantis-ui/utils'

@Component({
  selector: 'AppHeader',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HlmButtonDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmIconComponent,
    HlmInputDirective,
    HlmMenuComponent, // Corrected component
    HlmMenuGroupComponent,
    HlmMenuItemDirective,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    BrnMenuTriggerDirective,
    AvatarComponent
  ],
  providers: [
    provideIcons({
      lucidePanelLeft,
      lucideSearch,
      lucideImage,
      lucideMoreVertical,
      lucideMenu,
      lucideUser,
      lucideMoon,
      lucideSun,
      lucidePalette
    })
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private themeService: ThemeService = inject(ThemeService);
  private modeSwitchService: ModeSwitchService = inject(ModeSwitchService);
  mode = toSignal(this.modeSwitchService.mode$, { initialValue: this.modeSwitchService.currentMode });
  darkMode = input<boolean>(false);
  renderer: any;

  ngOnInit(): void {
    this.themeService.initTheme();
    this.modeSwitchService.initMode();
  }

  setTheme(theme: string) {
    this.themeService.update(theme as Theme);
  }

  // toggleTheme() {
  //   const theme = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
  //   this.setTheme(theme);
  // }

  setMode(mode: string) {
    this.modeSwitchService.updateMode(mode as Mode);
  }


}
