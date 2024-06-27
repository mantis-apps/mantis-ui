import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import type { Meta, StoryObj } from '@storybook/angular';
import { InputSignal, importProvidersFrom} from '@angular/core';
import { moduleMetadata, argsToTemplate, applicationConfig } from '@storybook/angular';
import { VerticalBarChartNormalizedComponent } from './vertical-bar-chart-normalized.component';
import { NgxChartsModule, } from "@swimlane/ngx-charts";
import { Multi } from "./models";
import {CardComponent, CardContentComponent, CardTitleComponent, CardDescriptionComponent, CardFooterComponent, CardHeaderComponent } from '../card'

const meta: Meta<VerticalBarChartNormalizedComponent> = {
  component: VerticalBarChartNormalizedComponent,
  title: 'Components/Charts/Vertical/Normalized',
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
  render: (args: VerticalBarChartNormalizedComponent) => ({
    props: args,
    template: `
      <Card [class]="'w-full p-8'">
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Vertical Bar Chart Normalized
          </CardTitle>
          <CardDescription>
            Monthly Sales
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <VerticalBarChartNormalized ${argsToTemplate(args)} />
        </CardContent>
      </Card>
    `,
  })
};
export default meta;
type Story = StoryObj<VerticalBarChartNormalizedComponent>;

export const Primary: Story = {
  args: {
    chartData: [
      {
        "name": "Germany",
        "series": [
          {
            "name": "2010",
            "value": 73000000
          },
          {
            "name": "2011",
            "value": 89400000
          },
          {
            "name": "1990",
            "value": 62000000
          }
        ]
      },

      {
        "name": "USA",
        "series": [
          {
            "name": "2010",
            "value": 309000000
          },
          {
            "name": "2011",
            "value": 311000000
          },
          {
            "name": "1990",
            "value": 250000000
          }
        ]
      },

      {
        "name": "France",
        "series": [
          {
            "name": "2010",
            "value": 50000020
          },
          {
            "name": "2011",
            "value": 58000000
          },
          {
            "name": "1990",
            "value": 58000000
          }
        ]
      },
      {
        "name": "UK",
        "series": [
          {
            "name": "2010",
            "value": 62000000
          },
          {
            "name": "1990",
            "value": 57000000
          }
        ]
      }
    ] as unknown as InputSignal<Multi[] | undefined>,
  },
};
