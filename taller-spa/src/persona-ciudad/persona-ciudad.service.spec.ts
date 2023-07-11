import { Test, TestingModule } from '@nestjs/testing';
import { PersonaCiudadService } from './persona-ciudad.service';

describe('PersonaCiudadService', () => {
  let service: PersonaCiudadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonaCiudadService],
    }).compile();

    service = module.get<PersonaCiudadService>(PersonaCiudadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
