import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main class="px-6 sm:px-12 py-4">
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class AppComponent {}
