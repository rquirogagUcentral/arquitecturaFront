import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DocenteComponent } from './components/docente/docente.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'docente', component: DocenteComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'empleado', component: EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
