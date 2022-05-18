import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../Model/Curso';
import { TipoCurso } from '../Model/TipoCurso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = environment.URL
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private _http: HttpClient
  ) { }

  getCursos(idUsuario: number):Observable<Curso[]>
  {
    const path = `${this.url}/api/curso/docente/${idUsuario}`
    return this._http.get<Curso[]>(path)
  }

  getTipoCurso():Observable<TipoCurso[]>
  {
    const path = `${this.url}/api/curso/tipo-curso` 
    return this._http.get<TipoCurso[]>(path)
  }

  getCursoId(id: number){
    const path = `${this.url}/api/curso/${id}` 
    return this._http.get<Curso>(path)
  }

createCurso(curso: Curso){
  const path = `${this.url}/api/curso/`
  return this._http.post<Curso>(path,curso,{headers: this.httpHeaders}) 
}
  
}
