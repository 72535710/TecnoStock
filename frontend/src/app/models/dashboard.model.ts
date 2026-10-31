export interface DashboardMetric {
  label: string;
  value: string;
  note: string;
  icon: string;
  tone: 'green' | 'orange' | 'graphite' | 'cream';
}

export interface RecentMovement {
  date: string;
  description: string;
  code: string;
  type: 'Entrada' | 'Salida';
  quantity: string;
}

export interface LowStockProduct {
  name: string;
  code: string;
  remaining: number;
  minimum: number;
}
