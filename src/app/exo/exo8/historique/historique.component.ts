import { Component, OnInit } from '@angular/core';
import { ColorSwap } from 'src/app/models/color.swap.model';
import { ColorSwapService } from 'src/app/services/color-swap.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  historique: ColorSwap[] = [];

  constructor(private service: ColorSwapService) { 
    service.obsHistorique.subscribe(info => this.historique = info);
  }

  ngOnInit(): void {
  }

}
