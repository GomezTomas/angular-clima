import { Injectable } from '@angular/core';
import { Ciudad } from './clima-list/Ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesDataService {
  ciudades: Ciudad[] = [
    {
      "nombre": "Tandil",
      "tiempo": "nublado",
      "temperatura": 18,
      "llueve": false,
      "favorita": false,
    },
    {
      "nombre": "Azul",
      "tiempo": "soleado",
      "temperatura": 21,
      "llueve": false,
      "favorita": false,
    },
    {
      "nombre": "Olavarria",
      "tiempo": "lluvioso",
      "temperatura": 12,
      "llueve": true,
      "favorita": false,
    }
  ]

  constructor() { }
}
