import { Injectable } from '@angular/core';
import { Ciudad } from './clima-list/Ciudad';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadesDataService {
  private _ciudades: Ciudad[] = [];
  ciudades: BehaviorSubject<Ciudad[]> = new BehaviorSubject<Ciudad[]>([]);
  constructor(private http: HttpClient) { 
    this.getCity("Japan");
    this.getCity("Olavarria");
    this.getCity("Azul");
  }

  private getCity(ciudad: string): void{
    let url = `https://api.weatherapi.com/v1/current.json?key=0df082da6595465fbd711733242206&q=${ciudad}&lang=es`
    this.http.get<any>(url)
      .subscribe( data => {
        const {location, current} = data;
        const {name} = location;
        const {condition, temp_c, is_day} = current;
        const {text, icon} = condition;
        let ciudadFromData: Ciudad = {
          'nombre': name,
          'tiempo': text,
          'favorita': false,
          'temperatura': temp_c,
          'esDeDia': (is_day > 0),
          'img': icon,
        };
        this._ciudades.push(ciudadFromData);
        this.ciudades.next(this._ciudades);
      });
  }
}
