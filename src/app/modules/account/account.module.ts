import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { accountRoutes } from './account.routing';
import { AccountComponent } from './pages/account/account.component';
import { ChoosePokemonComponent } from './pages/choose-pokemon/choose-pokemon.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { AccountFormComponent } from './components/account-form/account-form.component';

import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CardAccountComponent } from './components/card-account/card-account.component';
import { CoreModule } from 'src/app/core/core.module';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';

@NgModule({
    declarations: [
      AccountComponent,
      ChoosePokemonComponent,
      UploadImageComponent,
      AccountFormComponent,
      CardAccountComponent,
      ListPokemonComponent
    ],
    imports     : [
      RouterModule.forChild(accountRoutes),
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
export class AccountModule
{
}
