import { TestBed } from '@angular/core/testing';

import { ListaActividadesService } from './lista-actividades.service';

describe('ListaActividadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaActividadesService = TestBed.get(ListaActividadesService);
    expect(service).toBeTruthy();
  });
});
