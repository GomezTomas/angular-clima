import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ciudad } from '../clima-list/Ciudad';

@Component({
  selector: 'app-ciudad-detalle',
  templateUrl: './ciudad-detalle.component.html',
  styleUrl: './ciudad-detalle.component.scss'
})
export class CiudadDetalleComponent {
  ciudades : Ciudad[] = [
    {
      "nombre" : "Tandil",
      "tiempo" : "nublado",
      "temperatura" : 18,
      "llueve" : false,
      "favorita" : true,
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
  ciudadElegida : Ciudad;
  ciudadNombre : string | null;

  constructor(private activatedRoute: ActivatedRoute){
    
  }

  ngOnInit(): void{
    this.ciudadNombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.ciudades.forEach( ciudad => {
      if (ciudad.nombre == this.ciudadNombre){
        this.ciudadElegida = ciudad;
      }
    });
  }
}
