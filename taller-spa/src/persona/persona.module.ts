import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaEntity } from './persona.entity/persona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaController } from './persona.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaEntity])],
  providers: [PersonaService],
  controllers: [PersonaController]
})
export class PersonaModule {}
