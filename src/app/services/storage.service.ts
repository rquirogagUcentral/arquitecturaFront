import { Injectable } from '@angular/core';
import { Perfil } from '../Model/Perfil';
import { Usuario } from '../Model/usuario';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  
  constructor(
    private _localStorage : LocalStorageService
  ) { }

  usuarioSesion(user: Usuario) {
    sessionStorage.setItem('usuario', JSON.stringify(user))
    localStorage.setItem('usuario', JSON.stringify(user))
  }

  public get getUsuario(): Usuario{
    return JSON.parse(this._localStorage.geDatosStorage('usuario'))
  }

  perfilSesion(perfil: Perfil[]) {
    sessionStorage.setItem('perfil', JSON.stringify(perfil))
    localStorage.setItem('perfil', JSON.stringify(perfil))
  }

  public get getPerfil(): Perfil{
    return JSON.parse(this._localStorage.geDatosStorage('perfil'))
  }

  isAuth(): boolean {
    let payload = this.getUsuario
    if (payload != null)
    {
      return true 
    }
    else{
      return false;
    }
  }

  cesarSesion() {
    sessionStorage.removeItem('usuario');
    localStorage.removeItem('usuario');
    localStorage.clear();
    sessionStorage.clear();
  }
  
}
