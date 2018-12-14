import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  template: `
    <div class="card contact-container flex">
      <div class="contact flex">
        <div class="flex">
          <div class="details">
            <div class="label">Corporation</div>
            <div class="value"> VSI Providers Pllc </div>
          </div>

          <div class="details">
            <div class="label">Specialty</div>
            <div class="value">VIVOS</div>
          </div>

          <div class="details">
            <div class="label">Phone</div>
            <div class="value">1(720) 239-7366</div>
          </div>
        </div>

        <div class="flex">
          <div class="details">
            <div class="label">Office Address</div>
            <address class="value">
              Vivos Highlands Ranch,
              9135 South Ridgeline Boulevard,
              Suite 100,
              Littleton,
              Colorado,
              80129
            </address>
          </div>
        </div>
      </div>
      <div class="change-address-container flex">
        <div class="change-address">
          Change Address
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      font-size: .75rem;
      color: #90A9A0;
      flex-direction: row;
      font-family: muli;
      justify-content: center;
      padding: 12px 20px;
    }

    .contact {
      flex: 10;
      flex-direction: column;
    }

    .details {
      display: flex;
      flex-direction: row;
      margin-right: 15px;
    }

    .label { font-family: muli-bold; }
    .label:after {
      content: ':';
      margin-right: 4px;
    }

    .change-address-container {
      flex: 2;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .change-address {
      color: #E4BE45;
      text-decoration: underline;
      coursor: pointer;
    }
  `]
})
export class ContactComponent {}
