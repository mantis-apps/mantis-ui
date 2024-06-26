import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import type { Meta, StoryObj } from '@storybook/angular';
import { signal, InputSignal, importProvidersFrom} from '@angular/core';
import { moduleMetadata, argsToTemplate, applicationConfig } from '@storybook/angular';
import { GaugeChartComponent } from './gauge-chart.component';
import { NgxChartsModule, } from "@swimlane/ngx-charts";
import { ChartOptions, DEFAULT_CHART_OPTIONS, Single } from "./models";
import {CardComponent, CardContentComponent, CardTitleComponent, CardDescriptionComponent, CardFooterComponent, CardHeaderComponent } from '../card'
//import { CardComponent } from '@swimlane/ngx-charts';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<GaugeChartComponent> = {
  component: GaugeChartComponent,
  title: 'Components/Charts/Gauge Chart',
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
  render: (args: GaugeChartComponent) => ({
    props: args,
    template: `
      <Card [class]="'w-full p-8'">
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Gauge Chart
          </CardTitle>
          <CardDescription>
            Monthly Sales
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <GaugeChart ${argsToTemplate(args)} />
        </CardContent>
      </Card>
    `,
  })
};
export default meta;
type Story = StoryObj<GaugeChartComponent>;

export const Primary: Story = {
  args: {
    chartData: [

      {
        "name": "Jan",
        "value": 40632,
        "extra": {
          "code": "de"
        }
      },
      {
        "name": "Feb",
        "value": 50000,
        "extra": {
          "code": "us"
        }
      },
      {
        "name": "Mar",
        "value": 36745,
        "extra": {
          "code": "fr"
        }
      },
      {
        "name": "Apr",
        "value": 36240,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "May",
        "value": 33000,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "Jun",
        "value": 36000,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "Jul",
        "value": 40000,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "Aug",
        "value": 42000,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "Sep",
        "value": 45000,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "Oct",
        "value": 47000,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "Nov",
        "value": 50000,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "Dec",
        "value": 52000,
        "extra": {
          "code": "uk"
        }
      }
    ] as unknown as InputSignal<Single[]>,
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/vertical-bar-chart works!/gi)).toBeTruthy();
//   },
// };
