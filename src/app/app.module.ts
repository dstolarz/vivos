import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

import { AuthModule } from './modules/auth/auth.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BasicInfoComponent } from './layouts/basic-info/basic-info.component';
import { ContactInfoComponent } from './layouts/contact-info/contact-info.component';
import { InsuranceInfoComponent } from './layouts/insurance-info/insurance-info.component';
import { AppointmentsComponent } from './layouts/appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    BasicInfoComponent,
    ContactInfoComponent,
    InsuranceInfoComponent,
    AppointmentsComponent
  ],
  imports: [
    // angular
    BrowserModule,

    // 3rd party
    AuthModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
