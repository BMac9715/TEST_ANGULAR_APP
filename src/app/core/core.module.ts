import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { YearsOldPipe } from './pipes/years-old.pipe';
import { PokemonLoadingComponent } from './components/pokemon-loading/pokemon-loading.component';


@NgModule({
    declarations: [
      PokemonLoadingComponent,
      YearsOldPipe
    ],
    imports: [
      CommonModule,
      SharedModule
    ],
    exports: [
      PokemonLoadingComponent,
      YearsOldPipe
    ],
    providers: [YearsOldPipe]
})
export class CoreModule
{
}
