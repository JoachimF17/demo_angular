import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { D2Component } from './components/d2/d2.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';



@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingComponent,
    D2Component,
    DemoDirectivesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
