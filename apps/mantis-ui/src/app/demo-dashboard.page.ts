import { Component, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { faker } from '@faker-js/faker';
import { provideIcons } from '@ng-icons/core';
import { lucideDollarSign } from '@ng-icons/lucide';
import {
  AvatarComponent,
  CardModule,
  VerticalBarChartComponent,
  Single,
  Multi,
  ChartOptions,
  IconComponent
} from "@mantistech/ui"

export interface AffiliateVendor {
  vendorId: string;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  url: string;
  revenue: string;
}

@Component({
  selector: 'app-demo-dashboard',
  standalone: true,
  imports: [
    AvatarComponent,
    CommonModule,
    CardModule,
    VerticalBarChartComponent,
    IconComponent,
    NgFor
  ],
  providers: [
    provideIcons({
      lucideDollarSign
    })
  ],
  template: `
    <div class="flex-1 space-y-8 p-8">
      <!-- stats cards -->
      <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader class="pb-2">
          <CardDescription [descriptionClass]="'flex flex-row items-center justify-between space-y-0'">
            <h3 class="tracking-tight text-sm font-medium">This Week</h3>
            <Icon name="lucideDollarSign" size="base" />
          </CardDescription>
          <CardTitle class="text-4xl">$1,329</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-xs text-muted-foreground">+25% from last week</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="pb-2">
          <CardDescription>This Week</CardDescription>
          <CardTitle class="text-4xl">$1,329</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-xs text-muted-foreground">+25% from last week</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="pb-2">
          <CardDescription>This Week</CardDescription>
          <CardTitle class="text-4xl">$1,329</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-xs text-muted-foreground">+25% from last week</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="pb-2">
          <CardDescription>This Week</CardDescription>
          <CardTitle class="text-4xl">$1,329</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-xs text-muted-foreground">+25% from last week</div>
        </CardContent>
      </Card>
      </div>

      <!-- charts -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <!-- Vertical Bar Chart -->

        <Card
        class="w-full col-span-5">
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

        <!-- End Vertical Bar Chart -->

        <!-- Recent Sales -->
        <Card
        class="w-full col-span-2">
        <CardHeader>
          <CardTitle [class]="'text-3xl'">
            Recent Sales
          </CardTitle>
          <CardDescription>
            You made 265 affiliate sales this month
          </CardDescription>
        </CardHeader>
        <CardContent [contentClass]="'p-6 pt-2 space-y-7 '">
          @for( affiliate of affiliateVendorsData; track affiliate.vendorId) {
            <div class="flex items-center">
              <Avatar
                [imgSrc]="affiliate.avatar"
                [imgAltText]="affiliate.url"
                fallbackText="MI"
                fallbackBgColor="#0EC1AE"
                variant="medium"
                class="rounded-full border border-input bg-background"
              />
              <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none">
                  {{ affiliate.firstName }} {{ affiliate.lastName }}
                </p>
                <p class="text-sm text-muted-foreground">
                  {{ affiliate.email }}
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$ {{ affiliate.revenue }}
              </div>
            </div>
          }
          <!-- <div class="flex items-center">
            <span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
              <img class="aspect-square h-full w-full" alt="Avatar" src="/avatars/01.png">
            </span>
            <div class="ml-4 space-y-1">
              <p class="text-sm font-medium leading-none">
                Mantis Tech
              </p>
              <p class="text-sm text-muted-foreground">
                mantistech.io
              </p>
            </div>
            <div class="ml-auto font-medium">
              +$1,999.00
            </div>
          </div> -->
        </CardContent>

      </Card>
        <!-- End Recent Sales -->

      </div>
    </div>
  `,
  styles: ``,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DemoDashboardPage {

  barChartData = signal<Single[]>(this.createBarChartData());

  multiBarChartData = signal<Multi[]>(this.createMultiBarChartData());

  barChartOptions = signal<Partial<ChartOptions>>({
    xAxisLabel: 'Months',
    yAxisLabel: 'Monthly Revenue',
    barPadding: 32
  })

  affiliateVendorsData: AffiliateVendor[] = faker.helpers.multiple(this.createAffiliateVendor, { count: 6 });

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

  createAffiliateVendor(): AffiliateVendor {
    return {
        vendorId: faker.string.uuid(),
        avatar: faker.image.avatar(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        url: faker.internet.url(),
        revenue: faker.finance.amount({ min: 40, max: 2000 })
      }
  }

  chartEvent(event: any) {
    console.log(event);
  }
}

