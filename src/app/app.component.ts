import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

import { NgbNavbarComponent } from './themes/ngb/ngb-navbar/ngb-navbar.component';
import { PngNavbarComponent } from './themes/primeng/png-navbar/png-navbar.component';

export type User = {
  id: string;
  name: string;
  layout: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbNavbarComponent, PngNavbarComponent, NgIf],
  template: `
    <ng-template [ngIf]="selectedLayout === 1">
      <app-ngb-navbar></app-ngb-navbar>
    </ng-template>
    <ng-template [ngIf]="selectedLayout === 2">
      <app-png-navbar></app-png-navbar>
    </ng-template>

    <button (click)="fetchLayout()" class="m-2">Fetch Layout</button>
    <button (click)="changeLayout()" class="m-2">Change Layout</button>

    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  protected selectedLayout: number | undefined;
  private readonly http = inject(HttpClient);

  public ngOnInit(): void {
    this.fetchLayout();
  }

  protected changeLayout(): void {
    const changeTo = this.selectedLayout === 1 ? 2 : 1;
    this.http.patch('http://localhost:3000/users/1', { layout: changeTo })
      .subscribe();
  }

  protected fetchLayout(): void {
    this.http.get<User>('http://localhost:3000/users/1')
      .subscribe({
        next: ({ layout }) => {
          this.selectedLayout = layout;
        }
      });
  }
}
