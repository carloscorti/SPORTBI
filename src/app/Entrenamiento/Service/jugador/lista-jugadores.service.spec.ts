import { TestBed } from '@angular/core/testing';

import { ListaJugadoresService } from './lista-jugadores.service';

describe('ListaJugadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaJugadoresService = TestBed.get(ListaJugadoresService);
    expect(service).toBeTruthy();
  });
});
