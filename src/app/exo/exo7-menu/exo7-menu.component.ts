import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { ListeProduitsService } from 'src/app/services/liste-produits.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-exo7-menu',
  templateUrl: './exo7-menu.component.html',
  styleUrls: ['./exo7-menu.component.css']
})
export class Exo7MenuComponent implements OnInit {

  listeProduits: Produit[] = [];

  constructor(private servicePanier: PanierService, serviceProduits: ListeProduitsService) {
    this.listeProduits = serviceProduits.listeProduits;
  }

  ngOnInit(): void {
  }

  add(toAdd: Produit){
    this.servicePanier.addProduit(toAdd);
  }

}
