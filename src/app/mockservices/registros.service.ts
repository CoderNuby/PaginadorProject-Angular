import { Injectable } from '@angular/core';
import data from '../mock-data/data.json';


@Injectable({
  providedIn: 'root'
})
export class RegistrosService {


  json: JSON;

  registros: any[];//registros en bruto, se borrara aqui los usuarios no en el archivo json

  usuarios: any[];//usuarios de respuesta de los servicios


  constructor() { 
    this.registros = data.usuarios;
  }

  getUsuarios(desde: number, size: number): any[]{

    this.usuarios = new Array();

    var count = 0;
    
    for (let index = 0; index < this.registros.length; index++) {

      if(desde > index){
        continue;
      }  
      if(count < size){
        const element = this.registros[index];
        this.usuarios.push(element);
        count++;
      }else{
        break;
      }
    }
    return this.usuarios;
  }

  deleteUsuario(id: string){
    /*const index =   this.registros.indexOf(id, 0);
    if (index > -1) {
      //this.registros.splice(index, 1);
      console.log(this.registros[index]);
    }*/
    this.registros = this.registros.filter(obj => obj._id !== id);
  }

  getUsuariosSize(): number{
    return this.registros.length;
  }
}



