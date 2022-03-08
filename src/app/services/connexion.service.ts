import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private _isConnected: boolean = false;

  constructor() { }

  get isConnected(){
    return this._isConnected;
  }

  public connect(user: Login): boolean{
    if(user.username === 'root' && user.password === 'pw')
      this._isConnected = true;

    return this._isConnected;
  }

  public disconnect(): boolean{
    if(this._isConnected)
      this._isConnected = false;

    return !this._isConnected;
  }
}
