import { Component, OnInit } from '@angular/core';
import { ColorSwapService } from 'src/app/services/color-swap.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  colorHeader!: string;

  constructor(private service: ColorSwapService) { 
    this.colorHeader = service.getColor();
    service.obsColor.subscribe(info => this.colorHeader = info);
  }

  ngOnInit(): void {
  }

}
