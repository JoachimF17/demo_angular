import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.css']
})
export class Exo4Component implements OnInit {

  couleurUn: string = "mediumvioletred";
  couleurDeux: string = "mediumslateblue";

  constructor() { }

  ngOnInit(): void {
  }

  swapColors(){
    let couleurInter = this.couleurUn;
    this.couleurUn = this.couleurDeux;
    this.couleurDeux = couleurInter;
  }

}
