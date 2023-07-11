/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipodocumentoService } from './tipodocumento.service';

describe('Service: Tipodocumento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipodocumentoService]
    });
  });

  it('should ...', inject([TipodocumentoService], (service: TipodocumentoService) => {
    expect(service).toBeTruthy();
  }));
});
