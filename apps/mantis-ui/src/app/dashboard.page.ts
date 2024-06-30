import { create } from '@storybook/theming/create';
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import {
  IconComponent,
  ButtonComponent,
  IconListComponent,
  CardModule,
  ChartOptions,
  AlertDialogComponent,
  AlertComponent,
  AspectRatioComponent,
  AvatarComponent,
  AccordionComponent,
  BadgeComponent,
  CarouselComponent,
  CheckboxComponent,
  CollapsibleComponent,
  CommandComponent,
  CommandDialogComponent,
  CommandData,
  HoverCardComponent,
  Single,
  VerticalBarChartComponent,
  VerticalBarChartGroupedComponent,
  Multi,
  VerticalBarChartStackedComponent,
  HorizontalBarChartComponent,
  GaugeChartComponent
} from '@mantistech/ui';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideMail, lucideMoon, lucideSearch, lucideCalendar, lucideSmile, lucidePlus, lucideUser, lucideWallet, lucideCog } from '@ng-icons/lucide';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [
    provideIcons({
      lucideMail,
      lucideMoon,
      lucideSearch,
      lucideCalendar,
      lucideSmile,
      lucidePlus,
      lucideUser,
      lucideWallet,
      lucideCog
     })
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ButtonComponent,
    IconComponent,
    IconListComponent,
    CardModule,
    HorizontalBarChartComponent,
    VerticalBarChartComponent,
    VerticalBarChartGroupedComponent,
    VerticalBarChartStackedComponent,
    AvatarComponent,
    AccordionComponent,
    HlmAspectRatioDirective,
    AlertComponent,
    AlertDialogComponent,
    AspectRatioComponent,
    AvatarComponent,
    BadgeComponent,
    CarouselComponent,
    CheckboxComponent,
    CollapsibleComponent,
    CommandComponent,
    CommandDialogComponent,
    HoverCardComponent,
    GaugeChartComponent
  ],
  templateUrl: './dashboard.page.html',
  styles: ``,
})
export class DashboardPage implements OnInit, OnDestroy {

  protected accordionItems = [
    {
      triggerText: 'Is it accessible?',
      content: `Yes. It adheres to the WAI-ARIA design pattern.`,
    },
    {
      triggerText: 'Is it styled?',
      content: `Yes. It comes with default styles that match the other components' aesthetics.`,
    },
    {
      triggerText: 'Is it animated?',
      content: `Yes. It's animated by default, but you can disable it if you prefer.`,
    },
  ];

  protected commandData: CommandData = {
    commandInputPlaceholder: 'Type a command or search...',
    commandEmptyText: 'No results found.',
    commandGroups: [
      {
        commandGroupLabel: 'Suggestions',
        commandItems: [
          {
            commandItemLabel: 'Calendar',
            commandItemSlug: 'calendar',
            commandItemIcon: 'lucideCalendar',
          },
          {
            commandItemLabel: 'Search Emoji',
            commandItemSlug: 'search-emoji',
            commandItemIcon: 'lucideSmile',
          },
          {
            commandItemLabel: 'Calculator',
            commandItemSlug: 'calculator',
            commandItemIcon: 'lucidePlus',
          },
        ],
      },
      {
        commandGroupLabel: 'Settings',
        commandItems: [
          {
            commandItemLabel: 'Profile',
            commandItemSlug: 'profile',
            commandItemIcon: 'lucideUser',
            commandItemShortcut: '⌘P',
          },
          {
            commandItemLabel: 'Billing',
            commandItemSlug: 'billing',
            commandItemIcon: 'lucideWallet',
            commandItemShortcut: '⌘B',
          },
          {
            commandItemLabel: 'Settings',
            commandItemSlug: 'settings',
            commandItemIcon: 'lucideCog',
            commandItemShortcut: '⌘S',
          },
        ],
      },
    ]
  };

  // barChartData =  signal<Single[]>([
  //   {
  //     "name": "Germany",
  //     "value": 40632,
  //     "extra": {
  //       "code": "de"
  //     }
  //   },
  //   {
  //     "name": "United States",
  //     "value": 50000,
  //     "extra": {
  //       "code": "us"
  //     }
  //   },
  //   {
  //     "name": "France",
  //     "value": 36745,
  //     "extra": {
  //       "code": "fr"
  //     }
  //   },
  //   {
  //     "name": "United Kingdom",
  //     "value": 36240,
  //     "extra": {
  //       "code": "uk"
  //     }
  //   }
  // ]);

  // create a function using faker and creates a fake barchart data set that changes every 5 seconds

  barChartData = signal<Single[]>(this.createBarChartData());

  multiBarChartData = signal<Multi[]>(this.createMultiBarChartData());

  barChartOptions = signal<Partial<ChartOptions>>({
    xAxisLabel: 'Months',
    yAxisLabel: 'Monthly Revenue'
  })

  randomData: any;

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

  showAlert(event: {value: string}) {
    alert(event.value);
  }

  setCommand(event: string) {
    alert(`Command selected: ${event}`);
  }

  chartEvent(event: any) {
    console.log(event);
  }

  ngOnInit() {
    this.randomData = setInterval(() => {
      this.barChartData.set(this.createBarChartData());
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.randomData);
  }

}
