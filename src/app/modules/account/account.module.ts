import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { accountRoutes } from './account.routing';
import { AccountComponent } from './pages/account/account.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { AccountFormComponent } from './components/account-form/account-form.component';

import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
      AccountComponent,
      UploadImageComponent,
      AccountFormComponent
    ],
    imports     : [
      RouterModule.forChild(accountRoutes),
      MaterialModule,
      SharedModule,
    ]
})
export class AccountModule
{
}
