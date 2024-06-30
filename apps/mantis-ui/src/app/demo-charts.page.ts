import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faker } from '@faker-js/faker';

import {
  CardModule,
  VerticalBarChartComponent,
  VerticalBarChartGroupedComponent,
  VerticalBarChartStackedComponent,
  VerticalBarChartNormalizedComponent,
  HorizontalBarChartComponent,
  HorizontalBarChartGroupedComponent,
  HorizontalBarChartStackedComponent,
  HorizontalBarChartNormalizedComponent,
  GaugeChartComponent,
  ChartOptions,
  Single,
  Multi,
} from '@mantistech/ui'

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'DemoCharts',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    VerticalBarChartComponent,
    VerticalBarChartGroupedComponent,
    VerticalBarChartStackedComponent,
    VerticalBarChartNormalizedComponent,
    HorizontalBarChartComponent,
    HorizontalBarChartGroupedComponent,
    HorizontalBarChartStackedComponent,
    HorizontalBarChartNormalizedComponent,
    GaugeChartComponent
  ],
  template: `
    <div class="flex-1 space-y-8 p-8">
      <!-- stats cards -->
      <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <Card
        class="w-full">
        <!-- <ng-container CardBadge>
          <small>100k<sup>+</sup></small>
        </ng-container> -->
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Vertical Bar Chart
          </CardTitle>
          <CardDescription>
            GDP per capita of a few European countries
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <VerticalBarChart
          (selected)="chartEvent($event)"
          [chartData]="barChartData()"
          [chartOptions]="barChartOptions()"
        />
        </CardContent>

      </Card>

      <Card
        class="w-full">
        <!-- <ng-container CardBadge>
          <small>100k<sup>+</sup></small>
        </ng-container> -->
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Vertical Bar Chart Grouped
          </CardTitle>
          <CardDescription>
            GDP per capita of a few European countries
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <VerticalBarChartGrouped
          (selected)="chartEvent($event)"
          [chartData]="multiBarChartData()"
          [chartOptions]="barChartOptions()"
        />
        </CardContent>

      </Card>

      <Card
        class="w-full">
        <!-- <ng-container CardBadge>
          <small>100k<sup>+</sup></small>
        </ng-container> -->
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Vertical Bar Chart Stacked
          </CardTitle>
          <CardDescription>
            GDP per capita of a few European countries
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <VerticalBarChartStacked
          (selected)="chartEvent($event)"
          [chartData]="multiBarChartData()"
          [chartOptions]="barChartOptions()"
        />
        </CardContent>

      </Card>

      <Card
        class="w-full">
        <!-- <ng-container CardBadge>
          <small>100k<sup>+</sup></small>
        </ng-container> -->
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Horizontal Bar Chart
          </CardTitle>
          <CardDescription>
            GDP per capita of a few European countries
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <HorizontalBarChart
          (selected)="chartEvent($event)"
          [chartData]="barChartData()"
          [chartOptions]="barChartOptions()"
        />
        </CardContent>

      </Card>

      <Card
        class="w-full">
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Horizontal Bar Chart Grouped
          </CardTitle>
          <CardDescription>
            GDP per capita of a few European countries
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <HorizontalBarChartGrouped
          (selected)="chartEvent($event)"
          [chartData]="multiBarChartData()"
          [chartOptions]="barChartOptions()"
        />
        </CardContent>

      </Card>

      <Card
        class="w-full">
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Horizontal Bar Chart Stacked
          </CardTitle>
          <CardDescription>
            GDP per capita of a few European countries
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <HorizontalBarChartStacked
          (selected)="chartEvent($event)"
          [chartData]="multiBarChartData()"
          [chartOptions]="barChartOptions()"
        />
        </CardContent>

      </Card>

      <Card
        class="w-full">
        <!-- <ng-container CardBadge>
          <small>100k<sup>+</sup></small>
        </ng-container> -->
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Gauge Chart
          </CardTitle>
          <CardDescription>
            GDP per capita of a few European countries
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'px-0'">
          <GaugeChart
          (selected)="chartEvent($event)"
          [chartData]="barChartData()"
          [chartOptions]="barChartOptions()"
        />
        </CardContent>

      </Card>
      </div>
    </div>
  `,
  styles: ``,
})
export class DemoChartsPageComponent {
  barChartData = signal<Single[]>(this.createBarChartData());

  multiBarChartData = signal<Multi[]>(this.createMultiBarChartData());

  barChartOptions = signal<Partial<ChartOptions>>({
    xAxisLabel: 'Months',
    yAxisLabel: 'Monthly Revenue',
    barPadding: 8
  })

  createBarChartData(): Single[] {
    return [
      {
        "name": "Jan",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "jan"
        }
      },
      {
        "name": "Feb",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "feb"
        }
      },
      {
        "name": "Mar",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "mar"
        }
      },
      {
        "name": "Apr",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "apr"
        },
      },
      {
        "name": "May",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "may"
        }
      },
      {
        "name": "Jun",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "jun"
        },
      },
      {
        "name": "Jul",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "jul"
        }
      },
      {
        "name": "Aug",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "aug"
        }
      },
      {
        "name": "Sep",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "sep"
        }
      },
      {
        "name": "Oct",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "oct"
        }
      },
      {
        "name": "Nov",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "nov"
        }
      },
      {
        "name": "Dec",
        "value": parseFloat(faker.finance.amount({ min: 1000, max: 10000 })),
        "extra": {
          "code": "dec"
        }
      }

    ]
  }

  createMultiBarChartData(): Multi[] {
    return [
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
    ];

  }

  chartEvent(event: any) {
    console.log(event);
  }
}
