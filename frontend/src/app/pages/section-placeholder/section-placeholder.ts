import { Component, input } from '@angular/core';
import { SectionHeaderComponent } from '../../componentes/header/section-header';

@Component({
  selector: 'app-section-placeholder',
  imports: [SectionHeaderComponent],
  templateUrl: './section-placeholder.html',
  styleUrl: './section-placeholder.css',
})
export class SectionPlaceholderPage {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
