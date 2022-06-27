import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { Curso } from 'src/app/Model/Curso';
import { TipoCurso } from 'src/app/Model/TipoCurso';
import { Usuario } from 'src/app/Model/usuario';
import { CursoService } from 'src/app/services/curso.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';
import { DocenteComponent } from '../docente/docente.component';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  public curso!: Curso;
  public tipCurso!: TipoCurso[];
  public usuarioSes!: Usuario;
  public userAuth: boolean = false;
  public idCourse: number = 1;
  constructor(
    private _cursoService: CursoService,
    private _apiStorage: StorageService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.curso = new Curso();
    this._cursoService.getTipoCurso().subscribe(tCurso => {
      this.tipCurso = tCurso
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
    this.curso.docente = new Usuario();
    this.curso.docente.id = this.usuarioSes.id
    this.curso.idCurso = new TipoCurso();
    console.log()
    this.curso.idCurso.id = this.idCourse;
    console.log('id curso: ' , this.idCourse)
    console.log('curso' , this.curso)
    this._cursoService.createCurso(this.curso).subscribe(resCurso =>{
      console.log('respo: ', resCurso)
      this._router.navigate(['docente'])
      Swal.fire({
        icon:'success',
        title: 'Haz Creado un Curso',
        text: `Creación Correcta para ${this.curso.nombreCurso}`
      })
    }

    );
  }

}
