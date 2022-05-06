import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/usuario';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario! : Usuario;
  public usuarios! : Usuario[];
  public identity : any;
  constructor(
    private _usuarioService : UsuarioServiceService,
  ) { 
    this.usuarios = new Array<Usuario>();
    this.usuario = new Usuario;
  }

  ngOnInit(): void {
  }

  login()
  {
    this._usuarioService.getUser().subscribe(
      users => {
        this.usuarios = users
      });
      console.log(this.usuarios)
  }
}
