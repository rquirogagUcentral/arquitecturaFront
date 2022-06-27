import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CursoDetalleComponent } from './components/curso-detalle/curso-detalle.component';
import { CursoComponent } from './components/curso/curso.component';
import { DocenteComponent } from './components/docente/docente.component';
import { EmpleadoDetalleComponent } from './components/empleado-detalle/empleado-detalle.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { LeccionComponent } from './components/leccion/leccion.component';
import { LoginComponent } from './components/login/login.component';
import { PagoComponent } from './components/pago/pago.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RspuestaComponent } from './components/rspuesta/rspuesta.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'docente', component: DocenteComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'curso-detalle/:id', component: CursoDetalleComponent},
  {path: 'leccion/:id', component: LeccionComponent},
  {path: 'leccion-respuestas/:id', component: RspuestaComponent},
  {path: 'empleado-detalle/:id', component: EmpleadoDetalleComponent},
  {path: 'pagos/:id',  component: PagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
