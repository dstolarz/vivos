import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brand',
  template: `
    <div class="brand-container">
      <img class="logo" src="assets/images/brand-logo.png" alt="vivos-aire"/>
    </div>
  `,
  styles: [`
    .logo {
      width: 154px;
    }
  `]
})
export class BrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
