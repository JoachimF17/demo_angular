import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.css']
})
export class Exo6Component implements OnInit {

  listProduit : Produit[]  = [
    {
      marque: "marque1",
      modele: "modele1",
      prix: 1,
      stock: 1,
      enVente: true,
    },
    {
      marque: "marque2",
      modele: "modele2",
      prix: 2,
      stock: 2,
      enVente: true,
    },
    {
      marque: "marque3",
      modele: "modele3",
      prix: 3,
      stock: 3,
      enVente: true,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(toInsert: Produit){
    this.listProduit.push(toInsert);
  }

}
