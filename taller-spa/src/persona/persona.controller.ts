/* eslint-disable */

import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../compartido/interceptors/errores/errores.interceptor';
import { PersonaDto } from './persona.dto/persona.dto';
import { PersonaEntity } from './persona.entity/persona.entity';
import { PersonaService } from './persona.service';

@Controller('personas')
@UseInterceptors(BusinessErrorsInterceptor)

export class PersonaController {
    constructor(private readonly personaService: PersonaService) {}

    @Get()
    async findAll() {
      return await this.personaService.findAll();
    }
  
    @Get(':personaId')
    async findOne(@Param('personaId') personaId: string) {
      return await this.personaService.findOne(personaId);
    }
  
    @Post()
    async create(@Body() personaDto: PersonaDto) {
      const persona: PersonaEntity = plainToInstance(PersonaEntity, personaDto);
      return await this.personaService.create(persona);
    }
  
    @Put(':personaId')
    async update(@Param('personaId') personaId: string, @Body() personaDto: PersonaDto) {
      const persona: PersonaEntity = plainToInstance(PersonaEntity, personaDto);
      return await this.personaService.update(personaId, persona);
    }
  
    @Delete(':personaId')
    @HttpCode(204)
    async delete(@Param('personaId') personaId: string) {
      return await this.personaService.delete(personaId);
    }
}
