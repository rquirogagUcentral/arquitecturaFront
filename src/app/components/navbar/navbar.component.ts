import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/usuario';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user : boolean = false;
  public usuario!: Usuario ;
  constructor(
    public _apiService: StorageService,
    public _router: Router
  ) { 
    this.user = this._apiService.isAuth()
    console.log('const: ', this.user)
  }

  ngOnInit(): void {
    this.user = this._apiService.isAuth()
    console.log('init: ', this.user)
  }

  cerrarSesion(){
    this._apiService.cesarSesion()
    
    
    this._router.navigate(['/'])
    Swal.fire('Sesión finalizada con éxito', 'success').then(data => {
      window.location.reload()
    })
  }
}
