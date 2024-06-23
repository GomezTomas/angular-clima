import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaHomeComponent } from './clima-home/clima-home.component';
import { PronosticoExtendidoComponent } from './pronostico-extendido/pronostico-extendido.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ciudades',
    pathMatch: 'full',
  },
  {
    path: 'ciudades',
    component: ClimaHomeComponent,
  },
  {
    path: 'pronostico/:nombre',
    component: PronosticoExtendidoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
