import { Component, OnInit } from '@angular/core';
import { Chrono } from 'src/app/models/chrono.model';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component implements OnInit {

  timer: Chrono = {
    minutes: 0,
    seconds: 0
  }
  running: boolean = false;
  run?: any;
  selecteur: number = 1;
  formattage: string = "deuxPoints";

  objectifActuel: string = '';

  constructor(service: ObjectifService) {  
    this.objectifActuel = service.afficherObjectif();
  }

  ngOnInit(): void {
  }

  chrono() {
    if(this.timer.seconds < 59){
      this.timer.seconds++;
    }else{
      this.timer.seconds = 0;
      this.timer.minutes++;
    }
  }

  start(){
    this.run = setInterval(() => this.chrono(), 1000);
    this.running = true;
  }

  pause(){
    clearInterval(this.run);
    this.running = false;
  }

  reset(){
    this.timer.seconds = 0;
    this.timer.minutes = 0;
  }

  select(){
    this.increment();

    switch(this.selecteur){
      case 1:
        this.formattage = 'deuxPoints';
        break;
      case 2:
        this.formattage = 'short';
        break;
      case 3:
        this.formattage = 'long';
        break;
    }
  }

  increment(){
    if(this.selecteur < 3){
      this.selecteur++;
    }else{
      this.selecteur = 1;
    }
  }
}
