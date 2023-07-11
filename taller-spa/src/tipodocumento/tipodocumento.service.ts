/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../compartido/errors/errores';
import { Repository } from 'typeorm';
import { TipodocumentoEntity } from './tipodocumento.entity/tipodocumento.entity';

@Injectable()
export class TipodocumentoService {

    constructor(
        @InjectRepository(TipodocumentoEntity)
        private readonly tipodocumentoRepository: Repository<TipodocumentoEntity>
    ){}

    async findAll(): Promise<TipodocumentoEntity[]> {
        return await this.tipodocumentoRepository.find({});
    }
 
    async findOne(id: string): Promise<TipodocumentoEntity> {
        const tipodocumento: TipodocumentoEntity = await this.tipodocumentoRepository.findOne({where: {id},} );
        if (!tipodocumento)
          throw new BusinessLogicException("No existe ningun tipodocumento con el ID dado", BusinessError.NOT_FOUND);
   
        return tipodocumento;
    }
   
    async create(tipodocumento: TipodocumentoEntity): Promise<TipodocumentoEntity> {
        return await this.tipodocumentoRepository.save(tipodocumento);
    }
 
    async update(id: string, tipodocumento: TipodocumentoEntity): Promise<TipodocumentoEntity> {
        const persistedTipodocumento: TipodocumentoEntity = await this.tipodocumentoRepository.findOne({where:{id}});
        if (!persistedTipodocumento)
          throw new BusinessLogicException("No existe ningun tipodocumento con el ID dado", BusinessError.NOT_FOUND);
       
        return await this.tipodocumentoRepository.save({...persistedTipodocumento, ...tipodocumento,});
    }
 
    async delete(id: string) {
        const tipodocumento: TipodocumentoEntity = await this.tipodocumentoRepository.findOne({where:{id}});
        if (!tipodocumento)
          throw new BusinessLogicException("No existe ningun tipodocumento con el ID dado", BusinessError.NOT_FOUND);
     
        await this.tipodocumentoRepository.remove(tipodocumento);
    }

}
