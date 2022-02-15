import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo2Component } from './exo2/exo2.component';
import { SharedModule } from '../shared/shared.module';
import { Exo3Component } from './exo3/exo3.component';



@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoComponent,
    Exo2Component,
    Exo3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
