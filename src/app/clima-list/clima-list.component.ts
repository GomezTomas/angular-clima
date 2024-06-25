import { Component } from '@angular/core';
import { Ciudad } from './Ciudad';
import { ClimaCardService } from '../clima-card.service';
import { CiudadesDataService } from '../ciudades-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clima-list',
  templateUrl: './clima-list.component.html',
  styleUrl: './clima-list.component.scss'
})
export class ClimaListComponent {
  ciudades$: Observable<Ciudad[]>;
  constructor(
    private climaCard: ClimaCardService,
    private climaData: CiudadesDataService
  ){

  }
  toggleFavorito(ciudad: Ciudad){
    ciudad.favorita = !ciudad.favorita;
    this.climaCard.toggleFavorito(ciudad);
  }

  ngOnInit(): void{
    this.ciudades$ = this.climaData.ciudades.asObservable();
  }

}
