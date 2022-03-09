import { Component, OnInit } from '@angular/core';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-exo-binding',
  templateUrl: './exo-binding.component.html',
  styleUrls: ['./exo-binding.component.css']
})
export class ExoBindingComponent implements OnInit {

  nom!: string;
  nbrTentative=0;
  nbrValide=0;
  dernierValide?: string;


  constructor(private service: ObjectifService) {

  }

  ngOnInit(): void {
  }

  validate(){
    this.nbrTentative++;
    if( this.nom && this.nom.match("^[a-zA-Z]{4,10}$")){
      this.nbrValide++;
      this.dernierValide = this.nom;
    }
    this.nom = '';
  }
  
  inputService: string = '';

  modifier(){
    this.service.definirObjectif(this.inputService);
    this.inputService = '';
  }

}
