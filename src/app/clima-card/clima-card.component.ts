import { Component } from '@angular/core';
import { Ciudad } from '../clima-list/Ciudad';
import { ClimaCardService } from '../clima-card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clima-card',
  templateUrl: './clima-card.component.html',
  styleUrl: './clima-card.component.scss'
})
export class ClimaCardComponent {
  ciudad: Ciudad;
  city$: Observable<Ciudad[]>;
  constructor(private climaCard: ClimaCardService){
    this.city$ = climaCard.ciudades.asObservable();
  }
}
