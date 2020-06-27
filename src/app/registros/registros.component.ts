import { Component, OnInit } from '@angular/core';
import data from '../data/data.json';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {


  json: JSON;

  registros: any;

  constructor() { 
    this.registros = data.usuarios;

    console.log("Registros update: ", this.registros);
  }

  ngOnInit() {
    console.log("json work: ",this.registros);
  }

  cambiarPagina($event){
    console.log($event);
  }

}

