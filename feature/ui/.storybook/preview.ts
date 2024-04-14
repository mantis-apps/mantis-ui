import type { ThemeConfig } from 'storybook-addon-data-theme-switcher';

import { Preview, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { withThemeByClassName, withThemeByDataAttribute } from '@storybook/addon-themes'

//initialize();

const preview: Preview = {

  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
    componentWrapperDecorator((story) => {
      return `<div class="bg-background m-4 p-8" style="margin: 0; padding: 2rem;">${story}</div>`
    })
  ],
  parameters: {
    options: {
      storySort: {
        order: ['Atoms', ['Primitives', '*'], 'Molecules', 'Organisms', 'Pages', 'Others', '*'],
      },
    },
    layout: 'fullscreen',
  },
};

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: "Zinc", dataTheme: "theme-default", color: "#212121" },
        { name: "Red", dataTheme: "theme-red", color: "#ff1744" },
        { name: "Green", dataTheme: "theme-green", color: "#32CD32" },
        { name: "Orange", dataTheme: "theme-orange", color: "#ef6c00" },
        { name: "Blue", dataTheme: "theme-blue", color: "#6A5ACD" },
      ],
      dataAttribute: "data-theme",            // optional (default: "data-theme")
      clearable: true,                        // optional (default: true)
      toolbar: {
        title: "Change data-theme attribute", // optional
        icon: "paintbrush",                   // optional
      },
    } satisfies ThemeConfig,
  },
};

export default preview;
