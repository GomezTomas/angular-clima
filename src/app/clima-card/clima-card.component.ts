import { Component } from '@angular/core';

@Component({
  selector: 'app-clima-card',
  templateUrl: './clima-card.component.html',
  styleUrl: './clima-card.component.scss'
})
export class ClimaCardComponent {
  ciudad = {
    "nombre" : "Tandil",
    "tiempo" : "soleado",
    "temperatura" : 18,
  }
}
