import { Component, OnInit } from '@angular/core';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-demo-commu',
  templateUrl: './demo-commu.component.html',
  styleUrls: ['./demo-commu.component.css']
})
export class DemoCommuComponent implements OnInit {

  info = "info";
  colorParent = 'black';

  constructor(private service: ObjectifService) { }

  ngOnInit(): void {
  }

  setColor(color: string){
    this.colorParent = color;
  }
    
  inputService: string = '';

  modifier(){
    this.service.definirObjectif(this.inputService);
    this.inputService = '';
  }

}
