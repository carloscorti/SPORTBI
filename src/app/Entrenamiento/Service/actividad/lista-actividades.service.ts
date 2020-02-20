import { Injectable } from '@angular/core';
import { Actividad } from '../../Model/actividad/actividad';


@Injectable({
  providedIn: 'root'
})
export class ListaActividadesService {
  public listaActividades : Actividad [] = [
    new Actividad ("Entrenamiento en campo", "EC"),
    new Actividad ("Kinesiologo", "K"),
    new Actividad ("Descanso", "D"),
    new Actividad ("Viaje", "V"),
    new Actividad ("Ausente", "A"),
    new Actividad ("Ausente con aviso", "AA"),
    new Actividad ("Partido", "P"),
    new Actividad ("Festejo", "F"),

  ]
  
}
