import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tBool } from 'src/app/Mock/selBooleano';
import { Curso } from 'src/app/Model/Curso';
import { itemBool } from 'src/app/Model/ItemBool';
import { Lecciones } from 'src/app/Model/Leccion';
import { Respuesta } from 'src/app/Model/respuesta';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leccion',
  templateUrl: './leccion.component.html',
  styleUrls: ['./leccion.component.css']
})
export class LeccionComponent implements OnInit {

  public leccion!: Lecciones;
  public lecciones!: Lecciones[];
  public curso!: Curso;
  public respuesta!: Respuesta;
  public booleano : itemBool[];
  public valorResp : string= '';
  constructor(
    private _cursoService: CursoService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { 
    this.leccion = new Lecciones();
    this.curso = new Curso;
    this.lecciones = new Array<Lecciones>();
    this.booleano = new Array<itemBool>();
    this.respuesta = new Respuesta;
  }

  ngOnInit(): void {
    this.cargarCurso();
    this.booleano = tBool
  }

  cargarCurso():void
  {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      console.log('idCurLec: ',id)
      if(id){
        this._cursoService.getCursoId(id).subscribe( (curso: Curso)  => {this.curso = curso
        console.log('leccCurso: ',this.curso)
        this.lecciones = this.curso.lecciones

      })
        
      }
      
    })
  }

  

  crearLeccion(){
    console.log('leccion',this.leccion)
    console.log('cursolecc', this.curso)
    this._cursoService.createLeccion(this.leccion, this.curso.id).subscribe(resLeccion=>{
      console.log('respo: ', resLeccion)
      this.router.navigate([`/curso-detalle/${this.curso.id}`])
      Swal.fire({
        icon:'success',
        title: 'Haz Creado una Leccion',
        text: `Creación Correcta para ${this.leccion.nombreLeccion}`
      })
    })
  }

}
