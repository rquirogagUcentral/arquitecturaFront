import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/Model/Perfil';
import { Usuario } from 'src/app/Model/usuario';
import { EncryptService } from 'src/app/services/encrypt.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario! : Usuario;
  public usuarios! : Usuario[];
  public perfiles: Perfil[] | any;
  public identity : any;
  public prueba: string = '';
  public idPerfil : number = 4;
  constructor(
    private _usuarioService : UsuarioServiceService,
    private _encrypte : EncryptService,
    private _apiStorage : StorageService,
    private _localStorage : LocalStorageService,
    private _router : Router
  ) { 
    this.usuarios = new Array<Usuario>();
    this.perfiles = new Array<Perfil>();
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this._usuarioService.getProfile().subscribe(profile => {
      console.log('profile: ',profile)
      this.perfiles = profile
      console.log('perfil',this.perfiles)
    });
    
  }

  login()
  {
    this.usuario.contrasena = this._encrypte.encypt(this.usuario.contrasena)
    console.log('anter: ' , this.usuario) 
    this.usuario.perfil = new Perfil()
    this.usuario.perfil.id = this.idPerfil
    this._usuarioService.login(this.usuario).subscribe(user => {
      //this.usuario = user
      this._apiStorage.usuarioSesion(user)
      this.usuario = this._apiStorage.getUsuario
      console.log('despues', this.usuario)
      switch(this.usuario.perfil.id){
        case 1:
          this._router.navigate(['admin'])
          break;
        case 2:
          this._router.navigate(['docente'])
          break;
        case 3:
          this._router.navigate(['empresa'])
          break;
        case 4:
          this._router.navigate(['empleado'])
          break;
      }
      Swal.fire({
        icon:'success',
        title: 'Inicion de Sesion',
        text: `Login Correcto para ${this.usuario.nombre}`
      }).then(data => {
        window.location.reload()
      })
    },
    error => {
      var errorMessage = <any>error;
         if (errorMessage != null) {
           Swal.fire('error', 'Falla en la autenticatición, Por favor Revise sus credenciales', error)
         }
    }
    );
  }
}
