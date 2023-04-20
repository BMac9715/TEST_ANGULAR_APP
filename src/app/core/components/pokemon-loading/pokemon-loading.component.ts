import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-loading',
  templateUrl: './pokemon-loading.component.html',
  styleUrls: ['./pokemon-loading.component.scss']
})
export class PokemonLoadingComponent {

  loadingText: string = "Cargando";

  constructor() {

  }

}
