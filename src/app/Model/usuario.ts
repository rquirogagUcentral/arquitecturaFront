import { TipoDocumento } from "./tipoDocumento";

export class Usuario
{
    id : number =0;
    tipoIdentificacion : string = '';
    nombre : string = '';
    apellido : string='';
    identificacion : string='';
    edad : number = 0;
    contrasena : string = '';
    direccion : string = '';
    correo : string = '';
}