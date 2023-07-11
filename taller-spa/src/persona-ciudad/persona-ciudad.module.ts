import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaEntity } from '../persona/persona.entity/persona.entity';
import { CiudadEntity } from '../ciudad/ciudad.entity/ciudad.entity';
import { PersonaCiudadService } from './persona-ciudad.service';
import { PersonaCiudadController } from './persona-ciudad.controller';

@Module({
 imports: [TypeOrmModule.forFeature([PersonaEntity,CiudadEntity])],
 providers: [PersonaCiudadService],
 controllers: [PersonaCiudadController],
})
export class PersonaCiudadModule {}
