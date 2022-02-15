import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.css']
})
export class DemoDirectivesComponent implements OnInit {

  color: string = "black";
  bgColor: string = "red";

  nbInput: number = 0;

  displayed: boolean = false;

  tabFruit = [
    "pomme",
    "banane",
    "cerise"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.displayed = !this.displayed;
  }

}
