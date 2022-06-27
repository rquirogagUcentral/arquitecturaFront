import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pago } from '../Model/Pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  url = environment.URL
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(
    private _http: HttpClient
  ) { }

  generarPago(pago: Pago)
  {
    const path = `${this.url}/api/pago`
    return this._http.post<Pago>(path,pago,{headers: this.httpHeaders})
  }

}
