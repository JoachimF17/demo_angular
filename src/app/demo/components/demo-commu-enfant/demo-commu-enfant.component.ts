import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-demo-commu-enfant',
  templateUrl: './demo-commu-enfant.component.html',
  styleUrls: ['./demo-commu-enfant.component.css']
})
export class DemoCommuEnfantComponent implements OnInit {

  @Input('getInfo')
  infoRecup: string = "";

  color: string = 'black';

  @Output('colorEmitter')
  emitter = new EventEmitter<string>();

  objectifActuel: string = '';

  constructor(private service: ObjectifService) { 
    service.obsObjectif.subscribe(info => this.objectifActuel = info);
  }

  nouvelObjectif(){
    this.service.afficherObjectif();
  }

  ngOnInit(): void {
  }

  onChange(){
    this.emitter.emit(this.color);
  }

}
