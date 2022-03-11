import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Plat } from 'src/app/models/plat.model';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-exo9',
  templateUrl: './exo9.component.html',
  styleUrls: ['./exo9.component.css']
})
export class Exo9Component implements OnInit {

  listePlats: Plat[] = []

  platInsertForm: FormGroup;

  constructor(builder: FormBuilder,private service: PlatsService) { 
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
    this.service.getAllPlats().subscribe({
      next: plats => this.listePlats = plats,
      error: () => alert("echec"),
      complete: () => console.log("get plats - completed")
    });
  }

  onSubmit(){
    let plat = {
      id: this.listePlats.length,
      nom: this.platInsertForm.value.nom,
      type: this.platInsertForm.value.type,
      prix: this.platInsertForm.value.prix
    }

    this.service.postPlat(plat).subscribe(() => this.getAllPlats());
  }

}
