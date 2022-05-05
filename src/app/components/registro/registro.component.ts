import { Component, OnInit } from '@angular/core';
import { tDocumento } from 'src/app/Mock/tipoDocumentos';
import { TipoDocumento } from 'src/app/Model/tipoDocumento';
import { Usuario } from 'src/app/Model/usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario!:Usuario;
  public tDocs = tDocumento;
  constructor() {
    this.tDocs = new Array<TipoDocumento>();
   }

  ngOnInit(): void {
    this.tDocs = tDocumento;
  }


  register(){

  }

}
