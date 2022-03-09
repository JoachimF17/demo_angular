import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {

  private _objectifActuel: string = '';

  constructor() { }

  definirObjectif(input: string){
    this._objectifActuel = input;
  }

  afficherObjectif(){
    return this._objectifActuel;
  }
}
