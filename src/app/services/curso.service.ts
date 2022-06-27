import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../Model/Curso';
import { itemAsistencia } from '../Model/itemAsistencia';
import { Lecciones } from '../Model/Leccion';
import { Respuesta } from '../Model/respuesta';
import { TipoCurso } from '../Model/TipoCurso';
import { Usuario } from '../Model/usuario';

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

  getAllCursos():Observable<Curso[]>
  {
    const path = `${this.url}/api/curso/`
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
  
  createLeccion(leccion: Lecciones, id : number){
    const path = `${this.url}/api/curso/${id}/add-leccion`
    return this._http.put<Lecciones>(path,leccion,{headers: this.httpHeaders}) 
  }

  adicionarRespuesta(respuesta: Respuesta, id: number){
    const path = `${this.url}/api/curso/leccion/${id}/add-respuestas/`
    return this._http.put<Respuesta>(path,respuesta,{headers: this.httpHeaders})
  }

  adicioinarAsistencia(asistencia: itemAsistencia){
    const path = `${this.url}/api/asistencia/`
    return this._http.post<itemAsistencia>(path,asistencia,{headers: this.httpHeaders})
  }

  adicionarEstudiante(estudiante: Usuario, id: number)
  {
    const path =`${this.url}/api/curso/${id}/add-estudiante`
    return this._http.put<Curso>(path,estudiante,{headers: this.httpHeaders})
  }
}
