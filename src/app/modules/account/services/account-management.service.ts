import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountData } from '../models/account.interface';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Pokemon } from 'src/app/core/models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  private _currentAccount: AccountData;
  private _currentPhoto: SafeUrl | string;
  private _choosedPokemon: Pokemon[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this._currentAccount = JSON.parse(localStorage.getItem('account')!) || null;
    this._choosedPokemon = JSON.parse(localStorage.getItem('pokemon')!) || [];
  }

  get photo (): SafeUrl {
    return this._currentPhoto;
  }

  get account (): AccountData {
    return this._currentAccount;
  }

  get pokemon (): Pokemon[] {
    return this._choosedPokemon;
  }

  savePokemon(pokemon: Pokemon[]): void {
    this._choosedPokemon = pokemon;

    localStorage.setItem('pokemon', JSON.stringify(this._choosedPokemon));
  }

  savePhoto(src: SafeUrl, url: string): void {
    this._currentPhoto = src;

    if(src === null) {
      localStorage.removeItem('photo');
    }
    else {
      localStorage.setItem('photo', JSON.stringify(url));
    }
  }

  saveAccount(account: AccountData): void {
    this._currentAccount = account;

    localStorage.setItem('account', JSON.stringify(this._currentAccount));
  }
}
