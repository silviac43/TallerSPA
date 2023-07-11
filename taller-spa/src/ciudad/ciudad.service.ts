/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../compartido/errors/errores';
import { Repository } from 'typeorm';
import { CiudadEntity } from './ciudad.entity/ciudad.entity';

@Injectable()
export class CiudadService {

    constructor(
        @InjectRepository(CiudadEntity)
        private readonly ciudadRepository: Repository<CiudadEntity>
    ){}

    async findAll(): Promise<CiudadEntity[]> {
        return await this.ciudadRepository.find({});
    }
 
    async findOne(id: string): Promise<CiudadEntity> {
        const ciudad: CiudadEntity = await this.ciudadRepository.findOne({where: {id},} );
        if (!ciudad)
          throw new BusinessLogicException("No existe ninguna ciudad con el ID dado", BusinessError.NOT_FOUND);
   
        return ciudad;
    }
   
    async create(ciudad: CiudadEntity): Promise<CiudadEntity> {
        return await this.ciudadRepository.save(ciudad);
    }
 
    async update(id: string, ciudad: CiudadEntity): Promise<CiudadEntity> {
        const persistedCiudad: CiudadEntity = await this.ciudadRepository.findOne({where:{id}});
        if (!persistedCiudad)
          throw new BusinessLogicException("No existe ninguna ciudad con el ID dado", BusinessError.NOT_FOUND);
       
        ciudad.id = id; 
       
        return await this.ciudadRepository.save(ciudad);
    }
 
    async delete(id: string) {
        const ciudad: CiudadEntity = await this.ciudadRepository.findOne({where:{id}});
        if (!ciudad)
          throw new BusinessLogicException("No existe ninguna ciudad con el ID dado", BusinessError.NOT_FOUND);
     
        await this.ciudadRepository.remove(ciudad);
    }

}
