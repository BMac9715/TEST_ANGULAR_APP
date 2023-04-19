import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearsOldPipe } from './pipes/years-old.pipe';

@NgModule({
    declarations: [
        YearsOldPipe
    ],
    imports: [
      CommonModule
    ],
    exports: [
      CommonModule,
    ],
    providers: [
      YearsOldPipe
    ]
})
export class CoreModule
{
}
