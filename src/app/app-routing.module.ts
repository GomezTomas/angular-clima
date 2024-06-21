import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaHomeComponent } from './clima-home/clima-home.component';
import { CiudadDetalleComponent } from './ciudad-detalle/ciudad-detalle.component';

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
    path: 'ciudad/:nombre',
    component: CiudadDetalleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
