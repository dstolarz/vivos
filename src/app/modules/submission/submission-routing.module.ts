import { Routes, RouterModule } from '@angular/router';
import { PatientInfoComponent } from './pages/patient-info/patient-info.component';
import { HealthHistoryComponent } from './pages/health-history/health-history.component';
import { PatientOcclusionComponent } from './pages/patient-occlusion/patient-occlusion.component';
import { PatientObjectivesComponent } from './pages/patient-objectives/patient-objectives.component';
import { MiscDocumentsComponent } from './pages/misc-documents/misc-documents.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderApplianceComponent } from './pages/order-appliance/order-appliance.component';
import { NgModule } from '@angular/core';


const routes: Routes = [{
    path: 'patient-info',
    component: PatientInfoComponent
}, {
    path: 'health-history',
    component: HealthHistoryComponent
}, {
    path: 'patient-occlusion',
    component: PatientOcclusionComponent
}, {
    path: 'patient-objectives',
    component: PatientObjectivesComponent
}, {
    path: 'misc-documents',
    component: MiscDocumentsComponent
}, {
    path: 'order-details',
    component: OrderDetailsComponent
}, {
    path: 'order-appliance',
    component: OrderApplianceComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubmissionRoutingModule {}
