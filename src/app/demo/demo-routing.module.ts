import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { D2Component } from "./components/d2/d2.component";
import { DemoBindingComponent } from "./components/demo-binding/demo-binding.component";
import { DemoCommuComponent } from "./components/demo-commu/demo-commu.component";
import { DemoDirectivesComponent } from "./components/demo-directives/demo-directives.component";
import { FormsComponent } from "./components/forms/forms.component";
import { DemoComponent } from "./demo.component";


const routes: Routes = [
    { path:'', component: DemoComponent, children: [
        { path: 'binding', component:DemoBindingComponent },
        { path: 'd2', component: D2Component },
        {path: 'directives', component: DemoDirectivesComponent},
        {path: 'commu', component: DemoCommuComponent},
        {path: 'forms', component: FormsComponent}
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule{}