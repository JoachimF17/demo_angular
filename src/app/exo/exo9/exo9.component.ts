import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-exo9',
  templateUrl: './exo9.component.html',
  styleUrls: ['./exo9.component.css']
})
export class Exo9Component implements OnInit {

  listePlats: Plat[] = []

  platInsertForm: FormGroup;

  constructor(builder: FormBuilder, private client: HttpClient) { 
    this.platInsertForm = builder.group({
      nom: new FormControl(),
      type: new FormControl('plat'),
      prix: new FormControl()
    });
    this.getAllPlats();
  }

  ngOnInit(): void {
  }

  getAllPlats(){
    this.client.get<Plat[]>("http://localhost:3000/plats/").subscribe(plats => this.listePlats = plats);
  }

  onSubmit(){
    let plat = {
      id: this.listePlats.length,
      nom: this.platInsertForm.value.nom,
      type: this.platInsertForm.value.type,
      prix: this.platInsertForm.value.prix
    }

    this.client.post<Plat>("http://localhost:3000/plats/", plat).subscribe(() => this.getAllPlats());
  }

}
