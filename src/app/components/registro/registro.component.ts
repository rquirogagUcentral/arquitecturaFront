import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tDocumento } from 'src/app/Mock/tipoDocumentos';
import { Perfil } from 'src/app/Model/Perfil';
import { TipoDocumento } from 'src/app/Model/tipoDocumento';
import { Usuario } from 'src/app/Model/usuario';
import { EncryptService } from 'src/app/services/encrypt.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario!:Usuario;
  public usuarioEmp : Usuario
  public valContrasena : string ='';
  public tDocs : TipoDocumento[];
  public identity : any;
  public error : any;
  public userAuth: boolean = false;

  constructor(
    private _usuarioService : UsuarioServiceService,
    private _router: Router,
    private _encrypt: EncryptService,
    public _apiService: StorageService,
  ) {
    this.tDocs = new Array<TipoDocumento>();
    this.usuario = new Usuario();
    this.usuarioEmp = new Usuario();
   }

  ngOnInit(): void {
    this.tDocs = tDocumento;
    //console.log(this.tDocs);
    this.userAuth = this._apiService.isAuth()
    if(this.userAuth)
      this.getUser()
  }


  register(){
    if(this.usuario.contrasena == this.valContrasena)
    {
      this.usuario.contrasena = this._encrypt.encypt(this.valContrasena);
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
    else
    {
      Swal.fire(
        'Error',
        'No coinciden las contraseñas, por favor verifica de nuevo',
        'error'
      );
    }
      
  }

  getUser()
  {
    let user = this._apiService.getUsuario
    this.usuario = user
  }

  registerEmp(){
      this.usuarioEmp.contrasena = this._encrypt.encypt(this.usuarioEmp.identificacion);
      this.usuarioEmp.perfil = new Perfil();
      this.usuarioEmp.perfil.id = 4;
      this.usuarioEmp.habilitado = true;
      this.usuarioEmp.idEmpresa = this.usuario.identificacion
      console.log(this.usuarioEmp);
      this._usuarioService.register(this.usuarioEmp).subscribe(
        response => {
          //let identity = response
          //console.log(response)
          //this.identity = identity
          this._router.navigate(['empresa'])
          Swal.fire({
            icon:'success',
            title: 'Registro Completado',
            text: `Login Correcto para ${this.usuarioEmp.nombre}`
          })
        },
        error => {
          var errorMessage = <any>error;
          if (errorMessage != null) {
            Swal.fire('error', 'Falla en la Creación de usuario, Por favor verifique la información', error)
          }
        }

      );
  }

}
