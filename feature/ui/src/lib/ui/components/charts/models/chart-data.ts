import { Color } from '@swimlane/ngx-charts';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventEmitter, TemplateRef } from '@angular/core';
import { LegendOptions, LegendPosition, ScaleType, ViewDimensions, ColorHelper, DataItem } from '@swimlane/ngx-charts'

export interface Single {
  name: string;
  value: number;
  extra?: {
    code: string;
  };
  [key: string]: any;
}

export interface Series {
  name: string
  value: number
}

export interface Multi {
  name: string
  series: Series[]
}


export interface ChartOptions {
  legend: boolean;
  legendTitle: string;
  legendPosition: LegendPosition;
  xAxis: any;
  yAxis: any;
  showXAxis: boolean;
  showYAxis: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
  tooltipDisabled: boolean;
  gradient: boolean;
  showGridLines: boolean;
  activeEntries: any[];
  schemeType?: ScaleType;
  trimXAxisTicks: boolean;
  trimYAxisTicks: boolean;
  rotateXAxisTicks: boolean;
  maxXAxisTickLength: number;
  maxYAxisTickLength: number;
  xAxisTickFormatting: any;
  yAxisTickFormatting: any;
  xAxisTicks: any[];
  yAxisTicks: any[];
  barPadding: number;
  roundDomains: boolean;
  roundEdges: boolean;
  yScaleMax: number;
  yScaleMin: number;
  showDataLabel: boolean;
  dataLabelFormatting: any;
  noBarWhenZero: boolean;
  wrapTicks: boolean;
  activate?: EventEmitter<any>;
  deactivate?: EventEmitter<any>;
  tooltipTemplate?: TemplateRef<any>;
  dims?: ViewDimensions;
  xScale?: any;
  yScale?: any;
  xDomain?: any;
  yDomain?: any;
  transform?: string;
  colors?: ColorHelper;
  margin?: number[];
  xAxisHeight?: number;
  yAxisWidth?: number;
  legendOptions?: LegendOptions;
  dataLabelMaxHeight?: any;
  view: [number, number];
  colorScheme: string | Color;
}
