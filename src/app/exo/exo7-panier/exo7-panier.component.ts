import { Component, OnInit } from '@angular/core';
import { ProduitQt } from 'src/app/models/produit.qt.model';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-exo7-panier',
  templateUrl: './exo7-panier.component.html',
  styleUrls: ['./exo7-panier.component.css']
})
export class Exo7PanierComponent implements OnInit {

  panier: ProduitQt[] = [];

  constructor(private service: PanierService) {
    this.panier = service.listeProduits;
    service.obsListe.subscribe(info => this.panier = info);
  }

  ngOnInit(): void {
  }

  delete(ind: number){
    this.service.removeProduit(ind);
  }

}
