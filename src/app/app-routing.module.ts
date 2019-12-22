import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HistorijaComponent} from './historija/historija.component';


const routes: Routes = [
  {
    path: 'history', component: HistorijaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [
  HistorijaComponent
]
