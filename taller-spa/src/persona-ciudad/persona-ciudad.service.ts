import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CiudadEntity } from '../ciudad/ciudad.entity/ciudad.entity';
import { PersonaEntity } from '../persona/persona.entity/persona.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../compartido/errors/errores';

@Injectable()
export class PersonaCiudadService {
   constructor(
       @InjectRepository(PersonaEntity)
       private readonly personaRepository: Repository<PersonaEntity>,
   
       @InjectRepository(CiudadEntity)
       private readonly ciudadRepository: Repository<CiudadEntity>
   ) {}

   async addCiudadPersona(personaId: string, ciudadId: string): Promise<PersonaEntity> {
       const ciudad: CiudadEntity = await this.ciudadRepository.findOne({where: {id: ciudadId}});
       if (!ciudad)
         throw new BusinessLogicException("No existe ninguna ciudad con el ID dado", BusinessError.NOT_FOUND);
     
       const persona: PersonaEntity = await this.personaRepository.findOne({where: {id: personaId}, relations: [ "lugar_residencia"]})
       if (!persona)
         throw new BusinessLogicException("No existe ninguna persona con el ID dado", BusinessError.NOT_FOUND);
   
       persona.lugar_residencia = ciudad;
       return await this.personaRepository.save(persona);
     }
   
   async findCiudadByPersonaId(personaId: string): Promise<CiudadEntity> {
       const persona: PersonaEntity = await this.personaRepository.findOne({where: {id: personaId}, relations: ["lugar_residencia"]});
       if (!persona)
         throw new BusinessLogicException("No existe ninguna persona con el ID dado", BusinessError.NOT_FOUND)
      
       return persona.lugar_residencia;
   }
   
   async deleteCiudadPersona(personaId: string){
   
       const persona: PersonaEntity = await this.personaRepository.findOne({where: {id: personaId}, relations: ["lugar_residencia"]});
       if (!persona)
         throw new BusinessLogicException("No existe ninguna persona con el ID dado", BusinessError.NOT_FOUND)
   
       const personaCiudad: CiudadEntity = persona.id_tipo_documento;

       persona.lugar_residencia = null;
       await this.personaRepository.save(persona);
   }  
}