import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import type { Meta, StoryObj } from '@storybook/angular';
import { InputSignal, importProvidersFrom} from '@angular/core';
import { moduleMetadata, argsToTemplate, applicationConfig } from '@storybook/angular';
import { HorizontalBarChartStackedComponent } from './horizontal-bar-chart-stacked.component';
import { NgxChartsModule, } from "@swimlane/ngx-charts";
import { Multi } from "./models";
import {CardComponent, CardContentComponent, CardTitleComponent, CardDescriptionComponent, CardFooterComponent, CardHeaderComponent } from '../card'

const meta: Meta<HorizontalBarChartStackedComponent> = {
  component: HorizontalBarChartStackedComponent,
  title: 'Components/Charts/Horizontal/Stacked',
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
  render: (args: HorizontalBarChartStackedComponent) => ({
    props: args,
    template: `
      <Card [class]="'w-full p-8'">
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Horizontal Bar Chart Stacked
          </CardTitle>
          <CardDescription>
            Monthly Sales
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <HorizontalBarChartStacked ${argsToTemplate(args)} />
        </CardContent>
      </Card>
    `,
  })
};
export default meta;
type Story = StoryObj<HorizontalBarChartStackedComponent>;

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
//     expect(canvas.getByText(/Horizontal-bar-chart works!/gi)).toBeTruthy();
//   },
// };
