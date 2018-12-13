import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        NavComponent,
        FooterComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      HeaderModule,
    ],
    exports: [
        NavComponent,
        FooterComponent,
        HeaderComponent
    ],
    providers: [],
})
export class LayoutModule { }
