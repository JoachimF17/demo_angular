import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';
import { ExoComponent } from './exo.component';
import { Exo2Component } from './exo2/exo2.component';
import { Exo3Component } from './exo3/exo3.component';
import { Exo4Component } from './exo4/exo4.component';
import { Exo5Component } from './exo5/exo5.component';
import { Exo6Component } from './exo6/exo6.component';
import { Exo7MenuComponent } from './exo7-menu/exo7-menu.component';
import { Exo7PanierComponent } from './exo7-panier/exo7-panier.component';

const routes: Routes = [
    {path: "", component: ExoComponent, children: [
        {path:"binding", component:ExoBindingComponent},
        {path:"chrono", component:Exo2Component},
        {path:"produits", component:Exo3Component},
        {path:"commu", component:Exo4Component},
        {path:"personnes", component:Exo5Component},
        {path:"produits-form", component:Exo6Component},
        {path:"menu-produits", component: Exo7MenuComponent},
        {path:"panier-produits", component: Exo7PanierComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
