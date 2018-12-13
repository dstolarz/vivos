import { Component } from '@angular/core';

@Component({
  selector: 'user-setting',
  template: `
    <div class="user-setting-container flex">
      <div class="badging">RS</div>
    </div>
  `,
  styles: [`
    .user-setting-container {
      width: 65px;
      height: 34px;
      justify-content: flex-end;
    }
    .badging {
      background: #E4BE45;
      font-family: muli-bold;
      font-size: 1rem;
      text-transform: uppercase;
      color: #fff;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      line-height: 2;
      text-align: center;
    }
  `]
})
export class UserSettingComponent {}
