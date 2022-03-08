import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo2Component } from './exo2/exo2.component';
import { SharedModule } from '../shared/shared.module';
import { Exo3Component } from './exo3/exo3.component';
import { Exo4Component } from './exo4/exo4.component';
import { Enfant1Component } from './exo4/enfant1/enfant1.component';
import { Exo5Component } from './exo5/exo5.component';
import { AffichePersonneComponent } from './exo5/affiche-personne/affiche-personne.component';
import { Exo6Component } from './exo6/exo6.component';
import { InsertFormComponent } from './exo6/insert-form/insert-form.component';
import { ListProduitsComponent } from './exo6/list-produits/list-produits.component';
import { ListProduitsItemComponent } from './exo6/list-produits/list-produits-item/list-produits-item.component';
import { Exo7MenuComponent } from './exo7-menu/exo7-menu.component';
import { Exo7PanierComponent } from './exo7-panier/exo7-panier.component';



@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoComponent,
    Exo2Component,
    Exo3Component,
    Exo4Component,
    Enfant1Component,
    Exo5Component,
    AffichePersonneComponent,
    Exo6Component,
    InsertFormComponent,
    ListProduitsComponent,
    ListProduitsItemComponent,
    Exo7MenuComponent,
    Exo7PanierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ExoModule { }
