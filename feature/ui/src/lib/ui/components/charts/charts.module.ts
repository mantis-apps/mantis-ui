import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerticalBarChartComponent } from './vertical-bar-chart.component';

export * from './vertical-bar-chart.component';
export * from './models';

export const ChartComponentImports = [
  VerticalBarChartComponent
];

@NgModule({
  imports: [...ChartComponentImports],
  exports: [...ChartComponentImports],
})
export class ChartsModule {}
