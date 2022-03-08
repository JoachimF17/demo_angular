import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {

  @Output('produit-submitted')
  produitSubmitted = new EventEmitter<Produit>()

  produitInsertForm = new FormGroup({
    'marque': new FormControl(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
    'modele': new FormControl(undefined, [Validators.minLength(1), Validators.maxLength(30)]),
    'prix': new FormControl(0, [Validators.required, Validators.min(0)]),
    'stock': new FormControl(1, [Validators.required, Validators.min(1), Validators.max(100)]),
    'enVente': new FormControl(true),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.produitInsertForm.get('stock')?.invalid)
      this.produitInsertForm.get('stock')?.setValue(1)

    if(this.produitInsertForm.valid)
      this.produitSubmitted.emit(this.produitInsertForm.value)
  }

}
