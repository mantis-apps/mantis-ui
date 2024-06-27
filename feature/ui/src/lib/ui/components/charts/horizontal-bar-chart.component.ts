import { Component, input, Output, EventEmitter, signal } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartOptions, DEFAULT_CHART_OPTIONS, Single } from "./models";

@Component({
  selector: "HorizontalBarChart",
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <ngx-charts-bar-horizontal
      [legend]="chartOptions().legend"
      [scheme]="chartOptions().colorScheme"
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
    </ngx-charts-bar-horizontal>
  `,
  styleUrls: ["./charts.style.css"],

})
export class HorizontalBarChartComponent {

  chartOptions = input(DEFAULT_CHART_OPTIONS, {
    transform: (options: Partial<ChartOptions>) => ({ ...DEFAULT_CHART_OPTIONS, ...options }),
  });

  chartData = input<Single[]>();

  @Output() selected = new EventEmitter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect(event: any) {
    this.selected.emit(event);
  }
}
