import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {


  paginasParaMostrar: number[] = [];

  //
  DesactivarBotonIzquierdo: boolean = true;
  DesactivarBotonDerecho: boolean = false;


  numero:number = 0;
  desdePaginas: number;
  
  pagina: number = 0;

  registroPerPage: number = 12;

  conteoSolo5: number = 0;

  
  
  @Output() mandarPaginador = new EventEmitter();
  totalRegistros: number = 100;//Automatiza el numero de usuarios
  

  paginasTotales: number = 0;



  constructor() { }

  ngOnInit() {
    this.configurarPaginado();
  }

  /*Sistema de paginado*/
  configurarPaginado(){
    this.paginasTotales = 0;
    //Determina las paginas que se demostraran a partir del total de usuarios
    for(var i = 0; this.numero < this.totalRegistros; i++){
      this.paginasParaMostrar[i] = i+1;
      this.paginasTotales++;
      this.numero += this.registroPerPage;
    }
    console.log("Total paginas: ", this.paginasTotales);
  }

  CambiarPagina(num: number){
    this.pagina = this.pagina + num;
    this.desdePaginas = this.pagina * this.registroPerPage;
    console.log("pagina",this.pagina);
    if(this.pagina <= 0){
      this.DesactivarBotonIzquierdo = true;
    }else{
      this.DesactivarBotonIzquierdo = false;
    }
    if((this.desdePaginas + this.registroPerPage) >= this.totalRegistros){
      this.DesactivarBotonDerecho = true;
    }else{
      this.DesactivarBotonDerecho = false;
    }
    console.log(this.desdePaginas);
    this.emitirdesde();
  }

  IrPagina(page: number){
    this.pagina = page - 1;
    this.desdePaginas = this.pagina * this.registroPerPage;
    if(this.pagina <= 0){
      this.DesactivarBotonIzquierdo = true;
    }else{
      this.DesactivarBotonIzquierdo = false;
    }
    if((this.desdePaginas + this.registroPerPage) >= this.totalRegistros){
      this.DesactivarBotonDerecho = true;
    }else{
      this.DesactivarBotonDerecho = false;
    }
    this.emitirdesde();
  }

  emitirdesde(){
    this.mandarPaginador.emit(this.desdePaginas);
  }

  /*
  calculatePaginaShow(page: number): boolean{
    return ((page-1) == this.pagina-2)
    ||((page-1) == this.pagina-1)||
    ((page-1) == this.pagina)||
    ((page-1) == this.pagina+1)||
    ((page-1) == this.pagina+2);
  }
*/

  calculatePaginaShow(page){
    if(this.pagina < 3){
      return ((page-1) == 0)
      ||((page-1) == 1)||
      ((page-1) == 2)||
      ((page-1) == 3)||
      ((page-1) == 4);
    }else if(this.pagina > (this.paginasTotales - 3)){
      return ((page-1) == this.paginasTotales - 1)
      ||((page-1) == this.paginasTotales - 2)||
      ((page-1) == this.paginasTotales - 3)||
      ((page-1) == this.paginasTotales - 4)||
      ((page-1) == this.paginasTotales - 5);
    }else{
      return ((page-1) == this.pagina-2)
      ||((page-1) == this.pagina-1)||
      ((page-1) == this.pagina)||
      ((page-1) == this.pagina+1)||
      ((page-1) == this.pagina+2);
    }
  }
}
