import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _listeProduits: Produit[] = [];

  constructor() { }

  get listeProduits(){
    return this._listeProduits
  }

  addProduit(toAdd: Produit): boolean{
    return this._listeProduits.push(toAdd) === 1;
  }

  removeProduit(ind: number){
    this._listeProduits.splice(ind, 1);
  }
}
