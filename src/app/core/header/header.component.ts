import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <header>
      <div
        class="flex items-center justify-between h-16 px-6 sm:px-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
      >
        <a routerLink="/"
          ><img src="assets/logo.svg" alt="angular" class="size-10"
        /></a>
        <nav>
          <ul role="list" class="hidden sm:flex font-medium">
            <li>
              <a
                routerLink="/"
                class="px-4 py-2 hover:text-gray-300 transition-colors"
                >HOME</a
              >
            </li>
            <li>
              <a
                routerLink="/page"
                class="px-4 py-2 hover:text-gray-300 transition-colors"
                >PAGE</a
              >
            </li>
          </ul>
        </nav>
        <button class="block sm:hidden cursor-pointer">
          <app-icon
            [icon]="'fb-list'"
            [styles]="'size-6 text-white hover:text-gray-300 transition-colors'"
          />
        </button>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
