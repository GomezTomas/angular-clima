import { Injectable } from '@angular/core';
import { DiaPronosticoExtendido, CiudadPronosticoExtendido } from './clima-list/Ciudad';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PronosticoExtendidoService {

  private _ciudadPronosticoExtendido: CiudadPronosticoExtendido = {} as CiudadPronosticoExtendido;
  ciudadPronosticoExtendido: BehaviorSubject<CiudadPronosticoExtendido> = new BehaviorSubject<CiudadPronosticoExtendido>({} as CiudadPronosticoExtendido);
  constructor(private http: HttpClient) { }

  public getCityForecast(ciudad: string): Observable<CiudadPronosticoExtendido>{
    const url = `https://api.weatherapi.com/v1/forecast.json?key=0df082da6595465fbd711733242206&q=${ciudad}&days=3&aqi=no&alerts=no&lang=es`;
    this.http.get<any>(url)
      .subscribe(
        data => {
          const {location, current, forecast} = data;
          const {name} = location;
          const {condition, temp_c, is_day} = current;
          const {text, icon} = condition;
          const {forecastday} = forecast;
          const dia1 = this.setDayValues(forecastday[0]);
          const dia2 = this.setDayValues(forecastday[1]);
          const dia3 = this.setDayValues(forecastday[2]);

          let ciudadPronosticoExtendido: CiudadPronosticoExtendido = {
            'nombre': name,
            'tiempo': text,
            'favorita': true,
            'temperatura': temp_c,
            'esDeDia': (is_day > 0),
            'img': icon ,
            'diasPronosticoExtendido' : [dia1, dia2, dia3]
          };
          this._ciudadPronosticoExtendido = ciudadPronosticoExtendido;
          this.ciudadPronosticoExtendido.next(this._ciudadPronosticoExtendido);
        }
      );
      return this.ciudadPronosticoExtendido.asObservable();
  }

  private setDayValues(data: any): DiaPronosticoExtendido{
    const {date, day, astro} = data;
    const {maxtemp_c, mintemp_c, totalprecip_mm, avghumidity, daily_chance_of_rain, condition} = day;
    const {sunset, sunrise} = astro;
    const {text, icon} = condition;
    const dia: DiaPronosticoExtendido = {
      'fecha': date,
      'temperaturaMaxima': maxtemp_c,
      'temperaturaMinima': mintemp_c,
      'precipitaciones': totalprecip_mm,
      'humedad': avghumidity,
      'probabilidadDeLLuvia': daily_chance_of_rain,
      'amanecer': sunrise,
      'atardecer': sunset,
      'condicion': text,
      'icono': icon,
    };
    return dia;
  }
}
