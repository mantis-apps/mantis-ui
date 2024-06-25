import { Component, input, Input, Output, EventEmitter, signal, OnInit } from "@angular/core";
import { Color, NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartOptions, DEFAULT_CHART_OPTIONS, Single } from "./models";

@Component({
  selector: "VerticalBarChart",
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <ngx-charts-bar-vertical
      [legend]="chartOptions().legend"
      [scheme]="chartOptions().colorScheme"
      [view]="chartOptions().view "
      [results]="chartData()"
      [gradient]="chartOptions().gradient"
      [xAxis]="chartOptions().showXAxis"
      [yAxis]="chartOptions().showYAxis"
      [showXAxisLabel]="chartOptions().showXAxisLabel"
      [showYAxisLabel]="chartOptions().showYAxisLabel"
      [showGridLines]="chartOptions().showGridLines"
      [xAxisLabel]="chartOptions().xAxisLabel"
      [yAxisLabel]="chartOptions().yAxisLabel"
      [barPadding]="chartOptions().barPadding"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical>
  `,
})
export class VerticalBarChartComponent implements OnInit {

  // @Input() chartOptions!: any;

  // O = DEFAULT_CHART_OPTIONS;

  chartOptions = input(DEFAULT_CHART_OPTIONS, {
    transform: (options: Partial<ChartOptions>) => ({ ...DEFAULT_CHART_OPTIONS, ...options }),
  });

  single = signal<Single[]>([
    {
      "name": "Germany",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "United States",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "France",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "United Kingdom",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    }
  ]);

  chartData = input<Single[]>();

  @Output() selected = new EventEmitter();

  ngOnInit() {
    console.log(this.chartOptions());
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect(event: any) {
    this.selected.emit(event);
  }
}
