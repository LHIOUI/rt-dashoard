import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _isLoggedIn = false;
  uid = '';
  constructor() {
    this._isLoggedIn = window.localStorage['__loggedIn'] === 'true';
  }
  public get isLoggedIn() {
    return this._isLoggedIn;
  }
  public connect(uid, password) {
    this.uid = uid;
    console.log(uid);
    this._isLoggedIn = true;
    window.localStorage['__loggedIn'] = 'true';
  }
  public logout() {
    this._isLoggedIn = false;
    window.localStorage['__loggedIn'] = 'false';
    this.uid = '';
  }
}
