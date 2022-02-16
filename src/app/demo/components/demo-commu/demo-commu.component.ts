import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-commu',
  templateUrl: './demo-commu.component.html',
  styleUrls: ['./demo-commu.component.css']
})
export class DemoCommuComponent implements OnInit {

  info = "info";
  colorParent = 'black';

  constructor() { }

  ngOnInit(): void {
  }

  setColor(color: string){
    this.colorParent = color;
  }

}
