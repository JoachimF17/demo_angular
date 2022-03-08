import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-exo7-menu',
  templateUrl: './exo7-menu.component.html',
  styleUrls: ['./exo7-menu.component.css']
})
export class Exo7MenuComponent implements OnInit {

  produitInsertForm: FormGroup;

  constructor(builder: FormBuilder, private service: PanierService) {
    this.produitInsertForm = builder.group({
    'marque': [],
    'modele': [],
    'prix': [0],
    'stock': [1],
    'enVente': [true]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.produitInsertForm.valid){
      this.service.addProduit({
        'marque': this.produitInsertForm.value.marque,
        'modele': this.produitInsertForm.value.modele,
        'prix': this.produitInsertForm.value.prix,
        'stock': this.produitInsertForm.value.stock,
        'enVente': this.produitInsertForm.value.enVente
      });
    }
  }

}
