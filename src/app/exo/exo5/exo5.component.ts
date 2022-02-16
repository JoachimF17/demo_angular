import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/personne.model';

@Component({
  selector: 'app-exo5',
  templateUrl: './exo5.component.html',
  styleUrls: ['./exo5.component.css']
})
export class Exo5Component implements OnInit {

  listePersonnes: Personne[] = [
    {nom: "Test", prenom: "Jean", age: 27, pays: "Belgique"},
    {nom: "Testo", prenom: "Jeannot", age: 12, pays: "Luxembourg"},
    {nom: "Testi", prenom: "JeanJean", age: 40, pays: "Belgique"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
