import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import type { Meta, StoryObj } from '@storybook/angular';
import { signal, InputSignal, importProvidersFrom} from '@angular/core';
import { moduleMetadata, argsToTemplate, applicationConfig } from '@storybook/angular';
import { VerticalBarChartGroupedComponent } from './vertical-bar-chart-2d.component';
import { NgxChartsModule, } from "@swimlane/ngx-charts";
import { Multi } from "./models";
import {CardComponent, CardContentComponent, CardTitleComponent, CardDescriptionComponent, CardFooterComponent, CardHeaderComponent } from '../card'
//import { CardComponent } from '@swimlane/ngx-charts';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<VerticalBarChartGroupedComponent> = {
  component: VerticalBarChartGroupedComponent,
  title: 'Components/ Charts /Grouped Vertical Bar Chart ',
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom([BrowserAnimationsModule]),
    ]}),
    moduleMetadata({
      imports: [
        NgxChartsModule,
        CardComponent,
        CardContentComponent,
        CardTitleComponent,
        CardDescriptionComponent,
        CardHeaderComponent,
        CardFooterComponent,
      ],
    }),
  ],
  parameters: {
    docs: {
      source: {
        transform: (src: string) => {
          const wrapperStriped = src.replace(/<div[^>]*>\s*([\s\S]*?)\s*<\/div>/gi, '$1');
          return wrapperStriped;
        },
      },
    },
  },
  render: (args: VerticalBarChartGroupedComponent) => ({
    props: args,
    template: `
      <Card [class]="'w-full p-8'">
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Vertical Bar Chart Grouped
          </CardTitle>
          <CardDescription>
            Monthly Sales
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <VerticalBarChartGrouped ${argsToTemplate(args)} />
        </CardContent>
      </Card>
    `,
  })
};
export default meta;
type Story = StoryObj<VerticalBarChartGroupedComponent>;

export const Primary: Story = {
  args: {
    chartData: [
      {
        "name": "Germany",
        "series": [
          {
            "name": "2010",
            "value": 7300000
          },
          {
            "name": "2011",
            "value": 8940000
          }
        ]
      },

      {
        "name": "USA",
        "series": [
          {
            "name": "2010",
            "value": 7870000
          },
          {
            "name": "2011",
            "value": 8270000
          }
        ]
      },

      {
        "name": "France",
        "series": [
          {
            "name": "2010",
            "value": 5000002
          },
          {
            "name": "2011",
            "value": 5800000
          }
        ]
      },

        {
          "name": "UK",
          "series": [
            {
              "name": "2010",
              "value": 5000002
            },
            {
              "name": "2011",
              "value": 5800000
            }
          ]
        },
        {
          "name": "Italy",
          "series": [
            {
              "name": "2010",
              "value": 5000002
            },
            {
              "name": "2011",
              "value": 5800000
            }
          ]
        },
        {
          "name": "Spain",
          "series": [
            {
              "name": "2010",
              "value": 5000002
            },
            {
              "name": "2011",
              "value": 5800000
            }
          ]
        }
    ] as unknown as InputSignal<Multi[] | undefined>,
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/vertical-bar-chart works!/gi)).toBeTruthy();
//   },
// };
