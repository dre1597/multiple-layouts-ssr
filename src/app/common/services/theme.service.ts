import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public readonly selectedLayout: WritableSignal<number | undefined> = signal(undefined);

  private readonly http = inject(HttpClient);

  constructor() {
    this.fetchLayout();
  }

  public changeLayout(): void {
    const changeTo = this.selectedLayout() === 1 ? 2 : 1;

    this.http.patch<User>('http://localhost:3000/users/1', { layout: changeTo })
      .subscribe({
        next: ({ layout }) => this.selectedLayout.set(layout)
      });
  }

  private fetchLayout(): void {
    this.http.get<User>('http://localhost:3000/users/1')
      .subscribe({
        next: ({ layout }) => {
          this.selectedLayout.set(layout);
        }
      });
  }
}
