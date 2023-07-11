import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaEntity } from '../persona/persona.entity/persona.entity';
import { TipodocumentoEntity } from '../tipodocumento/tipodocumento.entity/tipodocumento.entity';
import { PersonaTipodocumentoService } from './persona-tipodocumento.service';
import { PersonaTipodocumentoController } from './persona-tipodocumento.controller';

@Module({
 imports: [TypeOrmModule.forFeature([PersonaEntity,TipodocumentoEntity])],
 providers: [PersonaTipodocumentoService],
 controllers: [PersonaTipodocumentoController],
})
export class PersonaTipodocumentoModule {}