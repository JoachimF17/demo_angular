import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {
  nbTentatives: number = 0;
  nbValides: number = 0;
  input: string = "";
  nom: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.nbTentatives++;

    this.input = (<HTMLInputElement>document.getElementById("input")).value;

    if(this.input.length <= 10 && this.input.length >=4)
    {
      this.nbValides++;
      this.nom = this.input;
    }
      
  }

}
