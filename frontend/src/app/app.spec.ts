import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';
import { DashboardPage } from './pages/dashboard/dashboard';
import { SectionPlaceholderPage } from './pages/section-placeholder/section-placeholder';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes, withComponentInputBinding())],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should route to the dashboard by default', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/', DashboardPage);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Dashboard');
  });

  it('should show a construction page for unfinished sections', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/productos', SectionPlaceholderPage);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Productos');
    expect(harness.routeNativeElement?.textContent).toContain('en construcción');
  });
});
