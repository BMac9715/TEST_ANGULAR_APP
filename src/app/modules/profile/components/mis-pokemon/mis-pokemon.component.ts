import { Component } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.interface';
import { AccountManagementService } from 'src/app/modules/account/services/account-management.service';

@Component({
  selector: 'app-mis-pokemon',
  templateUrl: './mis-pokemon.component.html',
  styleUrls: ['./mis-pokemon.component.scss']
})
export class MisPokemonComponent {

  pokemons: Pokemon[] = [];

  constructor(private accountService: AccountManagementService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pokemons = this.accountService.pokemon;
  }

}
