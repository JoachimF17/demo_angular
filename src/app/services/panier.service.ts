import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Produit } from '../models/produit.model';
import { ProduitQt } from '../models/produit.qt.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _listeProduits: ProduitQt[] = [];

  obsListe = new Subject<ProduitQt[]>();

  constructor() { }

  get listeProduits(){
    return [...this._listeProduits];
  }

  addProduit(toAdd: Produit){
    let present = false;

    for(let i = 0; i < this._listeProduits.length && !present; i++){
      if(toAdd == this._listeProduits[i].produit){
        present = true;
        this._listeProduits[i].qt++;
      }
    }

    if(!present){
      this._listeProduits.push({
        produit: toAdd,
        qt: 1
      });
    }

    toAdd.stock--;
    this.obsListe.next(this._listeProduits);
  }

  removeProduit(ind: number){
    this._listeProduits[ind].produit.stock++;
    this._listeProduits[ind].qt--;

    if(this._listeProduits[ind].qt == 0){
      this._listeProduits.splice(ind, 1);
    }

    this.obsListe.next(this._listeProduits);
  }
}
