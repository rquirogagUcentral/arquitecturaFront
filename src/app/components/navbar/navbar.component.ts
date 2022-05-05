import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user : boolean = false;
  public usuario!: Usuario ;
  constructor() { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    
  }
}
