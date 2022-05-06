import { Perfil } from "./Perfil";

export class Usuario
{
    id : number =0;
    tipoIdentificacion : string = '';
    identificacion : string='';
    contrasena : string = '';
    habilitado : boolean = false;
    correo : string = '';
    nombre : string = '';
    telefono : string = '';
    fechaNacimiento : string = '';
    perfil! : Perfil;
    idEmpresa :string = '';
    
}