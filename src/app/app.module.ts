import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { PaginaRegistrosComponent } from './pagina-registros/pagina-registros.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginadorComponent,
    PaginaRegistrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
