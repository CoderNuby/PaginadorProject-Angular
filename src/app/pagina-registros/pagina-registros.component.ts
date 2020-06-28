import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../mockservices/registros.service';
import { PaginadorComponent } from '../paginador/paginador.component';

@Component({
  selector: 'app-pagina-registros',
  templateUrl: './pagina-registros.component.html',
  styleUrls: ['./pagina-registros.component.css']
})
export class PaginaRegistrosComponent implements OnInit {

  usuarios: any[];

  desde: number = 0;

  registrosPerPages: number = 5;

  totalUsuarios: number;

  constructor(
    private _registrosServices: RegistrosService
    ) {
    this.totalUsuarios = this._registrosServices.getUsuariosSize();

    
  }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  cambiarPagina($event){
    this.desde = $event;
    console.log(this.desde);
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.usuarios = this._registrosServices.getUsuarios(this.desde, this.registrosPerPages);
  }

  borrarUsuario(id: string){
    this._registrosServices.deleteUsuario(id);
    this.obtenerUsuarios();
    this.totalUsuarios = this._registrosServices.getUsuariosSize();
  }
}
