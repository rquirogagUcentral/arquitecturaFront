import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Model/Curso';
import { Usuario } from 'src/app/Model/usuario';
import { CursoService } from 'src/app/services/curso.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  public cursos! : Curso[];
  public usuario!:Usuario;
  public userAuth: boolean = false;

  constructor(
    private _cursoService : CursoService,
    private _apiStorage : StorageService
  ) { 
    this.cursos = new Array<Curso>();
  }

  ngOnInit(): void {
    this.userAuth = this._apiStorage.isAuth()
    if(this.userAuth)
      this.getUser()

    this._cursoService.getCursos(this.usuario.id).subscribe(cursos => {
      console.log(cursos)
      this.cursos = cursos
    })
  }

  getUser()
  {
    let user = this._apiStorage.getUsuario
    this.usuario = user
  }

}
