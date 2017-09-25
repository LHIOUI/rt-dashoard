import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _isLoggedIn = true;
  uid = '';
  constructor() {}
  public get isLoggedIn() {
    return this._isLoggedIn;
  }
  public connect(uid, password) {
    this.uid = uid;
    console.log(uid);
    this._isLoggedIn = true;
  }
  public logout() {
    this._isLoggedIn = false;
    this.uid = '';
  }
}
