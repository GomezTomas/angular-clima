import { Component } from '@angular/core';
import { Ciudad } from './Ciudad';

@Component({
  selector: 'app-clima-list',
  templateUrl: './clima-list.component.html',
  styleUrl: './clima-list.component.scss'
})
export class ClimaListComponent {
  ciudades : Ciudad[] = [
    {
      "nombre" : "Tandil",
      "tiempo" : "nublado",
      "temperatura" : 18,
      "llueve" : false,
    },
    {
      "nombre" : "Azul",
      "tiempo" : "soleado",
      "temperatura" : 21,
      "llueve" : false,
    },
    {
      "nombre" : "Olavarria",
      "tiempo" : "lluvioso",
      "temperatura" : 12,
      "llueve" : true,
    }
  ]
}
