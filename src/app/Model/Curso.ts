import { DocenteComponent } from "../components/docente/docente.component";
import { TipoCurso } from "./TipoCurso";
import { Usuario } from "./usuario";
import { Lecciones } from "./Leccion";

export class Curso
{
    id : number = 0;
    nombreCurso:string = '';
    idCurso! : TipoCurso 
    objetivo : string = '';
    ubicacion : string = '';
    docente! : Usuario;
    precio: number = 0;
    estudiantes! : Usuario[];
    lecciones! : Lecciones[];
    checking: boolean = false;
}