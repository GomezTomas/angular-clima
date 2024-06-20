import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClimaCardComponent } from './clima-card/clima-card.component';
import { ClimaListComponent } from './clima-list/clima-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaCardComponent,
    ClimaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
