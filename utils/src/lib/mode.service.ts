import { MediaMatcher } from '@angular/cdk/layout';
import { Injectable, Renderer2, RendererFactory2, inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export const MODE_KEY = 'mantis-mode';

export enum Mode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system'
}

@Injectable({ providedIn: 'root' })
export class ModeSwitchService implements OnDestroy {

  private _currentMode: Mode = Mode.SYSTEM;
  private mediaMatcher: MediaMatcher = inject(MediaMatcher);
  private renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);

  private _mode$ = new ReplaySubject<Mode>(1);
  private _destroyed$ = new Subject<void>();

  public mode$ = this._mode$.asObservable();
  public currentMode = this._currentMode;
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);



  constructor() {
    this.initMode();
    this.toggleClassOnThemeChange();
  }

  initMode() {
    this.getMode();
    this.updateMode(this._currentMode); // Apply initial mode
  }

  updateMode(mode: Mode) {
    this.setMode(mode);

    // Remove existing mode classes
    document.body.classList.remove(Mode.LIGHT, Mode.DARK);

    if (mode === Mode.SYSTEM) {
      // Apply system preference
      const prefersDark = this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').matches;
      this.renderer.addClass(document.body, prefersDark ? Mode.DARK : Mode.LIGHT);
    } else {
      // Apply selected mode
      this.renderer.addClass(document.body, mode);
    }
    if (this._currentMode !== mode) {
      this._currentMode = mode;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(MODE_KEY, mode);
      }
      this._mode$.next(mode);
    }
  }

  private setMode(mode: Mode) {
    this._currentMode = mode;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(MODE_KEY, mode);
    }
  }

  private getMode() {
    let storedMode = Mode.SYSTEM;
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(MODE_KEY);
      if (stored && Object.values(Mode).includes(stored as Mode)) {
        storedMode = stored as Mode;
      }
    }
    this._currentMode = storedMode;
    this._mode$.next(this._currentMode);
  }

  private toggleClassOnThemeChange() {
    this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const darkModeOn = e.matches;
      const mode = darkModeOn ? Mode.DARK : Mode.LIGHT;
      this.updateMode(mode);
      this._mode$.next(mode);
    });
    this.mode$.pipe(takeUntil(this._destroyed$)).subscribe(mode => {
      this.updateMode(mode);
    });
  }

  public toggleDarkMode() {
    const mode = this._currentMode === Mode.DARK ? Mode.LIGHT : Mode.DARK;
    this.updateMode(mode);
    this._mode$.next(mode);
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
