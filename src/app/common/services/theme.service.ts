import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public readonly selectedLayout: WritableSignal<number | undefined> = signal(undefined);

  private readonly http = inject(HttpClient);

  constructor() {
    this.fetchLayout();
  }

  private fetchLayout(): void {
    this.http.get<{id: number}>('http://localhost:3000/layout')
      .subscribe({
        next: ({id}) => this.selectedLayout.set(id)
      });
  }
}
