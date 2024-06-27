import { Component, input, Output, EventEmitter, signal } from "@angular/core";
import { Color, NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartOptions, DEFAULT_CHART_OPTIONS, Multi, Single } from "./models";

@Component({
  selector: "VerticalBarChartNormalized",
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <ngx-charts-bar-vertical-normalized
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
    </ngx-charts-bar-vertical-normalized>
  `,
  styleUrls: ["./charts.style.css"],

})
export class VerticalBarChartNormalizedComponent {

  MULTI_OPTIONS: ChartOptions = { ...DEFAULT_CHART_OPTIONS, colorScheme: { domain: ['hsl(var(--primary))', 'hsl(var(--primary) / .85)', 'hsl(var(--primary) / .75)', 'hsl(var(--primary) / .65)', 'hsl(var(--primary) / .5)'] } as Color};

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
