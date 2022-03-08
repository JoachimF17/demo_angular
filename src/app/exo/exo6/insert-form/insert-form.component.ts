import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { priceDoubleStock, PRODUIT_INSERT_FORM, sameTwoLetters } from 'src/app/models/forms/produit.form';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {

  @Output('produit-submitted')
  produitSubmitted = new EventEmitter<Produit>()

  produitInsertForm: FormGroup;

  constructor(builder: FormBuilder) {
    this.produitInsertForm = builder.group(PRODUIT_INSERT_FORM, {
      validators: [priceDoubleStock, sameTwoLetters]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.produitInsertForm.valid)
      this.produitSubmitted.emit({
        'marque': this.produitInsertForm.value.marque,
        'modele': this.produitInsertForm.value.modele,
        'prix': this.produitInsertForm.value.prix,
        'stock': isNaN(this.produitInsertForm.value.stock) ? 1 : this.produitInsertForm.value.stock,
        'enVente': this.produitInsertForm.value.enVente
      })
  }

}
