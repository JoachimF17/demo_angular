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

  hidePasEnVente: boolean = false;

  tri?: string = "Sort by";

  constructor() { }

  ngOnInit(): void {
  }

  remove(i: number){
    delete this.listeProduits[i];
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

  switchTri(){
    switch(this.tri){
      case 'prixAsc':
        this.listeProduits = this.listeProduits.sort((p1, p2) => p1.prix - p2.prix);
        break;
      case 'prixDsc':
        this.listeProduits = this.listeProduits.sort((p1, p2) => p2.prix - p1.prix);
        break;
      case 'stockAsc':
        this.listeProduits = this.listeProduits.sort((p1, p2) => p1.stock - p2.stock);
        break;
      case 'stockDsc':
        this.listeProduits = this.listeProduits.sort((p1, p2) => p2.stock - p1.stock);
        break;
      default:
        this.listeProduits = this.listeProduits.sort((p1, p2) => {
          if(p1.marque > p2.marque)
            return 1;
          if(p1.marque < p2.marque)
            return -1;
          
            return 0;
        });
        break;
    }
  }
}
