import { Component } from '@angular/core';
import { Ciudad } from './Ciudad';
import { ClimaCardService } from '../clima-card.service';
import { CiudadesDataService } from '../ciudades-data.service';

@Component({
  selector: 'app-clima-list',
  templateUrl: './clima-list.component.html',
  styleUrl: './clima-list.component.scss'
})
export class ClimaListComponent {
  ciudades: Ciudad[] = [];

  constructor(
    private climaCard: ClimaCardService,
    private climaData: CiudadesDataService
  ){
    this.ciudades = climaData.ciudades;
  }
  toggleFavorito(ciudad: Ciudad){
    ciudad.favorita = !ciudad.favorita;
    this.climaCard.toggleFavorito(ciudad);
  }
}
