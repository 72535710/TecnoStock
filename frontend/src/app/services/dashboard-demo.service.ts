import { Injectable } from '@angular/core';
import { DashboardMetric, LowStockProduct, RecentMovement } from '../models/dashboard.model';

@Injectable({ providedIn: 'root' })
export class DashboardDemoService {
  readonly metrics: DashboardMetric[] = [
    { label: 'Productos activos', value: '248', note: 'en el catálogo', icon: 'M4 5.5 12 2l8 3.5v13L12 22l-8-3.5z M4 5.5l8 4 8-4 M12 9.5V22', tone: 'green' },
    { label: 'Stock bajo', value: '12', note: 'requieren atención', icon: 'M12 3 2.8 20h18.4L12 3z M12 9v5 M12 17.5v.1', tone: 'orange' },
    { label: 'Valor referencial', value: 'S/ 86,420', note: 'valor del inventario', icon: 'M12 2v20 M17 6.5c0-1.4-1.8-2.5-4-2.5s-4 1.1-4 2.5 1.8 2.5 4 2.5 4 1.1 4 2.5-1.8 2.5-4 2.5-4-1.1-4-2.5', tone: 'graphite' },
    { label: 'Movimientos', value: '1,284', note: 'registros acumulados', icon: 'M4 19V5 M4 19h17 M8 15l4-4 3 2 5-6 M17 7h3v3', tone: 'cream' },
  ];

  readonly movements: RecentMovement[] = [
    { date: '31 OCT · 09:42', description: 'Laptop Lenovo ThinkPad E14', code: 'LAP-0142', type: 'Entrada', quantity: '+ 8 un.' },
    { date: '31 OCT · 08:15', description: 'Mouse Logitech M185', code: 'ACC-0088', type: 'Salida', quantity: '− 3 un.' },
    { date: '30 OCT · 16:28', description: 'Monitor Dell P2422H', code: 'MON-0021', type: 'Entrada', quantity: '+ 5 un.' },
    { date: '30 OCT · 14:06', description: 'Teclado mecánico Redragon', code: 'ACC-0115', type: 'Salida', quantity: '− 2 un.' },
  ];

  readonly lowStockProducts: LowStockProduct[] = [
    { name: 'Adaptador USB-C multipuerto', code: 'ACC-0064', remaining: 2, minimum: 8 },
    { name: 'SSD Kingston 1 TB NV2', code: 'ALM-0031', remaining: 3, minimum: 10 },
    { name: 'Webcam Logitech C920', code: 'ACC-0049', remaining: 4, minimum: 8 },
  ];
}
