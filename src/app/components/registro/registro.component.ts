import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tDocumento } from 'src/app/Mock/tipoDocumentos';
import { Perfil } from 'src/app/Model/Perfil';
import { TipoDocumento } from 'src/app/Model/tipoDocumento';
import { Usuario } from 'src/app/Model/usuario';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario!:Usuario;
  public tDocs : TipoDocumento[];
  public identity : any;
  public error : any;
  constructor(
    private _usuarioService : UsuarioServiceService,
    private _router: Router
  ) {
    this.tDocs = new Array<TipoDocumento>();
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
    this.tDocs = tDocumento;
    console.log(this.tDocs);
  }


  register(){

    this.usuario.perfil = new Perfil();
    this.usuario.perfil.id = 3;
    this.usuario.habilitado = true;
    console.log(this.usuario);
    this._usuarioService.register(this.usuario).subscribe(
      response => {
        let identity = response
        console.log(response)
        this.identity = identity
        this._router.navigate(['login'])
      }
    );
  }

}
