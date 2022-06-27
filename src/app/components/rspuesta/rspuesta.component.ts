import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Respuesta } from 'src/app/Model/respuesta';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rspuesta',
  templateUrl: './rspuesta.component.html',
  styleUrls: ['./rspuesta.component.css']
})
export class RspuestaComponent implements OnInit {

  public respuesta!: Respuesta;
  public valorResp : string= '';
  public idLecc : number=0;
  constructor(
    private _cursoService: CursoService,
    public _router: Router,
    public activatedRoute: ActivatedRoute
  ) { 
    this.respuesta= new Respuesta
  }

  ngOnInit(): void {
    this.cargarLeccion();
  }
  cargarLeccion()
  {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      this.idLecc = id
    })
  }

  agregarRespuesta()
  {
    this.respuesta.value = JSON.parse(this.valorResp)
    console.log('resp: ', this.respuesta)
    console.log('idlecc: ', this.idLecc)
    this._cursoService.adicionarRespuesta(this.respuesta,this.idLecc).subscribe( response => {
      //let identity = response
      //console.log(response)
      //this.identity = identity
      this._router.navigate(['docente'])
      Swal.fire({
        icon:'success',
        title: 'Respuesta adicionada',
        text: `Bien Hecho!`
      })
    },)
  }
}
