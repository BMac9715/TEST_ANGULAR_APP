export interface ResponsePokemon {
  count: number;
  next: string;
  previous: string;
  results: PokemonGeneral[]
}

export interface PokemonGeneral {
    name: string;
    url: string;
}

export interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}
