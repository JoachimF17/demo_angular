import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/personne.model';

@Component({
  selector: 'app-affiche-personne',
  templateUrl: './affiche-personne.component.html',
  styleUrls: ['./affiche-personne.component.css']
})
export class AffichePersonneComponent implements OnInit {

  @Input('getPersonne')
  personne?: Personne;

  constructor() { }

  ngOnInit(): void {
  }

  affichage(): string{
    if(this.personne){
      return this.personne.nom;
    }

    return "";
  }

}
