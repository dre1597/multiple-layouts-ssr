import { Component, effect, inject, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { ThemeService } from '../services/theme.service';
import { NgbNavbarComponent } from '../../themes/ngb/ngb-navbar.component';
import { PngNavbarComponent } from '../../themes/primeng/png-navbar.component';

@Component({
  selector: 'app-container',
  standalone: true,
  template: '<ng-template #container></ng-template>',

})
export class ContainerComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) private container: ViewContainerRef | undefined;

  private readonly themeService = inject(ThemeService);
  private readonly injector = inject(Injector);

  public ngOnInit(): void {
    effect(() => {
      const selectedLayout = this.themeService.selectedLayout();
      this.loadComponent(selectedLayout);
    }, {
      injector: this.injector
    });
  }

  private loadComponent(selectedLayout: number | undefined): void {
    if (this.container) {
      this.container.clear();
      switch (selectedLayout) {
        case 1:
          this.container.createComponent(NgbNavbarComponent);
          break;
        case 2:
          this.container.createComponent(PngNavbarComponent);
          break;
      }
    }
  }

}
