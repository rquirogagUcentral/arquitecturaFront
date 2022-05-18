import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from 'src/app/Model/Curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css']
})
export class CursoDetalleComponent implements OnInit {

  public curso!: Curso;

  constructor(
    private _cursoService: CursoService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarCurso();

  }

  cargarCurso():void
  {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      console.log('id: ',id)
      if(id){
        this._cursoService.getCursoId(id).subscribe( (curso: Curso)  => this.curso = curso)
      }
    })
  }

}
