import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard';
import { SectionPlaceholderPage } from './pages/section-placeholder/section-placeholder';

export const routes: Routes = [
  { path: '', component: DashboardPage, title: 'Dashboard | TecnoStock' },
  {
    path: 'productos',
    component: SectionPlaceholderPage,
    title: 'Productos | TecnoStock',
    data: { title: 'Productos', description: 'Consulta y organiza el catálogo de equipos y accesorios.' },
  },
  {
    path: 'categorias',
    component: SectionPlaceholderPage,
    title: 'Categorías | TecnoStock',
    data: { title: 'Categorías', description: 'Explora las familias de productos del inventario.' },
  },
  {
    path: 'movimientos',
    component: SectionPlaceholderPage,
    title: 'Movimientos | TecnoStock',
    data: { title: 'Movimientos', description: 'Revisa entradas y salidas registradas en el sistema.' },
  },
  {
    path: 'historial',
    component: SectionPlaceholderPage,
    title: 'Historial | TecnoStock',
    data: { title: 'Historial', description: 'Consulta la actividad reciente del inventario.' },
  },
  {
    path: 'consultas',
    component: SectionPlaceholderPage,
    title: 'Consultas e indicadores | TecnoStock',
    data: { title: 'Consultas e indicadores', description: 'Visualiza consultas e indicadores del inventario.' },
  },
  { path: '**', redirectTo: '' },
];
