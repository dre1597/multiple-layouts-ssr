import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgbNavbarComponent } from './themes/ngb/ngb-navbar.component';
import { PngNavbarComponent } from './themes/primeng/png-navbar.component';
import { NgIf } from '@angular/common';
import { ContainerComponent } from './common/components/container.component';
import { ThemeService } from './common/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbNavbarComponent, PngNavbarComponent, NgIf, ContainerComponent],
  template: `
    <app-container></app-container>
    <button (click)="changeLayout()">Change Layout</button>

    <router-outlet></router-outlet>`,
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);

  protected changeLayout(): void {
    this.themeService.changeLayout();
  }
}
