import { Injectable } from '@angular/core';
import { Jugador } from '../../Model/jugador/jugador';

@Injectable({
  providedIn: 'root'
})

export class ListaJugadoresService {
  public listaJugadores: Jugador[] = [
    new Jugador("Dalmiro"),
    new Jugador("Jose"),
    new Jugador("Pedro"),
    new Jugador("Manuel"),
    new Jugador("Sebastian"),
    new Jugador("Roberto"),
    new Jugador("Ruben"),
  ]

}
