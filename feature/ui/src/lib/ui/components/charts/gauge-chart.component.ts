import { Component, input, Output, EventEmitter, signal } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartOptions, DEFAULT_CHART_OPTIONS, Single } from "./models";

@Component({
  selector: "GaugeChart",
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <ngx-charts-gauge
      [legend]="chartOptions().legend"
      [legendPosition]="chartOptions().legendPosition"
      [scheme]="chartOptions().colorScheme"
      [results]="chartData()"
      (select)="onSelect($event)">
    </ngx-charts-gauge>
  `,
  styleUrls: ["./charts.style.css"],

})
export class GaugeChartComponent {

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

  chartData = input<Single[]>([]);

  @Output() selected = new EventEmitter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect(event: any) {
    this.selected.emit(event);
  }
}
