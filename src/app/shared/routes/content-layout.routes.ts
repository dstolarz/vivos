import { Routes } from '@angular/router';

import { BasicInfoComponent } from '@app/layouts/basic-info/basic-info.component';
import { ContactInfoComponent } from '@app/layouts/contact-info/contact-info.component';
import { InsuranceInfoComponent } from '@app/layouts/insurance-info/insurance-info.component';
import { AppointmentsComponent } from '@app/layouts/appointments/appointments.component';

export const CONTENT_ROUTES: Routes = [{
  path: 'basic-info',
  component: BasicInfoComponent
}, {
  path: 'contact-info',
  component: ContactInfoComponent,
}, {
  path: 'insurance-info',
  component: InsuranceInfoComponent
}, {
  path: 'appointments',
  component: AppointmentsComponent
}, {
  path: 'images',
  loadChildren: './modules/images/images.module#ImagesModule'
}, {
  path: 'submission',
  loadChildren: './modules/submission/submission.module#SubmissionModule'
}];
