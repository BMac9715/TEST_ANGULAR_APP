import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, concatMap, forkJoin, map, mergeAll, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pokemon, PokemonGeneral, ResponsePokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private BASE_URL = environment.apiURL;

  constructor(private http: HttpClient) {
  }

  getFirstPokemon(): Observable<any> {
    return this.http.get<ResponsePokemon>(`${this.BASE_URL}/pokemon?offsest=0&limit=9`)
          .pipe(
            map<ResponsePokemon, PokemonGeneral[]>(x => x.results),
            map((pokemons) => {
              const requests = pokemons.map((pokemon) =>
                this.http.get<any>(pokemon.url)
              );

              return forkJoin(requests);
            }),
            mergeAll(),
            map(z => z.map(i => ({ id: i.id, name: i.name,  imageUrl: i.sprites.other.home.front_default}))),
            map(y => y as Pokemon[]),
            tap(x => console.log(x))
          );
  }

  searchByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/pokemon/${name}`)
          .pipe(
            map(z => ({ id: z.id, name: z.name,  imageUrl: z.sprites.other.home.front_default})),
            map(y => y as Pokemon),
            tap(x => console.log(x))
          );
  }
}
