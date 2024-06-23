import { Component } from '@angular/core';
import { Ciudad } from './Ciudad';
import { ClimaCardService } from '../clima-card.service';

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
      "favorita" : false,
    },
    {
      "nombre" : "Azul",
      "tiempo" : "soleado",
      "temperatura" : 21,
      "llueve" : false,
      "favorita" : false,
    },
    {
      "nombre" : "Olavarria",
      "tiempo" : "lluvioso",
      "temperatura" : 12,
      "llueve" : true,
      "favorita" : false
    }
  ]

  constructor(private climaCard: ClimaCardService){

  }
  toggleFavorito(ciudad: Ciudad){
    ciudad.favorita = !ciudad.favorita;
    console.log(ciudad)
    this.climaCard.toggleFavorito(ciudad);
  }
  ngOnInit() : void{
    console.log(this.ciudades)
  }

  // setCard(ciudad: Ciudad){
  //   this.climaCard.setCard(ciudad);
  // }
}
