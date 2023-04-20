import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routing';

import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CoreModule } from 'src/app/core/core.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { MisPokemonComponent } from './components/mis-pokemon/mis-pokemon.component';

@NgModule({
    declarations: [
      ProfileComponent,
      CardProfileComponent,
      MisPokemonComponent
    ],
    imports     : [
      RouterModule.forChild(profileRoutes),
      CoreModule,
      MaterialModule,
      SharedModule,
      NgxMaskDirective,
      NgxMaskPipe
    ],
    providers: [
      provideNgxMask()
    ]
})
export class ProfileModule
{
}
