import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardModule
} from "@mantistech/ui"

@Component({
  selector: 'app-demo-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule],
  template: `
    <Card>
      <CardHeader class="pb-2">
        <CardDescription>This Week</CardDescription>
        <CardTitle class="text-4xl">$1,329</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="text-xs text-muted-foreground">+25% from last week</div>
      </CardContent>
    </Card>
  `,
  styles: ``,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DemoDashboardPage {}

