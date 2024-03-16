import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgbNavbarComponent } from './themes/ngb/ngb-navbar/ngb-navbar.component';
import { PngNavbarComponent } from './themes/primeng/png-navbar/png-navbar.component';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

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

    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit{
  protected selectedLayout: number | undefined;
  private readonly http = inject(HttpClient);

  public ngOnInit(): void {
    this.fetchLayout();
  }

  private fetchLayout(): void {
    this.http.get<{id: number}>('http://localhost:3000/layout')
      .subscribe({
        next: ({id}) => this.selectedLayout = id
      });
  }
}
