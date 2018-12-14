import { Component } from '@angular/core';

@Component({
  selector: 'diagnostics-overview',
  template: `
    <div class="card diagnostics-overview-container flex">
      <div class="title">diagnostics overview</div>
      <div class="flex">
        <div class="circle sky-blue">02</div>
        <div class="circle golden-tainoi">02</div>
        <div class="circle salmon">00</div>
        <div class="circle sky-blue">00</div>
        <div class="circle yellow-green">01</div>
      </div>
    </div>
  `,
  styles: [`
    .diagnostics-overview-container {
      align-items: center;
      padding: 10px 20px;
    }
    .title {
      color: #90A9A0;
      font-family: muli-bold;
      font-size: .75rem;
      text-transform: capitalize;
    }
    .circle {
      width: 40px;
      height: 40px;
      border: 1px solid;
      border-radius: 50%;
      font-family: muli-bold;
      justify-content: center;
      align-items: center;
      display: flex;
      margin-left: 20px;
      font-size: .875rem;
    }
    .sky-blue {color: #6ECCE8; border-color: #6ECCE8;}
    .golden-tainoi {color: #FFCD5C; border-color: #FFCD5C;}
    .salmon {color: #FF7B7B; border-color: #FF7B7B;}
    .yellow-green {color: #C4DE8A; border-color: #C4DE8A;}
  `]
})
export class DiagnosticsOverviewComponent {}
