import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { Exo1Component } from './components/exo1/exo1.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoBindingComponent,
    Exo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
