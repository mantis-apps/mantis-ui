import { Component, input, Input, Output, EventEmitter, signal, OnInit } from "@angular/core";
import { Color, NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartOptions, DEFAULT_CHART_OPTIONS, Single } from "./models";

@Component({
  selector: "VerticalBarChart",
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <ngx-charts-bar-vertical
      [legend]="chartOptions.legend || O.legend"
      [scheme]="chartOptions.colorScheme || O.colorScheme"
      [view]="chartOptions.view || O.view"
      [results]="chartData()"
      [gradient]="chartOptions.gradient || O.gradient"
      [xAxis]="chartOptions.showXAxis || O.showXAxis"
      [yAxis]="chartOptions.showYAxis || O.showYAxis"
      [showXAxisLabel]="chartOptions.showXAxisLabel  || O.showXAxisLabel"
      [showYAxisLabel]="chartOptions.showYAxisLabel || O.showYAxisLabel"
      [xAxisLabel]="chartOptions.xAxisLabel || O.xAxisLabel"
      [yAxisLabel]="chartOptions.yAxisLabel || O.yAxisLabel"
      [barPadding]="chartOptions.barPadding || O.barPadding"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical>
  `,
})
export class VerticalBarChartComponent implements OnInit {

  @Input() chartOptions! : ChartOptions;

  O = DEFAULT_CHART_OPTIONS;
 
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
    this.chartOptions = { ...DEFAULT_CHART_OPTIONS, ...this.chartOptions };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect(event: any) {
    this.selected.emit(event);
  }
}
