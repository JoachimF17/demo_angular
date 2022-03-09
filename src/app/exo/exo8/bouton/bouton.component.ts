import { Component, OnInit } from '@angular/core';
import { ColorSwapService } from 'src/app/services/color-swap.service';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent implements OnInit {

  color!: string;

  constructor(private service: ColorSwapService) { }

  ngOnInit(): void {
  }

  onChange(){
    this.service.setColor(this.color);
  }

}
