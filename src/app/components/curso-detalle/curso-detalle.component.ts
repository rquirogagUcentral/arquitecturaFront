import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asistencia } from 'src/app/Model/Asistencia';

import { Curso } from 'src/app/Model/Curso';
import { itemAsistencia } from 'src/app/Model/itemAsistencia';
import { Lecciones } from 'src/app/Model/Leccion';
import { Usuario } from 'src/app/Model/usuario';
import { CursoService } from 'src/app/services/curso.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css']
})
export class CursoDetalleComponent implements OnInit {

  public curso!: Curso;
  public asistencia!: Asistencia;
  public itemAsistencia!: itemAsistencia;
  public lecciones!: Lecciones[];
  public usuarioSes!: Usuario;
  public userAuth: boolean = false;
  public isDocente: boolean = false;
  public isEstudiante: boolean = false;
  public isEmpresa: boolean = false;

  constructor(
    private _cursoService: CursoService,
    public _router: Router,
    public activatedRoute: ActivatedRoute,
    private _apiStorage: StorageService,
    private datePipe: DatePipe
  ) { 
    this.curso = new Curso();
    this.asistencia = new Asistencia();
  }

  ngOnInit(): void {
    this.cargarCurso();

    this.cargaAsistenciaMod()
    
    this.userAuth = this._apiStorage.isAuth()
    if(this.userAuth)
      this.getUser()

    this.valUser();
  }

  getUser()
  {
    let user = this._apiStorage.getUsuario
    this.usuarioSes = user
  }

  valUser()
  {
    this.isDocente = this.usuarioSes.perfil.id == 2  
    this.isEmpresa = this.usuarioSes.perfil.id == 3
    this.isEstudiante = this.usuarioSes.perfil.id == 4
  }

  cargarCurso():void
  {

    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      console.log('id c-d: ',id)
      if(id){
        this._cursoService.getCursoId(id).subscribe( (curso: Curso)  => {
          this.curso = curso
        })
      }
      
    })
  }

  cargaAsistenciaMod()
  {
    this.asistencia = new Asistencia()
    this.asistencia.estudiantes = new Array<Usuario>()
    this.asistencia.estudiantes = this.curso.estudiantes
    console.log('c-d Asis: ', this.asistencia)
  }

  seleccionarItems()
  {
    console.log('entra a seleccionar items')
      for(let e in this.curso.estudiantes)
      {
        this.itemAsistencia = new itemAsistencia()
        this.itemAsistencia.estudiante = this.curso.estudiantes[e].id
        this.itemAsistencia.curso = this.curso.id
        this.itemAsistencia.fecha = this.asistencia.fechaAsistencia;
        this.itemAsistencia.valorAsistencia = false
        this.itemAsistencia.valorAsistencia = this.curso.estudiantes[e].checking

        console.log('c-d itemAss: ', this.itemAsistencia)
        this._cursoService.adicioinarAsistencia(this.itemAsistencia).subscribe(
          respon => {
            
          }
        )
      }
  }

}
