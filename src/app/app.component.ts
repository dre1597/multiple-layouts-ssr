import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgIf } from '@angular/common';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
}
