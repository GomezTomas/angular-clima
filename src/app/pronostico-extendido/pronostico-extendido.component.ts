import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pronostico-extendido',
  templateUrl: './pronostico-extendido.component.html',
  styleUrl: './pronostico-extendido.component.scss'
})
export class PronosticoExtendidoComponent {
  ciudadNombre:any;
  constructor(private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void{
    this.ciudadNombre = this.activatedRoute.snapshot.paramMap.get('nombre');
  }

}
