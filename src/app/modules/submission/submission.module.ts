import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientInfoComponent } from './pages/patient-info/patient-info.component';
import { HealthHistoryComponent } from './pages/health-history/health-history.component';
import { PatientObjectivesComponent } from './pages/patient-objectives/patient-objectives.component';
import { PatientOcclusionComponent } from './pages/patient-occlusion/patient-occlusion.component';
import { MiscDocumentsComponent } from './pages/misc-documents/misc-documents.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderApplianceComponent } from './pages/order-appliance/order-appliance.component';
import { RouterModule } from '@angular/router';
import { SubmissionRoutingModule } from './submission-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SubmissionRoutingModule
  ],
  exports: [RouterModule],
  declarations: [PatientInfoComponent, HealthHistoryComponent, PatientObjectivesComponent, PatientOcclusionComponent, MiscDocumentsComponent, OrderDetailsComponent, OrderApplianceComponent]
})
export class SubmissionModule { }
