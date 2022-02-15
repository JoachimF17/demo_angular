import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})
export class Exo3Component implements OnInit {

  listeProduits: Produit[] = [
    {marque: "Test1", modele: "boh", stock: 2, prix: 5.35, enVente: true},
    {marque: "Test2", modele: "yuh", stock: 0, prix: 40.72, enVente: false},
    {marque: "Test3", modele: "yah", stock: 15, prix: 1.99, enVente: true}
  ]

  hidePasEnVente: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  remove(i: number){
    delete this.listeProduits[i];
  }

  stockCheck(stock: number): string{
    if(stock < 5)
      return "red";
    
    return "green";
  }

  toggleHide(){
    this.hidePasEnVente = !this.hidePasEnVente;
  }

  toggleVente(indice: number){
    this.listeProduits[indice].enVente = !this.listeProduits[indice].enVente;
  }


}
