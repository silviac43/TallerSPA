import { Test, TestingModule } from '@nestjs/testing';
import { PersonaTipodocumentoService } from './persona-tipodocumento.service';

describe('PersonaTipodocumentoService', () => {
  let service: PersonaTipodocumentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonaTipodocumentoService],
    }).compile();

    service = module.get<PersonaTipodocumentoService>(PersonaTipodocumentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
