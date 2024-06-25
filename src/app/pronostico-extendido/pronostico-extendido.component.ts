import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PronosticoExtendidoService } from '../pronostico-extendido.service';
import { Observable, delay } from 'rxjs';
import { CiudadPronosticoExtendido } from '../clima-list/Ciudad';

@Component({
  selector: 'app-pronostico-extendido',
  templateUrl: './pronostico-extendido.component.html',
  styleUrl: './pronostico-extendido.component.scss',
  providers: [
    {provide: 'nombreCiudad', useValue: 'tandil'},
  ],
})
export class PronosticoExtendidoComponent {
  ciudadNombre: any;
  ciudad$: Observable<CiudadPronosticoExtendido>;
  ciudad: CiudadPronosticoExtendido;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pronosticoExtendidoService: PronosticoExtendidoService
  ){

  }
  ngOnInit(): void{
    this.ciudadNombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.ciudad$ = this.pronosticoExtendidoService.getCityForecast(this.ciudadNombre);
  }

}
