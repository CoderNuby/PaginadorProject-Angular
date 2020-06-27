import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { RegistrosComponent } from './registros/registros.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginadorComponent,
    RegistrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
