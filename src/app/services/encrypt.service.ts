import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  private secret = environment.secretKey; 
  constructor() { }

  encypt(contrasena: string) : string{
    //return CryptoJS.AES.encrypt(contrasena.trim(), this.secret.trim()).toString();;
    return btoa(contrasena)
  }

  desencypt(contrasena: string): string{
    //return CryptoJS.AES.decrypt(contrasena.trim(), this.secret.trim()).toString(CryptoJS.enc.Utf8);;
    return atob(contrasena)
  }
}
