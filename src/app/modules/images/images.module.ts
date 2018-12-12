import { NgModule } from '@angular/core';

import { ExtraOralComponent } from './pages/extra-oral/extra-oral.component';
import { FullPostureComponent } from './pages/full-posture/full-posture.component';
import { IntraOralComponent } from './pages/intra-oral/intra-oral.component';
import { DigitalImpressionComponent } from './pages/digital-impression/digital-impression.component';
import { XraysComponent } from './pages/xrays/xrays.component';
import { ImagesRoutingModule } from './images-routing.module';

@NgModule({
  imports: [
    ImagesRoutingModule
  ],
  declarations: [ExtraOralComponent, FullPostureComponent, IntraOralComponent, DigitalImpressionComponent, XraysComponent]
})
export class ImagesModule { }
