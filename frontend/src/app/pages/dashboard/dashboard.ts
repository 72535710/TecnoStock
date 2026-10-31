import { Component, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../componentes/header/section-header';
import { DashboardDemoService } from '../../services/dashboard-demo.service';

@Component({
  selector: 'app-dashboard',
  imports: [SectionHeaderComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardPage {
  private readonly demoData = inject(DashboardDemoService);

  protected readonly metrics = this.demoData.metrics;
  protected readonly movements = this.demoData.movements;
  protected readonly lowStockProducts = this.demoData.lowStockProducts;
}
