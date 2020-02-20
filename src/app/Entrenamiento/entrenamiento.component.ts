import { Component, OnInit } from '@angular/core';
import { Jugador } from './Model/jugador/jugador';
import { Actividad } from './Model/actividad/actividad';
import { ListaJugadoresService } from './Service/jugador/lista-jugadores.service';
import { ListaActividadesService } from './Service/actividad/lista-actividades.service'

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.component.html',
  styleUrls: ['./entrenamiento.component.css'],
  providers: [ListaJugadoresService,
              ListaActividadesService]

})
export class EntrenamientoComponent implements OnInit {
jugadores: Jugador[];
actividades: Actividad[];

  constructor(private listaJug : ListaJugadoresService, 
              private listaAct : ListaActividadesService) { 
    this.jugadores = listaJug.listaJugadores;
    this.actividades = listaAct.listaActividades;
  }

  ngOnInit() {
  }

}
