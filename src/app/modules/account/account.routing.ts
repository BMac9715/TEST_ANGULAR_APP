import { Route } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ChoosePokemonComponent } from './pages/choose-pokemon/choose-pokemon.component';

export const accountRoutes: Route[] = [
    {
        path     : '',
        component: AccountComponent
    },
    {
        path: 'choose-pokemon',
        component: ChoosePokemonComponent
    }

];
