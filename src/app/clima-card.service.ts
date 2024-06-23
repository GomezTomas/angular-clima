import { Injectable } from '@angular/core';
import { Ciudad } from './clima-list/Ciudad';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaCardService {

  private _ciudades: Ciudad[] = [];
  ciudades: BehaviorSubject<Ciudad[]> = new BehaviorSubject<Ciudad[]>([])

  toggleFavorito(ciudad: Ciudad){
    console.log(ciudad.favorita, "servicio")
    if (ciudad.favorita) {
      this._ciudades.push(ciudad)
      this._ciudades.sort((a, b) =>{
        if ( a.nombre < b.nombre){
          return -1 
        }
          else return 1
        })
        this.ciudades.next(this._ciudades) 
    } else {
      let index = this._ciudades.indexOf(ciudad)
      this._ciudades.splice(index, 1);
    }
    console.log(this._ciudades);
  }

  constructor() { }
}
