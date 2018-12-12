import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExtraOralComponent } from './pages/extra-oral/extra-oral.component';
import { FullPostureComponent } from './pages/full-posture/full-posture.component';
import { IntraOralComponent } from './pages/intra-oral/intra-oral.component';
import { DigitalImpressionComponent } from './pages/digital-impression/digital-impression.component';
import { XraysComponent } from './pages/xrays/xrays.component';



const routes: Routes = [{
    path: 'extra-oral',
    component: ExtraOralComponent
}, {
    path: 'full-posture',
    component: FullPostureComponent
}, {
    path: 'intra-oral',
    component: IntraOralComponent
}, {
    path: 'digital-impression',
    component: DigitalImpressionComponent
}, {
    path: 'xrays',
    component: XraysComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImagesRoutingModule {}
