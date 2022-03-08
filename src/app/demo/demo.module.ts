import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { D2Component } from './components/d2/d2.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DemoCommuComponent } from './components/demo-commu/demo-commu.component';
import { DemoCommuEnfantComponent } from './components/demo-commu-enfant/demo-commu-enfant.component';
import { FormsComponent } from './components/forms/forms.component';



@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingComponent,
    D2Component,
    DemoDirectivesComponent,
    HighlightDirective,
    DemoCommuComponent,
    DemoCommuEnfantComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
