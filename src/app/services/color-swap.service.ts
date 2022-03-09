import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ColorSwap } from '../models/color.swap.model';

@Injectable({
  providedIn: 'root'
})
export class ColorSwapService {

  private _color: string = '';
  private _historique: ColorSwap[] = [];

  obsColor = new Subject<string>();
  obsHistorique = new Subject<ColorSwap[]>();

  constructor() { }

  setColor(input: string){
    this._color = input;
    this._historique.push({
      color: this._color,
      date: new Date()
    });
    this.obsColor.next(this._color);
    this.obsHistorique.next(this._historique);
  }

  getColor(): string{
    return this._color;
  }

  getHistorique(): ColorSwap[]{
    return this._historique;
  }
}
