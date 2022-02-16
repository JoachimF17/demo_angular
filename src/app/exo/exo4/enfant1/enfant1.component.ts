import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant1',
  templateUrl: './enfant1.component.html',
  styleUrls: ['./enfant1.component.css']
})
export class Enfant1Component implements OnInit {

  @Input('getColor')
  color: string = "";

  @Output('swapEmitter')
  emitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.emitter.emit();
  }

}
