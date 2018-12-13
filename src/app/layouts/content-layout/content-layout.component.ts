import { Component } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  template: `
    <div class="content-layout-container">
      <app-header></app-header>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .content-layout-container {
      background: #EAF5F2;
      height: 100%;
    }
  `]
})
export class ContentLayoutComponent {}
