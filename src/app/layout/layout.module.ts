import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
      MainLayoutComponent,
      FooterComponent,
      NavbarComponent
    ],
    imports: [
      CoreModule,
      SharedModule,
      RouterModule
    ],
    exports: []
})
export class LayoutModule
{
}
