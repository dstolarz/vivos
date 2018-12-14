import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand/brand.component';
import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { DiagnosticsOverviewComponent } from './diagnostics-overview/diagnostics-overview.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BrandComponent, HeaderComponent, SearchComponent, UserSettingComponent, DiagnosticsOverviewComponent, ContactComponent],
  exports: [BrandComponent, HeaderComponent]
})
export class HeaderModule { }
