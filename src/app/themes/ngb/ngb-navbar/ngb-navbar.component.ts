import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbNav, NgbNavItem, NgbNavLink } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ngb-navbar',
  standalone: true,
  imports: [NgbNav, NgbNavItem, AsyncPipe, RouterLink, NgbNavLink],
  template: `<ul ngbNav [activeId]="route.fragment | async" class="nav-tabs">
      @for (link of links; track link) {
        <li [ngbNavItem]="link.fragment">
          <a ngbNavLink [routerLink]="link.fragment">{{ link.title }}</a>
        </li>
      }
    </ul>`,
})
export class NgbNavbarComponent {
  links = [
    { fragment: '', title: 'Dashboard' },
    { fragment: 'about', title: 'About' }
  ]

  protected readonly route = inject(ActivatedRoute);
}
