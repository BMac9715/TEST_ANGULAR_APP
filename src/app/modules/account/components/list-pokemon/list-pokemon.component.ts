import { Component, ElementRef, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.interface';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { AccountManagementService } from '../../services/account-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  items: Pokemon[] = [];
  selectedCards: Pokemon[] = [];

  disabled: boolean = true;

  constructor(private pokemonService : PokemonService, private accountService: AccountManagementService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonService.getFirstPokemon()
    .subscribe((res)=> {
      this.items = res;
    })
  }

  buscar(): void {
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0) {
      return;
    }

    this.pokemonService.searchByName(valor)
    .subscribe(
      (val) => {
        if(!this.items.includes(val)) {
          this.items.unshift(val);
        }
      }
    );

    this.txtBuscar.nativeElement.value = '';
  }

  padWithZeros(num: number, totalLength: number): string {
    return String(num).padStart(totalLength, '0')
  }

  toggleSelected(card: Pokemon) {
    if (this.selectedCards.includes(card)) {
      this.selectedCards.splice(this.selectedCards.indexOf(card), 1);

      if(this.selectedCards.length < 3){
        this.disabled = true;
      }
    } else {
      this.selectedCards.push(card);

      if (this.selectedCards.length >= 3) {
        this.disabled = false;
      }
    }
  }

  onClickSave(): void {
    this.accountService.savePokemon(this.selectedCards);

    this.router.navigate(['/profile'], { relativeTo: this.route });
  }
}
