import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    this.emitter.emit(this.color);
  }

}
