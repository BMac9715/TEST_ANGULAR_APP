import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-pokemon',
  templateUrl: './choose-pokemon.component.html',
  styleUrls: ['./choose-pokemon.component.scss']
})
export class ChoosePokemonComponent {

  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

}
