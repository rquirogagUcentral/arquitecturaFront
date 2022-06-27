import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/Model/Curso';
import { Pago } from 'src/app/Model/Pago';
import { Usuario } from 'src/app/Model/usuario';
import { CursoService } from 'src/app/services/curso.service';
import { PagoService } from 'src/app/services/pago.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import Swal from 'sweetalert2';
import { PagoComponent } from '../pago/pago.component';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetalleComponent implements OnInit {

  public usuario! : Usuario
  public usuarioSesion! : Usuario
  public cursos!: Curso[]
  public cursosfiltro!: Curso[]
  public idEstudiante: number = 0
  public isEmpleador: boolean = false;
  public pago!: Pago;
  constructor(
    private _storageService: StorageService,
    public service: UsuarioServiceService,
    public _cursoSrv: CursoService,
    public router: Router,
    public _pago: PagoService,
    public activatedRoute: ActivatedRoute
  ) { 
    this.usuario = new Usuario
    this.usuarioSesion = new Usuario
    this.cursos = new Array<Curso>()
    this.cursosfiltro = new Array<Curso>()
    this.pago= new Pago
  }

  ngOnInit(): void {
    this.getUser();
    this.getUsuarioEmpleado();
  }

  getUser()
  {
    let user = this._storageService.getUsuario
    this.usuarioSesion = user
    this.isEmpleador = this.usuarioSesion.perfil.id == 3
    console.log('usu-ses: ', this.usuarioSesion)
    console.log('es empleador?: ', this.isEmpleador)
  }

  getUsuarioEmpleado()
  {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      this.idEstudiante = id
      console.log('idCurLec: ',id)
      if(id){
        this.service.getUserById(id).subscribe( (user: Usuario)  => {this.usuario = user
          console.log('leccCurso: ',this.usuario)
        })
        this._cursoSrv.getAllCursos().subscribe( cursos => {
          this.cursos = cursos
          const filter = this.cursos.filter(d=>d.estudiantes.find(e=>e.id == id))
          this.cursosfiltro = filter
        })
      }
    })
  }

  seleccionarCurso()
  {
    console.log('entra a seleccionar items')
      for(let e in this.cursos)
      {
        if(this.cursos[e].checking)
        {
          console.log('adiciona estudiante: ', this.usuario, 'a curso: ', this.cursos[e].id)
          this._cursoSrv.adicionarEstudiante(this.usuario, this.cursos[e].id).subscribe(
            response=>{

            }
          )
        }
      }
      window.location.reload();
  }

  generarPago(curso: Curso)
  {
    console.log('pago-cur: ', curso, 'idEst: ', this.idEstudiante)
    this.pago = new Pago
    this.pago.idEstudiante = this.idEstudiante
    this.pago.idCurso = curso.id
    this.pago.estado = 'BANK'
    this._pago.generarPago(this.pago).subscribe(response=>{
      this.pago = response
      console.log(this.pago)
      this.router.navigate(['pago/', this.pago.id])
      Swal.fire({
        icon:'success',
        title: 'Inscripción Generada',
        text: `Curso ${curso.nombreCurso} Listo para Pago`
      })
    })

  }

}
