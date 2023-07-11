import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipodocumentoEntity } from '../tipodocumento/tipodocumento.entity/tipodocumento.entity';
import { PersonaEntity } from '../persona/persona.entity/persona.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../compartido/errors/errores';

@Injectable()
export class PersonaTipodocumentoService {
   constructor(
       @InjectRepository(PersonaEntity)
       private readonly personaRepository: Repository<PersonaEntity>,
   
       @InjectRepository(TipodocumentoEntity)
       private readonly tipodocumentoRepository: Repository<TipodocumentoEntity>
   ) {}

   async addTipodocumentoPersona(personaId: string, tipodocumentoId: string): Promise<PersonaEntity> {
       const tipodocumento: TipodocumentoEntity = await this.tipodocumentoRepository.findOne({where: {id: tipodocumentoId}});
       if (!tipodocumento)
         throw new BusinessLogicException("No existe ningun tipodocumento con el ID dado", BusinessError.NOT_FOUND);
     
       const persona: PersonaEntity = await this.personaRepository.findOne({where: {id: personaId}, relations: ["id_tipo_documento"]})
       if (!persona)
         throw new BusinessLogicException("No existe ninguna persona con el ID dado", BusinessError.NOT_FOUND);
   
       persona.id_tipo_documento = tipodocumento;
       return await this.personaRepository.save(persona);
     }
   
   async findTipodocumentoByPersonaId(personaId: string): Promise<TipodocumentoEntity> {
       const persona: PersonaEntity = await this.personaRepository.findOne({where: {id: personaId}, relations: ["id_tipo_documento"]});
       if (!persona)
         throw new BusinessLogicException("No existe ninguna persona con el ID dado", BusinessError.NOT_FOUND)
      
       return persona.id_tipo_documento;
   }
   
   async deleteTipodocumentoPersona(personaId: string){

       const persona: PersonaEntity = await this.personaRepository.findOne({where: {id: personaId}, relations: ["id_tipo_documento"]});
       if (!persona)
         throw new BusinessLogicException("No existe ninguna persona con el ID dado", BusinessError.NOT_FOUND)
   
       const personaTipodocumento: TipodocumentoEntity = persona.id_tipo_documento;

       persona.id_tipo_documento = null;
       await this.personaRepository.save(persona);
   }  
}