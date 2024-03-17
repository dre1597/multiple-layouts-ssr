import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NAVBAR_LINKS } from '../../../common/models/navbar';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideMenu } from '@ng-icons/lucide';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    NgIconComponent,
  ],
  viewProviders: [provideIcons({ lucideMenu })],
  template: `
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-900 mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <a
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-red-100"
            [routerLink]="''"
          >
            Logo
          </a>
          <button
            class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button" (click)="toggleNavbar()">
            <ng-icon name="lucideMenu"></ng-icon>
          </button>
        </div>
        <div [ngClass]="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            @for (link of links; track link.fragment) {
              <li class="nav-item">
                <a
                  class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-red-100"
                  [routerLink]="link.fragment"
                >
                  {{ link.title }}
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  protected links = NAVBAR_LINKS;
  protected showMenu = false;

  protected toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
