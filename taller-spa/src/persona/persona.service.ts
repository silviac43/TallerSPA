/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../compartido/errors/errores';
import { Repository } from 'typeorm';
import { PersonaEntity } from './persona.entity/persona.entity';

@Injectable()
export class PersonaService {

    constructor(
        @InjectRepository(PersonaEntity)
        private readonly personaRepository: Repository<PersonaEntity>
    ){}

    async findAll(): Promise<PersonaEntity[]> {
        return await this.personaRepository.find({ relations: ["lugar_residencia", "id_tipo_documento"] });
    }
 
    async findOne(id: string): Promise<PersonaEntity> {
        const persona: PersonaEntity = await this.personaRepository.findOne({where: {id}, relations: ["lugar_residencia", "id_tipo_documento"] } );
        if (!persona)
          throw new BusinessLogicException("No existe ninguna persona con el ID dado", BusinessError.NOT_FOUND);
   
        return persona;
    }
   
    async create(persona: PersonaEntity): Promise<PersonaEntity> {
        return await this.personaRepository.save(persona);
    }
 
    async update(id: string, persona: PersonaEntity): Promise<PersonaEntity> {
        const persistedPersona: PersonaEntity = await this.personaRepository.findOne({where:{id}});
        if (!persistedPersona)
          throw new BusinessLogicException("No existe ninguna persona con el ID dado", BusinessError.NOT_FOUND);
       
        persona.id = id; 
       
        return await this.personaRepository.save(persona);
    }
 
    async delete(id: string) {
        const persona: PersonaEntity = await this.personaRepository.findOne({where:{id}});
        if (!persona)
          throw new BusinessLogicException("No existe ninguna persona con el ID dado", BusinessError.NOT_FOUND);
     
        await this.personaRepository.remove(persona);
    }

}
