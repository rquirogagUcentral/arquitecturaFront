import { Respuesta } from "./respuesta";

export class Lecciones{
    id: number = 0;
    nombreLeccion : string ='';
    contenidoLeccion : string ='';
    pregunta : string ='';
    respuestas!: Respuesta[];
}