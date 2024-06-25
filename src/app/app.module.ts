import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClimaCardComponent } from './clima-card/clima-card.component';
import { ClimaListComponent } from './clima-list/clima-list.component';
import { ClimaHomeComponent } from './clima-home/clima-home.component';
import { PronosticoExtendidoComponent } from './pronostico-extendido/pronostico-extendido.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ClimaCardComponent,
    ClimaListComponent,
    ClimaHomeComponent,
    PronosticoExtendidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
