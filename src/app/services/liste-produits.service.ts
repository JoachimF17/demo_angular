import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ListeProduitsService {

  private _listeProduits: Produit[] = [
    {marque: "Ahah", modele: "boh", stock: 12, prix: 5.35, enVente: true},
    {marque: "Eheh", modele: "yuh", stock: 27, prix: 40.72, enVente: true},
    {marque: "Ohoh", modele: "yah", stock: 5, prix: 14.99, enVente: true}
  ];

  get listeProduits(){
    return [...this._listeProduits];
  }

  constructor() { }
}
