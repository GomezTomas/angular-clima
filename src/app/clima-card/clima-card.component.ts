import { Component } from '@angular/core';
import { Ciudad } from '../clima-list/Ciudad';

@Component({
  selector: 'app-clima-card',
  templateUrl: './clima-card.component.html',
  styleUrl: './clima-card.component.scss'
})
export class ClimaCardComponent {
  ciudad : Ciudad =
    {
      "nombre" : "Tandil",
      "tiempo" : "soleado",
      "temperatura" : 18,
      "llueve" : false,
    }
}
