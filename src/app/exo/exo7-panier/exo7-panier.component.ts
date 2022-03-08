import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-exo7-panier',
  templateUrl: './exo7-panier.component.html',
  styleUrls: ['./exo7-panier.component.css']
})
export class Exo7PanierComponent implements OnInit {

  panier: Produit[] = [];

  constructor(private service: PanierService) {
    this.panier = service.listeProduits;
  }

  ngOnInit(): void {
  }

  delete(ind: number){
    this.service.removeProduit(ind);
  }

}
