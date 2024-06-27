import { Component, input, Output, EventEmitter } from "@angular/core";
import { Color, NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartOptions, DEFAULT_CHART_OPTIONS, Multi } from "./models";

@Component({
  selector: "HorizontalBarChartStacked",
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <ngx-charts-bar-horizontal-stacked
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
      [roundDomains]="chartOptions().roundDomains"
      (select)="onSelect($event)">
    </ngx-charts-bar-horizontal-stacked>
  `,
  styleUrls: ["./charts.style.css"],

})
export class HorizontalBarChartStackedComponent {

  MULTI_OPTIONS: ChartOptions = { ...DEFAULT_CHART_OPTIONS, roundDomains: true, colorScheme: { domain: ['hsl(var(--primary))', 'hsl(var(--primary) / .65)'] } as Color};

  chartOptions = input(this.MULTI_OPTIONS, {
    transform: (options: Partial<ChartOptions>) => ({ ...this.MULTI_OPTIONS, ...options }),
  });

  chartData = input<Multi[]>();

  @Output() selected = new EventEmitter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect(event: any) {
    this.selected.emit(event);
  }
}
