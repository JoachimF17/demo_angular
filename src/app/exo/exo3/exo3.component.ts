import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})
export class Exo3Component implements OnInit {

  listeProduits: Produit[] = [
    {marque: "Ahah", modele: "boh", stock: 2, prix: 5.35, enVente: true},
    {marque: "Eheh", modele: "yuh", stock: 0, prix: 40.72, enVente: false},
    {marque: "Ohoh", modele: "yah", stock: 15, prix: 14.99, enVente: true}
  ]

  tempMarque: string = "";
  tempModele: string = "";
  tempStock: number = 0;
  tempPrix: number = 0;

  hidePasEnVente: boolean = false;
  produitAjoute: boolean = false;

  tri: string = "Sort by";

  constructor() { }

  ngOnInit(): void {
  }

  remove(i: number){
    this.listeProduits.splice(i, 1);
    this.switchTri();
  }

  stockCheck(stock: number): string{
    if(stock < 5) return "firebrick";
    
    return "mediumseagreen";
  }

  toggleHide(){
    this.hidePasEnVente = !this.hidePasEnVente;
  }

  toggleVente(indice: number){
    this.listeProduits[indice].enVente = !this.listeProduits[indice].enVente;
  }

  addProduit(){
    let tempProduit: Produit = {marque: this.tempMarque, modele: this.tempModele, stock: this.tempStock, prix: this.tempPrix, enVente: true};
    this.listeProduits.push(tempProduit);
    this.switchTri();
    this.tempMarque = "";
    this.tempModele = "";
    this.tempStock = 0;
    this.tempPrix = 0;
    this.produitAjoute = true;
  }

  switchTri(){
    switch(this.tri){
      case 'prixAsc':
        this.listeProduits.sort((p1, p2) => p1.prix - p2.prix);
        break;
      case 'prixDsc':
        this.listeProduits.sort((p1, p2) => p2.prix - p1.prix);
        break;
      case 'stockAsc':
        this.listeProduits.sort((p1, p2) => p1.stock - p2.stock);
        break;
      case 'stockDsc':
        this.listeProduits.sort((p1, p2) => p2.stock - p1.stock);
        break;
      case 'marque':
        this.listeProduits.sort((p1, p2) => p1.marque.localeCompare(p2.marque));
        break;
    }
  }
}
