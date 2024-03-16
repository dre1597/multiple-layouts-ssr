import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-png-navbar',
  standalone: true,
  imports: [
    MenubarModule
  ],
  template: `<div class="card">
    <p-menubar [model]="items"></p-menubar>
  </div>`,
})
export class PngNavbarComponent implements OnInit{
  protected items: MenuItem[] | undefined;

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/about'
      }
    ];
  }

}
