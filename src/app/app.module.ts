import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DocenteComponent } from './components/docente/docente.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { AdminComponent } from './components/admin/admin.component';
import { CursoComponent } from './components/curso/curso.component';
import { CursoDetalleComponent } from './components/curso-detalle/curso-detalle.component';
import { LeccionComponent } from './components/leccion/leccion.component';
import { DatePipe } from '@angular/common';
import { RspuestaComponent } from './components/rspuesta/rspuesta.component';
import { EmpleadoDetalleComponent } from './components/empleado-detalle/empleado-detalle.component';
import { PagoComponent } from './components/pago/pago.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    LoginComponent,
    DocenteComponent,
    EmpleadoComponent,
    EmpresaComponent,
    AdminComponent,
    CursoComponent,
    CursoDetalleComponent,
    LeccionComponent,
    RspuestaComponent,
    EmpleadoDetalleComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
