import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountData } from '../models/account.interface';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  private _currentAccount: AccountData;
  private _currentPhoto: SafeUrl | string;

  constructor(private sanitizer: DomSanitizer) {
    this._currentAccount = JSON.parse(localStorage.getItem('account')!) || null;
    this.getImageFromLocalStorage();
  }

  get photo (): SafeUrl {
    return this._currentPhoto;
  }

  get account (): AccountData {
    return this._currentAccount;
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

  getCurrentAccount(): AccountData {
    return this._currentAccount;
  }

  private getImageFromLocalStorage() {
    this._currentPhoto = null;
    const base64data = localStorage.getItem('photo');
    const imageUrl = `data:image/jpeg;base64,${base64data}`;
    this._currentPhoto = imageUrl;
  }
}
