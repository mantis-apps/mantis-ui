import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

export const THEME_KEY = 'mantis-theme';

export enum Theme {
  DEFAULT = 'theme-zinc',
  GRAY = 'theme-gray',
  RED = 'theme-red',
  GREEN = 'theme-green',
  BLUE = 'theme-blue',
  ORANGE = 'theme-orange',
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme!: Theme;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    const initialTheme = this.getColorTheme();
    this.colorTheme = initialTheme;
    this.renderer.addClass(document.documentElement, initialTheme);
  }

  update(theme: Theme) {
    const previousColorThemeClass = this.colorTheme;
    this.setColorTheme(theme);
    this.renderer.removeClass(document.documentElement, previousColorThemeClass);
    this.renderer.addClass(document.documentElement, this.colorTheme);
  }

  private setColorTheme(theme: Theme) {
    this.colorTheme = theme as Theme;
    localStorage.setItem(THEME_KEY, theme);
  }

  private getColorTheme(): Theme {
    const storedTheme = localStorage.getItem(THEME_KEY);
    const themeValues = Object.values(Theme).filter(value => isNaN(Number(value)));
    if (storedTheme && themeValues.includes(storedTheme as Theme)) {
      return storedTheme as Theme;
    } else {
      return Theme.DEFAULT;
    }
  }
}
