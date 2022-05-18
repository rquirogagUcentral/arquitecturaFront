import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/usuario';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public usuario: Usuario;
  public usuarios : Usuario[];
  constructor(
    private _storageService: StorageService,
    public service: UsuarioServiceService
  ) { 
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void {
    this.getUser();
    this.getEmpleados();
  }
  //Llama la unformación del usuario en sesion del LocalStorage
  getUser()
  {
    let user = this._storageService.getUsuario
    this.usuario = user
  }

  //obtiene los empleados que estan asociados al usuario empresa
  getEmpleados()
  {
    console.log(this.usuario.identificacion)
    this.service.getEmpleados(this.usuario.identificacion).subscribe(users => {
      this.usuarios = users
    })
  }

}
