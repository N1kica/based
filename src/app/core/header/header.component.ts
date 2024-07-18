import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <div
        class="flex items-center justify-between h-16 px-6 sm:px-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
      >
        <a routerLink="/"
          ><img src="assets/logo-nav.png" alt="angular" class="h-10"
        /></a>
        <nav id="menu">
          <ul role="list" class="hidden sm:flex">
            <li>
              <a
                routerLink="/"
                class="px-4 py-2 hover:text-gray-200 transition-colors"
                >HOME</a
              >
            </li>
            <li>
              <a
                routerLink="/page"
                class="px-4 py-2 hover:text-gray-200 transition-colors"
                >PAGE</a
              >
            </li>
          </ul>
        </nav>
        <button
          data-collapse-toggle="menu"
          type="button"
          aria-controls="menu"
          aria-expanded="false"
          class="block sm:hidden cursor-pointer"
        >
          <img src="assets/list.svg" class="h-5" />
        </button>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
