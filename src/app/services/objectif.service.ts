import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {

  private _objectifActuel: string = '';

  obsObjectif = new Subject<string>();

  constructor() { }

  definirObjectif(input: string){
    this._objectifActuel = input;
    this.obsObjectif.next(this._objectifActuel);
  }

  afficherObjectif(): string{
    return this._objectifActuel;
  }
}
