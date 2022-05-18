import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Model/Curso';
import { TipoCurso } from 'src/app/Model/TipoCurso';
import { Usuario } from 'src/app/Model/usuario';
import { CursoService } from 'src/app/services/curso.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  public curso!: Curso;
  public tipoCurso!: TipoCurso[];
  public usuarioSes!: Usuario;
  public userAuth: boolean = false;
  constructor(
    private _cursoService: CursoService,
    private _apiStorage: StorageService
  ) { }

  ngOnInit(): void {
    this.curso = new Curso();
    this._cursoService.getTipoCurso().subscribe(tCurso => {
      this.tipoCurso = tCurso
    })
    
    this.userAuth = this._apiStorage.isAuth()
    if(this.userAuth)
      this.getUser()
  }

  getUser()
  {
    let user = this._apiStorage.getUsuario
    this.usuarioSes = user
  }

  registerCurso()
  {
    
  }

}
