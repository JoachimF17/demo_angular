import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {
  nbTentatives: number = 0;
  nbValides: number = 0;
  input!: string;
  nom?: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    let min = 4;
    let max = 10;
    let regex = "^[a-zA-Z]{"+min+","+max+"}$";

    if(this.input && this.input.length > 0)
    {
      this.nbTentatives++;

      if(this.input.match(regex))
      {
        this.nbValides++;
        this.nom = this.input;
      }

      this.input = "";
    }
  }
}
