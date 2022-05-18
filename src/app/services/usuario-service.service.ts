import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../Model/usuario';
import { Observable } from 'rxjs';
import { Perfil } from '../Model/Perfil';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  
  
  url = environment.URL
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private _http: HttpClient
  ) { }

  register(usuario: Usuario):Observable<Usuario> {
    return this._http.post<Usuario>(this.url + '/api/usuario', usuario,{headers: this.httpHeaders})
    //,{headers: this.httpHeaders}
  }

  login(usuario: Usuario):Observable<Usuario>
  {
    return this._http.post<Usuario>(this.url + '/api/usuario/ingreso', usuario,{headers: this.httpHeaders})
  }

  getUser() {
    const path = `${this.url}/api/usuario`
    return this._http.get<Usuario[]>(path)
  }

  getProfile(): Observable<Perfil[]> {
    const path = `${this.url}/api/usuario/perfil`
    return this._http.get<Perfil[]>(path)
  }

  getEmpleados(idEmpresa: String): Observable<Usuario[]>{
    const path =`${this.url}/api/usuario/BuscarEmpresa/${idEmpresa}`
    return this._http.get<Usuario[]>(path)
  }

}
